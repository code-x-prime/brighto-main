'use client'

import { useState, useEffect, useMemo } from 'react'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'
import { MapPin, Briefcase, Clock, ChevronRight, Search, X, Upload, Send, CheckCircle2 } from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string
}

const JOBS_PER_PAGE = 6

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApply, setShowApply] = useState(false)
  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [applyError, setApplyError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [resume, setResume] = useState<File | null>(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    try {
      const res = await fetch('/api/jobs')
      const data = await res.json()
      if (data.success) setJobs(data.jobs.filter((j: Job & { isActive: boolean }) => j.isActive))
    } catch {
      console.error('Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  const departments = useMemo(() => ['All', ...new Set(jobs.map((j) => j.department))], [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === 'All' || job.department === filter
      return matchesSearch && matchesFilter
    })
  }, [jobs, search, filter])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE)

  function handleSearchChange(value: string) {
    setSearch(value)
    setPage(1)
  }

  function handleFilterChange(value: string) {
    setFilter(value)
    setPage(1)
  }

  function openApply(job: Job) {
    setSelectedJob(job)
    setShowApply(true)
    setApplied(false)
    setApplyError('')
    setForm({ name: '', email: '', phone: '', message: '' })
    setResume(null)
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

      const res = await fetch('/api/jobs/apply', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (res.ok) {
        setApplied(true)
      } else {
        setApplyError(data.error || 'Failed to submit')
      }
    } catch {
      setApplyError('Something went wrong')
    } finally {
      setApplying(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <BrightoHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">We&apos;re Hiring</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your Career<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              With Brighto India
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Join India&apos;s leading verification and risk management company. We offer exciting opportunities for growth and learning.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search jobs by title, department, or location..."
                className="w-full pl-14 pr-14 py-4 bg-white rounded-2xl text-slate-900 text-lg shadow-2xl focus:ring-4 focus:ring-blue-500/30 outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => handleSearchChange('')}
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Department Filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => handleFilterChange(dept)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  filter === dept
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Job Cards */}
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-slate-500 mt-4">Loading jobs...</p>
            </div>
          ) : paginatedJobs.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-slate-700">No jobs found</p>
              <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                      {job.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Briefcase className="w-4 h-4" />
                        {job.experience}
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
                      className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
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
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                    page === p
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
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
                    <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{applyError}</div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume (PDF only, max 5MB) *</label>
                    <label className="flex items-center justify-center gap-3 w-full px-4 py-4 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-500">
                        {resume ? resume.name : 'Click to upload PDF'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf"
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
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Why are you a good fit for this role?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={applying}
                    className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {applying ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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

      <BrightoCTAFooter />
    </main>
  )
}
