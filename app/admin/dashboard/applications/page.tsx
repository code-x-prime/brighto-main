'use client'

import { useState, useEffect } from 'react'
import { Download, Trash2, Eye, ExternalLink, Mail, Phone } from 'lucide-react'

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
  { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'reviewing', label: 'Reviewing', color: 'bg-blue-100 text-blue-700' },
  { value: 'shortlisted', label: 'Shortlisted', color: 'bg-green-100 text-green-700' },
  { value: 'rejected', label: 'Rejected', color: 'bg-red-100 text-red-700' },
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)

  useEffect(() => {
    fetchApplications()
  }, [])

  async function fetchApplications() {
    try {
      const res = await fetch('/api/admin/applications')
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
      const res = await fetch('/api/admin/applications', {
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
      const res = await fetch(`/api/admin/applications?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setApplications(applications.filter(a => a.id !== id))
        if (selectedApp?.id === id) setSelectedApp(null)
      }
    } catch {
      console.error('Failed to delete')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Job Applications</h2>
        <span className="text-sm text-slate-500">{applications.length} total</span>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading...</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No applications yet.</div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Applicant</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Position</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Resume</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications.map(app => {
                  const statusOpt = STATUS_OPTIONS.find(s => s.value === app.status) || STATUS_OPTIONS[0]
                  return (
                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{app.name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {app.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-slate-900">{app.job.title}</div>
                        <div className="text-xs text-slate-500">{app.job.department}</div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={app.status}
                          onChange={(e) => updateStatus(app.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${statusOpt.color}`}
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={app.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800"
                        >
                          <Download className="w-4 h-4" />
                          View PDF
                        </a>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {new Date(app.createdAt).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="p-2 hover:bg-slate-100 rounded-lg"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4 text-blue-600" />
                          </button>
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-slate-100 rounded-lg"
                            title="Open Resume"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-600" />
                          </a>
                          <button
                            onClick={() => deleteApplication(app.id)}
                            className="p-2 hover:bg-red-50 rounded-lg"
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
        </div>
      )}

      {/* Detail Dialog */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedApp(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Application Details</h3>
              <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-slate-100 rounded-lg">
                <span className="text-slate-400">&times;</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-500 mb-1">Name</p>
                  <p className="text-sm font-medium text-slate-900">{selectedApp.name}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-slate-900">{selectedApp.email}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-500 mb-1">Phone</p>
                  <p className="text-sm font-medium text-slate-900 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {selectedApp.phone}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-500 mb-1">Position</p>
                  <p className="text-sm font-medium text-slate-900">{selectedApp.job.title}</p>
                </div>
              </div>

              {selectedApp.message && (
                <div>
                  <p className="text-xs text-slate-500 mb-1">Cover Letter</p>
                  <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700">{selectedApp.message}</div>
                </div>
              )}

              <div>
                <p className="text-xs text-slate-500 mb-2">Status</p>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => updateStatus(selectedApp.id, opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedApp.status === opt.value
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedApp.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => deleteApplication(selectedApp.id)}
                  className="px-6 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100"
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
