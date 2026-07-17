import { NextRequest, NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error('CRITICAL: JWT_SECRET environment variable is not set')
}

function getToken(request: NextRequest): string | undefined {
  // Check cookie first
  const cookieToken = request.cookies.get('admin-token')?.value
  if (cookieToken) return cookieToken

  // Check Authorization header
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7)
  }

  return undefined
}

async function verifyToken(token: string): Promise<boolean> {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return false
    const [headerB64, payloadB64, signatureB64] = parts

    // Verify signature
    const encoder = new TextEncoder()
    const keyData = encoder.encode(JWT_SECRET)
    const data = encoder.encode(`${headerB64}.${payloadB64}`)

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    )

    // base64url decode signature
    const sigBase64 = signatureB64.replace(/-/g, '+').replace(/_/g, '/')
    const sigBinary = atob(sigBase64)
    const sigBytes = new Uint8Array(sigBinary.length)
    for (let i = 0; i < sigBinary.length; i++) {
      sigBytes[i] = sigBinary.charCodeAt(i)
    }

    const isValidSig = await crypto.subtle.verify(
      'HMAC',
      cryptoKey,
      sigBytes,
      data
    )

    if (!isValidSig) return false

    // Check expiration
    const payloadJson = atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/'))
    const payload = JSON.parse(payloadJson)
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return false
    }

    return true
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow login page and auth API
  if (pathname === '/admin/login' || pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Protect admin pages
  if (pathname.startsWith('/admin')) {
    const token = getToken(request)

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    const isValid = await verifyToken(token)
    if (isValid) {
      return NextResponse.next()
    } else {
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('admin-token')
      return response
    }
  }

  // Protect admin API routes (GET on /api/dashboard is public)
  if (pathname.startsWith('/api/admin') || pathname === '/api/dashboard') {
    if (pathname === '/api/dashboard' && request.method === 'GET') {
      return NextResponse.next()
    }

    const token = getToken(request)

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isValid = await verifyToken(token)
    if (isValid) {
      return NextResponse.next()
    } else {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
  }

  // Handle CORS for /api/jobs, /api/jobs/apply, and /api/contact
  if (pathname.startsWith('/api/jobs') || pathname === '/api/contact') {
    const origin = request.headers.get('origin')
    const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',')
    const isAllowed = origin && (allowedOrigins.includes(origin) || allowedOrigins.includes('*'))

    if (request.method === 'OPTIONS') {
      const response = new NextResponse(null, { status: 204 })
      if (isAllowed && origin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        response.headers.set('Access-Control-Allow-Credentials', 'true')
      }
      return response
    }

    const response = NextResponse.next()
    if (isAllowed && origin) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      response.headers.set('Access-Control-Allow-Credentials', 'true')
    }
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
    '/api/dashboard',
    '/api/jobs/:path*',
    '/api/contact',
    '/api/auth/:path*',
  ],
}
