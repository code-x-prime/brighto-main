import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'

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

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()

    if (typeof body.content !== 'string' || !body.content.trim() || body.content.length > 2000) {
      return NextResponse.json({ error: 'Invalid note' }, { status: 400 })
    }

    const note = await prisma.contactNote.create({
      data: {
        content: body.content,
        submissionId: id,
      },
    })

    return NextResponse.json({ success: true, note })
  } catch {
    return NextResponse.json({ error: 'Failed to add note' }, { status: 500 })
  }
}
