'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IconBriefcase, IconLayoutDashboard, IconLogout, IconMenu2, IconX, IconPlus, IconMessage, IconFileText, IconSettings, IconStar, IconChevronRight, IconShield } from '@tabler/icons-react'

function getAuthHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const token = localStorage.getItem('admin-token')
  if (token) return { Authorization: `Bearer ${token}` }
  return {}
}

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: IconLayoutDashboard },
  { href: '/admin/dashboard/contacts', label: 'Contacts', icon: IconMessage },
  { href: '/admin/dashboard/jobs', label: 'Jobs', icon: IconBriefcase },
  { href: '/admin/dashboard/jobs/new', label: 'Add Job', icon: IconPlus },
  { href: '/admin/dashboard/applications', label: 'Applications', icon: IconFileText },
  { href: '/admin/dashboard/testimonials', label: 'Testimonials', icon: IconStar },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: IconSettings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [adminName, setAdminName] = useState('')
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
          headers: getAuthHeaders(),
        })
        if (!res.ok) {
          window.location.href = '/admin/login'
          return
        }
        const data = await res.json()
        setAdminName(data.admin?.email || 'Admin')
        setAuthorized(true)
      } catch {
        window.location.href = '/admin/login'
      }
    }
    checkAuth()
  }, [])

  async function handleLogout() {
    localStorage.removeItem('admin-token')
    document.cookie = 'admin-token=; path=/; max-age=0'
    window.location.href = '/admin/login'
  }

  const currentLabel = navItems.find((i) => i.href === pathname)?.label || 'Dashboard'

  if (!authorized) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-zinc-500">
          <div className="w-5 h-5 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin" />
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[260px] bg-zinc-950 text-white flex flex-col transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Brand */}
        <div className="px-5 py-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
              <IconShield className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white">Brighto India</h1>
              <p className="text-[11px] text-zinc-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <p className="px-3 mb-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Navigation</p>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-zinc-950'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User */}
        <div className="px-3 py-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 px-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-white">
              {adminName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">{adminName}</p>
              <p className="text-[10px] text-zinc-500">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-[13px] font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <IconLogout className="w-4 h-4" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-zinc-200">
          <div className="flex items-center justify-between h-14 px-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-1.5 hover:bg-zinc-100 rounded-lg">
                {sidebarOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
              </button>
              <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                <span>Admin</span>
                <IconChevronRight className="w-3.5 h-3.5" />
                <span className="text-zinc-900 font-medium">{currentLabel}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
