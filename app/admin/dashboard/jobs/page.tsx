'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight, Briefcase, MapPin, Clock, Search } from 'lucide-react'
import { authFetch } from '@/lib/auth-client'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  isActive: boolean
  createdAt: string
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    try {
      const res = await authFetch('/api/jobs')
      const data = await res.json()
      if (data.success) setJobs(data.jobs)
    } catch {
      console.error('Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  async function toggleActive(id: string, current: boolean) {
    try {
      await authFetch(`/api/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !current }),
      })
      setJobs(jobs.map((j) => (j.id === id ? { ...j, isActive: !current } : j)))
    } catch {
      console.error('Failed to update job')
    }
  }

  async function deleteJob(id: string) {
    if (!confirm('Are you sure you want to delete this job?')) return
    try {
      await authFetch(`/api/jobs/${id}`, { method: 'DELETE' })
      setJobs(jobs.filter((j) => j.id !== id))
    } catch {
      console.error('Failed to delete job')
    }
  }

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.department.toLowerCase().includes(search.toLowerCase()) ||
    j.location.toLowerCase().includes(search.toLowerCase())
  )

  const activeCount = jobs.filter(j => j.isActive).length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Jobs</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{jobs.length} total, {activeCount} active</p>
        </div>
        <Link
          href="/admin/dashboard/jobs/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Job
        </Link>
      </div>

      <div className="mb-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs..."
            className="w-full pl-9 pr-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-zinc-500">
          <div className="w-5 h-5 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-zinc-200 py-20 text-center">
          <Briefcase className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-500 text-sm">{search ? 'No jobs match your search' : 'No jobs yet. Create your first job opening!'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Job</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Department</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Location</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((job) => (
                <tr key={job.id} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-zinc-900 text-sm">{job.title}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{job.experience}</div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 text-sm text-zinc-600">
                      <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                      {job.department}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 text-sm text-zinc-600">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {job.location}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 text-sm text-zinc-600">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      {job.type}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${job.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                      {job.isActive ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => toggleActive(job.id, job.isActive)}
                        className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors"
                        title={job.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {job.isActive ? (
                          <ToggleRight className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <ToggleLeft className="w-4 h-4 text-zinc-400" />
                        )}
                      </button>
                      <Link
                        href={`/admin/dashboard/jobs/${job.id}/edit`}
                        className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-zinc-600" />
                      </Link>
                      <button
                        onClick={() => deleteJob(job.id)}
                        className="p-1.5 hover:bg-red-50 rounded-md transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
