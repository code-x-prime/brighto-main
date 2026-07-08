'use client'

import { useEffect } from 'react'

function getAuthHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const token = localStorage.getItem('admin-token')
  if (token) return { Authorization: `Bearer ${token}` }
  return {}
}

export default function AdminPage() {
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
          headers: getAuthHeaders(),
        })
        if (res.ok) {
          window.location.href = '/admin/dashboard'
        } else {
          window.location.href = '/admin/login'
        }
      } catch {
        window.location.href = '/admin/login'
      }
    }
    checkAuth()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>
  )
}
