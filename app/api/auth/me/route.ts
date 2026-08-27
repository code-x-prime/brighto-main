import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error('CRITICAL: JWT_SECRET environment variable is not set')
}

export async function GET(request: NextRequest) {
  try {
    if (!JWT_SECRET) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Check cookie first
    let token = request.cookies.get('admin-token')?.value

    // Check Authorization header
    if (!token) {
      const authHeader = request.headers.get('authorization')
      if (authHeader?.startsWith('Bearer ')) {
        token = authHeader.slice(7)
      }
    }

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string }
    return NextResponse.json({ success: true, admin: decoded })
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
