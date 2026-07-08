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

const DEFAULT_STATS = [
  { key: 'verificationRequests', label: 'Verification Requests', value: '2,847', type: 'number' },
  { key: 'verificationGrowth', label: 'Weekly Growth', value: '+12% week', type: 'text' },
  { key: 'verificationProgress', label: 'Progress %', value: '74', type: 'percentage' },
  { key: 'activeCases', label: 'Active Cases', value: '543', type: 'number' },
  { key: 'riskAlerts', label: 'Risk Alerts', value: '28', type: 'number' },
  { key: 'fraudFlags', label: 'Fraud Flags', value: '5', type: 'number' },
  { key: 'investigationProgress', label: 'Investigation Progress', value: '78', type: 'percentage' },
  { key: 'avgTurnaround', label: 'Avg Turnaround', value: '3.2', type: 'number' },
  { key: 'avgTurnaroundUnit', label: 'Turnaround Unit', value: 'days', type: 'text' },
  { key: 'avgTurnaroundChange', label: 'Turnaround Change', value: '0.4 days vs last month', type: 'text' },
  { key: 'complianceMet', label: 'Requirements Met', value: '4', type: 'number' },
  { key: 'complianceTotal', label: 'Total Requirements', value: '5', type: 'number' },
]

export async function GET() {
  try {
    const stats = await prisma.dashboardStat.findMany()
    if (stats.length === 0) {
      return NextResponse.json({ success: true, stats: DEFAULT_STATS, isDefault: true })
    }
    return NextResponse.json({ success: true, stats, isDefault: false })
  } catch {
    return NextResponse.json({ success: true, stats: DEFAULT_STATS, isDefault: true })
  }
}

export async function PUT(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { stats } = body

    for (const stat of stats) {
      await prisma.dashboardStat.upsert({
        where: { key: stat.key },
        update: { value: stat.value, label: stat.label },
        create: { key: stat.key, label: stat.label, value: stat.value, type: stat.type || 'text' },
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Initialize with default stats
    for (const stat of DEFAULT_STATS) {
      await prisma.dashboardStat.upsert({
        where: { key: stat.key },
        update: {},
        create: stat,
      })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to initialize' }, { status: 500 })
  }
}
