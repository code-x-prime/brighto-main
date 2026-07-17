import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { loginSchema } from '@/lib/validation'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error('CRITICAL: JWT_SECRET environment variable is not set')
}

export async function POST(request: NextRequest) {
  try {
    if (!JWT_SECRET) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const ip = getClientIp(request)
    const rl = rateLimit(`login:${ip}`, 5, 15 * 60_000)
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const parsed = loginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      )
    }

    const { email, password } = parsed.data

    let admin
    try {
      admin = await prisma.admin.findUnique({ where: { email } })
    } catch {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 })
    }

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const isValid = await bcrypt.compare(password, admin.password)
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    const isProduction = process.env.NODE_ENV === 'production'
    const response = NextResponse.json({
      success: true,
      token,
      redirect: '/admin/dashboard',
    })

    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 86400,
      path: '/',
    })

    return response

  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
