'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IconBriefcase, IconMessage, IconFileText, IconStar, IconArrowUpRight, IconClock, IconMail, IconUsers, IconPlus, IconCircleCheck } from '@tabler/icons-react'
import { authFetch } from '@/lib/auth-client'

interface Stats {
  jobs: { total: number; active: number }
  contacts: { total: number; new: number }
  applications: { total: number; pending: number }
  testimonials: { total: number; active: number }
}

interface RecentContact {
  id: string; name: string; email: string; subject: string; status: string; createdAt: string
}

interface RecentApplication {
  id: string; name: string; email: string; status: string; createdAt: string; job: { title: string }
}

interface RecentJob {
  id: string; title: string; department: string; location: string; isActive: boolean; createdAt: string
  _count: { applications: number }
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-50 text-blue-700',
  in_progress: 'bg-amber-50 text-amber-700',
  contacted: 'bg-purple-50 text-purple-700',
  resolved: 'bg-emerald-50 text-emerald-700',
  closed: 'bg-zinc-100 text-zinc-500',
  pending: 'bg-amber-50 text-amber-700',
  reviewing: 'bg-blue-50 text-blue-700',
  shortlisted: 'bg-emerald-50 text-emerald-700',
  rejected: 'bg-red-50 text-red-700',
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [recentContacts, setRecentContacts] = useState<RecentContact[]>([])
  const [recentApplications, setRecentApplications] = useState<RecentApplication[]>([])
  const [recentJobs, setRecentJobs] = useState<RecentJob[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await authFetch('/api/admin/stats')
        const data = await res.json()
        if (data.success) {
          setStats(data.stats)
          setRecentContacts(data.recent.contacts)
          setRecentApplications(data.recent.applications)
          setRecentJobs(data.recent.jobs)
        }
      } catch {
        console.error('Failed to fetch stats')
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-zinc-500">
        <div className="w-5 h-5 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mr-2" />
        Loading dashboard...
      </div>
    )
  }

  const statCards = stats ? [
    { label: 'Total Jobs', value: stats.jobs.total, sub: `${stats.jobs.active} active`, icon: IconBriefcase, color: 'bg-blue-50 text-blue-600', href: '/admin/dashboard/jobs' },
    { label: 'Contacts', value: stats.contacts.total, sub: `${stats.contacts.new} new`, icon: IconMessage, color: 'bg-emerald-50 text-emerald-600', href: '/admin/dashboard/contacts' },
    { label: 'Applications', value: stats.applications.total, sub: `${stats.applications.pending} pending`, icon: IconFileText, color: 'bg-amber-50 text-amber-600', href: '/admin/dashboard/applications' },
    { label: 'Testimonials', value: stats.testimonials.total, sub: `${stats.testimonials.active} active`, icon: IconStar, color: 'bg-purple-50 text-purple-600', href: '/admin/dashboard/testimonials' },
  ] : []

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-lg ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <IconArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-zinc-900">{card.value}</p>
              <p className="text-sm text-zinc-500 mt-0.5">{card.label}</p>
            </div>
            <p className="text-xs text-zinc-400 mt-2">{card.sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-zinc-200 p-5">
        <h2 className="text-sm font-semibold text-zinc-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/dashboard/jobs/new" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            <IconPlus className="w-4 h-4" /> Add Job
          </Link>
          <Link href="/admin/dashboard/contacts" className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            <IconMail className="w-4 h-4" /> View Contacts
          </Link>
          <Link href="/admin/dashboard/applications" className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            <IconFileText className="w-4 h-4" /> View Applications
          </Link>
          <Link href="/admin/dashboard/testimonials" className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            <IconStar className="w-4 h-4" /> Manage Testimonials
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-900">Recent Contacts</h2>
            <Link href="/admin/dashboard/contacts" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
              View all
            </Link>
          </div>
          {recentContacts.length === 0 ? (
            <div className="py-10 text-center text-sm text-zinc-400">No contacts yet</div>
          ) : (
            <div className="divide-y divide-zinc-50">
              {recentContacts.map((c) => (
                <div key={c.id} className="px-5 py-3 flex items-center gap-3 hover:bg-zinc-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <IconUsers className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">{c.name}</p>
                    <p className="text-xs text-zinc-500 truncate">{c.subject}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${STATUS_COLORS[c.status] || 'bg-zinc-100 text-zinc-500'}`}>
                    {c.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-900">Recent Applications</h2>
            <Link href="/admin/dashboard/applications" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
              View all
            </Link>
          </div>
          {recentApplications.length === 0 ? (
            <div className="py-10 text-center text-sm text-zinc-400">No applications yet</div>
          ) : (
            <div className="divide-y divide-zinc-50">
              {recentApplications.map((a) => (
                <div key={a.id} className="px-5 py-3 flex items-center gap-3 hover:bg-zinc-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <IconFileText className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">{a.name}</p>
                    <p className="text-xs text-zinc-500 truncate">{a.job.title}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${STATUS_COLORS[a.status] || 'bg-zinc-100 text-zinc-500'}`}>
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
          <h2 className="text-sm font-semibold text-zinc-900">Recent Jobs</h2>
          <Link href="/admin/dashboard/jobs" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
            View all
          </Link>
        </div>
        {recentJobs.length === 0 ? (
          <div className="py-10 text-center text-sm text-zinc-400">No jobs posted yet</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-2.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Job</th>
                <th className="text-left px-5 py-2.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Department</th>
                <th className="text-left px-5 py-2.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Location</th>
                <th className="text-left px-5 py-2.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Applications</th>
                <th className="text-left px-5 py-2.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {recentJobs.map((j) => (
                <tr key={j.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <Link href={`/admin/dashboard/jobs/${j.id}/edit`} className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors">
                      {j.title}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-sm text-zinc-600">{j.department}</td>
                  <td className="px-5 py-3 text-sm text-zinc-600">{j.location}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 text-sm text-zinc-600">
                      <IconUsers className="w-3.5 h-3.5 text-zinc-400" />
                      {j._count.applications}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${j.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                      {j.isActive ? <IconCircleCheck className="w-3 h-3" /> : <IconClock className="w-3 h-3" />}
                      {j.isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
