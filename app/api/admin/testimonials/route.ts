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
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json({ success: true, testimonials })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const testimonial = await prisma.testimonial.create({
      data: {
        name: body.name,
        role: body.role,
        company: body.company,
        content: body.content,
        rating: body.rating ?? 5,
        avatar: body.avatar || null,
        isActive: body.isActive ?? true,
        sortOrder: body.sortOrder ?? 0,
      },
    })
    return NextResponse.json({ success: true, testimonial })
  } catch {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}
