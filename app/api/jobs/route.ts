import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'

function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value
  if (!token) return false
  try {
    jwt.verify(token, process.env.JWT_SECRET || 'brighto-admin-secret-key-2024')
    return true
  } catch {
    return false
  }
}

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ success: true, jobs })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const job = await prisma.job.create({
      data: {
        title: body.title,
        department: body.department,
        location: body.location,
        type: body.type || 'Full-time',
        experience: body.experience,
        description: body.description,
        requirements: body.requirements,
        isActive: body.isActive ?? true,
      },
    })
    return NextResponse.json({ success: true, job })
  } catch {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
