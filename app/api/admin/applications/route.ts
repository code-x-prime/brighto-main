import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { deleteFromR2 } from '@/lib/r2'
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

export async function GET(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const applications = await prisma.jobApplication.findMany({
      include: { job: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ success: true, applications })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const application = await prisma.jobApplication.update({
      where: { id: body.id },
      data: { status: body.status },
    })
    return NextResponse.json({ success: true, application })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    // Get application to find R2 key
    const app = await prisma.jobApplication.findUnique({ where: { id } })
    if (app?.resumeKey) {
      await deleteFromR2(app.resumeKey)
    }

    await prisma.jobApplication.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}
