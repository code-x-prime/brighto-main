'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import {
  MapPin, Briefcase, Clock, Search, X, Upload, Send,
  CheckCircle2, AlertCircle, Loader2, ChevronLeft, ChevronRight,
  Building2, ArrowRight, RotateCcw,
} from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string
  isActive: boolean
  createdAt: string
}

const JOBS_PER_PAGE = 6

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 400)
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApply, setShowApply] = useState(false)
  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [applyError, setApplyError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [resume, setResume] = useState<File | null>(null)
  const [consent, setConsent] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const fetchJobs = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/jobs')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (data.success) {
        setJobs(data.jobs.filter((j: Job) => j.isActive))
      } else {
        throw new Error(data.error || 'Failed to load jobs')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load jobs. Please try again.')
      setJobs([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchJobs() }, [fetchJobs])

  const departments = useMemo(() => ['All', ...new Set(jobs.map((j) => j.department))], [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = debouncedSearch.toLowerCase()
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.experience.toLowerCase().includes(q)
      const matchesFilter = filter === 'All' || job.department === filter
      return matchesSearch && matchesFilter
    })
  }, [jobs, debouncedSearch, filter])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE)

  useEffect(() => { setPage(1) }, [debouncedSearch, filter])

  function openApply(job: Job) {
    setSelectedJob(job)
    setShowApply(true)
    setApplied(false)
    setApplyError('')
    setForm({ name: '', email: '', phone: '', message: '' })
    setResume(null)
    setConsent(false)
  }

  async function handleApply(e: React.FormEvent) {
    e.preventDefault()
    if (!resume || !selectedJob) return
    setApplying(true)
    setApplyError('')

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('message', form.message)
      formData.append('jobId', selectedJob.id)
      formData.append('resume', resume)
      formData.append('consent', consent ? 'true' : '')

      const res = await fetch('/api/jobs/apply', { method: 'POST', body: formData })
      const data = await res.json()
      if (res.ok && data.success) {
        setApplied(true)
      } else {
        setApplyError(data.error || 'Failed to submit application')
      }
    } catch {
      setApplyError('Network error. Please check your connection and try again.')
    } finally {
      setApplying(false)
    }
  }

  const jobColors: Record<string, { color: string; bg: string; border: string }> = {
    'Engineering': { color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
    'Operations': { color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
    'Sales': { color: '#c2410c', bg: '#fff7ed', border: '#fed7aa' },
    'Marketing': { color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
    'Finance': { color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
    'HR': { color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
    'Technology': { color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc' },
    'Default': { color: '#334155', bg: '#f8fafc', border: '#e2e8f0' },
  }

  function getDeptColor(dept: string) {
    return jobColors[dept] || jobColors['Default']
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader dark />

      {/* Hero - Same style as services page */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-blue-300/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Career</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">We&apos;re Hiring</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Build Your Career<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              With Brighto India
            </span>
          </h1>

          <p className="text-lg text-blue-200/80 max-w-3xl leading-relaxed mb-10">
            Join India&apos;s leading verification and risk management company. We offer exciting opportunities for growth, learning, and making a real impact.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-10">
            {[
              { val: '50+', label: 'Open Positions', color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
              { val: '10+', label: 'Departments', color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
              { val: 'PAN India', label: 'Locations', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
              { val: '4.8★', label: 'Glassdoor', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 border" style={{ backgroundColor: stat.bg, borderColor: stat.border }}>
                <div className="text-2xl font-black" style={{ color: stat.color, fontFamily: 'var(--font-manrope)' }}>{stat.val}</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs by title, department, or location..."
                className="w-full pl-14 pr-14 py-4 bg-white rounded-2xl text-slate-900 text-lg shadow-2xl focus:ring-4 focus:ring-blue-500/30 outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => { setSearch(''); searchRef.current?.focus() }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Department Filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {departments.map((dept) => {
              const c = getDeptColor(dept)
              return (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border"
                  style={filter === dept
                    ? { backgroundColor: c.color, color: 'white', borderColor: c.color }
                    : { backgroundColor: c.bg, color: c.color, borderColor: c.border }
                  }
                >
                  {dept}
                </button>
              )
            })}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              {loading ? 'Loading...' : `${filteredJobs.length} position${filteredJobs.length !== 1 ? 's' : ''} found`}
            </p>
            {debouncedSearch && (
              <button onClick={() => setSearch('')} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Clear search
              </button>
            )}
          </div>

          {/* Job Cards */}
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-slate-500 mt-4">Loading jobs...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-red-200">
              <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <p className="text-xl font-semibold text-slate-700 mb-2">Something went wrong</p>
              <p className="text-slate-500 mb-6">{error}</p>
              <button
                onClick={fetchJobs}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
            </div>
          ) : paginatedJobs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-slate-700">No jobs found</p>
              <p className="text-slate-500 mt-2 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => { setSearch(''); setFilter('All') }}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" /> Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedJobs.map((job) => {
                const c = getDeptColor(job.department)
                return (
                  <div
                    key={job.id}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-3 py-1 rounded-lg text-xs font-semibold" style={{ backgroundColor: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-semibold border border-green-200">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>
                        {job.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Briefcase className="w-4 h-4" /> {job.experience}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          Posted {new Date(job.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-4">{job.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                        className="flex-1 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => openApply(job)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: c.color }}
                      >
                        Apply Now
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedJob?.id === job.id && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 mb-2">Description</h4>
                        <p className="text-sm text-slate-600 mb-3">{job.description}</p>
                        <h4 className="text-sm font-bold text-slate-900 mb-2">Requirements</h4>
                        <p className="text-sm text-slate-600">{job.requirements}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                    page === p
                      ? 'bg-slate-900 text-white'
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Apply Dialog */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowApply(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 rounded-t-3xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Apply for</h3>
                <p className="text-sm text-blue-600 font-medium">{selectedJob.title}</p>
              </div>
              <button onClick={() => setShowApply(false)} className="p-2 hover:bg-slate-100 rounded-xl">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-6">
              {applied ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h4>
                  <p className="text-slate-500 text-sm mb-6">We&apos;ll review your application and get back to you soon.</p>
                  <button
                    onClick={() => setShowApply(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  {applyError && (
                    <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {applyError}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume (PDF or DOCX, max 5MB) *</label>
                    <label className="flex items-center justify-center gap-3 w-full px-4 py-4 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-500">
                        {resume ? resume.name : 'Click to upload PDF or DOCX'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        required
                        className="hidden"
                        onChange={(e) => setResume(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter (optional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                      placeholder="Why are you a good fit for this role?"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="career-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                      required
                    />
                    <label htmlFor="career-consent" className="text-sm text-slate-500 leading-relaxed">
                      I consent to the processing of my personal data in accordance with the{' '}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline" target="_blank">Privacy Policy</Link>.
                      I understand that my data will be used for recruitment purposes.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={applying || !consent}
                    className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
                  >
                    {applying ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <BrightoFooter />
    </div>
  )
}
