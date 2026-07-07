import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'brighto-admin-secret-key-2024'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string }
    return NextResponse.json({ success: true, admin: decoded })
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
