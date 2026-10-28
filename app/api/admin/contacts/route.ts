import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { KNOWN_SOURCES, combine, searchWhere, sourceWhere, statusWhere } from '@/lib/contact-query'

function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value
  if (!token) return false
  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return true
  } catch {
    return false
  }
}

export async function GET(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sp = request.nextUrl.searchParams
    const limit = Math.min(Math.max(parseInt(sp.get('limit') || '30', 10) || 30, 1), 100)
    const requestedPage = Math.max(parseInt(sp.get('page') || '1', 10) || 1, 1)
    const q = (sp.get('q') || '').slice(0, 200)
    const status = sp.get('status') || 'all'
    const source = sp.get('source') || 'all'

    const bySearch = searchWhere(q)
    const byStatus = statusWhere(status)
    const bySource = sourceWhere(source)

    const where = combine(byStatus, bySource, bySearch) as never
    const total = await prisma.contactSubmission.count({ where })
    const totalPages = Math.max(1, Math.ceil(total / limit))
    const page = Math.min(requestedPage, totalPages)

    const [submissions, statusGroups, knownSourceCounts, sourceGroups, allForSources] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        include: { notes: { orderBy: { createdAt: 'desc' } } },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.contactSubmission.groupBy({
        by: ['status'],
        where: combine(bySource, bySearch) as never,
        _count: { _all: true },
      }),
      Promise.all(
        KNOWN_SOURCES.map(async s => [
          s,
          await prisma.contactSubmission.count({ where: combine(byStatus, bySearch, sourceWhere(s)) as never }),
        ] as const)
      ),
      prisma.contactSubmission.groupBy({
        by: ['source'],
        where: combine(byStatus, bySearch) as never,
        _count: { _all: true },
      }),
      prisma.contactSubmission.count({ where: combine(byStatus, bySearch) as never }),
    ])

    const statusCounts: Record<string, number> = {}
    for (const g of statusGroups) statusCounts[g.status] = g._count._all

    const sourceCounts: Record<string, number> = Object.fromEntries(knownSourceCounts)
    const knownLower = new Set(
      ['brighto india', 'brighto', 'hubcheck', 'truering', 'crediscout', 'credi-scout', 'credify']
    )
    for (const g of sourceGroups) {
      if (!knownLower.has(g.source.trim().toLowerCase())) {
        sourceCounts[g.source] = (sourceCounts[g.source] || 0) + g._count._all
      }
    }

    return NextResponse.json({
      success: true,
      submissions,
      total,
      page,
      limit,
      totalPages,
      counts: { status: statusCounts, source: sourceCounts, allSources: allForSources },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}
