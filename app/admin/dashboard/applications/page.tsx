'use client'

import { useState, useEffect } from 'react'
import { Download, Trash2, Eye, ExternalLink, Mail, Phone, FileText, Search, User } from 'lucide-react'
import { authFetch } from '@/lib/auth-client'

interface Application {
  id: string
  name: string
  email: string
  phone: string
  message: string | null
  resumeUrl: string
  resumeKey: string
  status: string
  job: { title: string; department: string }
  createdAt: string
}

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { value: 'reviewing', label: 'Reviewing', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { value: 'shortlisted', label: 'Shortlisted', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { value: 'rejected', label: 'Rejected', color: 'bg-red-50 text-red-700 border-red-200' },
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchApplications()
  }, [])

  async function fetchApplications() {
    try {
      const res = await authFetch('/api/admin/applications')
      const data = await res.json()
      if (data.success) setApplications(data.applications)
    } catch {
      console.error('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await authFetch('/api/admin/applications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        setApplications(applications.map(a => a.id === id ? { ...a, status } : a))
        if (selectedApp?.id === id) setSelectedApp({ ...selectedApp, status })
      }
    } catch {
      console.error('Failed to update')
    }
  }

  async function deleteApplication(id: string) {
    if (!confirm('Delete this application and its resume from cloud storage?')) return
    try {
      const res = await authFetch(`/api/admin/applications?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setApplications(applications.filter(a => a.id !== id))
        if (selectedApp?.id === id) setSelectedApp(null)
      }
    } catch {
      console.error('Failed to delete')
    }
  }

  const filtered = applications
    .filter(a => filter === 'all' || a.status === filter)
    .filter(a =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()) ||
      a.job.title.toLowerCase().includes(search.toLowerCase())
    )

  const statusCounts = applications.reduce((acc, a) => {
    acc[a.status] = (acc[a.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Applications</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{applications.length} total applications</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search applications..."
            className="w-full pl-9 pr-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'all' ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            All ({applications.length})
          </button>
          {STATUS_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === opt.value ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {opt.label} ({statusCounts[opt.value] || 0})
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-zinc-500">
          <div className="w-5 h-5 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-zinc-200 py-20 text-center">
          <FileText className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-500 text-sm">{search || filter !== 'all' ? 'No applications match your filters' : 'No applications yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Applicant</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Position</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Resume</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(app => {
                const statusOpt = STATUS_OPTIONS.find(s => s.value === app.status) || STATUS_OPTIONS[0]
                return (
                  <tr key={app.id} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-zinc-500" />
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900 text-sm">{app.name}</div>
                          <div className="text-xs text-zinc-500 flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {app.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="text-sm font-medium text-zinc-900">{app.job.title}</div>
                      <div className="text-xs text-zinc-500">{app.job.department}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border cursor-pointer ${statusOpt.color}`}
                      >
                        {STATUS_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3.5">
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        View Resume
                      </a>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-zinc-500">
                      {new Date(app.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-1.5 hover:bg-zinc-100 rounded-md"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-zinc-600" />
                        </button>
                        <a
                          href={app.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 hover:bg-zinc-100 rounded-md"
                          title="Open Resume"
                        >
                          <ExternalLink className="w-4 h-4 text-zinc-600" />
                        </a>
                        <button
                          onClick={() => deleteApplication(app.id)}
                          className="p-1.5 hover:bg-red-50 rounded-md"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedApp(null)} />
          <div className="relative bg-white rounded-xl border border-zinc-200 shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-zinc-100 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{selectedApp.name}</h3>
                  <p className="text-xs text-zinc-500">{selectedApp.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedApp(null)} className="p-1.5 hover:bg-zinc-100 rounded-lg">
                <span className="text-zinc-400 text-lg">&times;</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm font-medium text-zinc-900 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {selectedApp.phone}
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Position</p>
                  <p className="text-sm font-medium text-zinc-900">{selectedApp.job.title}</p>
                </div>
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Department</p>
                  <p className="text-sm font-medium text-zinc-900">{selectedApp.job.department}</p>
                </div>
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Applied</p>
                  <p className="text-sm font-medium text-zinc-900">
                    {new Date(selectedApp.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {selectedApp.message && (
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Cover Letter</p>
                  <div className="bg-zinc-50 rounded-lg p-4 text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap">
                    {selectedApp.message}
                  </div>
                </div>
              )}

              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-2">Update Status</p>
                <div className="flex flex-wrap gap-1.5">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => updateStatus(selectedApp.id, opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                        selectedApp.status === opt.value
                          ? 'bg-zinc-950 text-white border-zinc-950'
                          : `border-zinc-200 ${opt.color}`
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={selectedApp.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => deleteApplication(selectedApp.id)}
                  className="px-4 py-2.5 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
