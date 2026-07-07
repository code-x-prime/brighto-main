'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          router.push('/admin/dashboard')
        } else {
          router.push('/admin/login')
        }
      } catch {
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>
  )
}
