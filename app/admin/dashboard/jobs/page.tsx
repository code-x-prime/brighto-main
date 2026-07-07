'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react'

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

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    try {
      const res = await fetch('/api/jobs')
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
      await fetch(`/api/jobs/${id}`, {
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
      await fetch(`/api/jobs/${id}`, { method: 'DELETE' })
      setJobs(jobs.filter((j) => j.id !== id))
    } catch {
      console.error('Failed to delete job')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">All Jobs</h2>
        <Link
          href="/admin/dashboard/jobs/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Job
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No jobs found. Add your first job!</div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Department</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{job.title}</div>
                    <div className="text-xs text-slate-500">{job.type} · {job.experience}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{job.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{job.location}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        job.isActive
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {job.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleActive(job.id, job.isActive)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title={job.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {job.isActive ? (
                          <ToggleRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ToggleLeft className="w-5 h-5 text-red-500" />
                        )}
                      </button>
                      <Link
                        href={`/admin/dashboard/jobs/${job.id}/edit`}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5 text-blue-600" />
                      </Link>
                      <button
                        onClick={() => deleteJob(job.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
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
