'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Briefcase, MapPin, Building2, Clock, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { authFetch } from '@/lib/auth-client'

export default function NewJobPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    description: '',
    requirements: '',
    isActive: true,
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await authFetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) router.push('/admin/dashboard/jobs')
    } catch {
      console.error('Failed to create job')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl">
      <Link href="/admin/dashboard/jobs" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Jobs
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900">Create New Job</h1>
        <p className="text-sm text-zinc-500 mt-1">Fill in the details to post a new job opening</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-zinc-900 mb-5 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-zinc-400" />
            Basic Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Job Title</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                placeholder="e.g. Senior Software Engineer"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Department</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                    placeholder="e.g. Engineering"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                    placeholder="e.g. Delhi, India"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Job Type</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all appearance-none bg-white"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Experience</label>
                <input
                  type="text"
                  required
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full px-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                  placeholder="e.g. 3-5 years"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-zinc-900 mb-5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-400" />
            Description & Requirements
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Job Description</label>
              <textarea
                required
                rows={5}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none resize-none transition-all"
                placeholder="Describe the role, responsibilities, and what a typical day looks like..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">Requirements</label>
              <textarea
                required
                rows={5}
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                className="w-full px-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none resize-none transition-all"
                placeholder="List the required skills, qualifications, and experience..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100">
              <CheckCircle className={`w-5 h-5 ${form.isActive ? 'text-emerald-600' : 'text-zinc-400'}`} />
            </div>
            <div className="flex-1">
              <label htmlFor="isActive" className="text-sm font-medium text-zinc-900 cursor-pointer">Publish immediately</label>
              <p className="text-xs text-zinc-500">Job will be visible on the career page</p>
            </div>
            <input
              type="checkbox"
              id="isActive"
              checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              className="w-5 h-5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-950/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/jobs"
            className="px-5 py-2.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating...
              </>
            ) : (
              'Create Job'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
