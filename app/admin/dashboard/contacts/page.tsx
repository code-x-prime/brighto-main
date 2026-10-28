'use client'

import { useState, useEffect, useRef } from 'react'
import { IconTrash, IconEye, IconMail, IconMailOpened, IconClock, IconCircleCheck, IconCircleX, IconX, IconMessage, IconSearch, IconUser } from '@tabler/icons-react'
import { authFetch } from '@/lib/auth-client'

interface Note {
  id: string
  content: string
  createdAt: string
}

interface Submission {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
  source: string
  status: string
  emailSent: boolean
  notes: Note[]
  createdAt: string
}

const SOURCE_COLORS: Record<string, string> = {
  'Brighto India': 'bg-blue-50 text-blue-700 border-blue-200',
  'Hubcheck': 'bg-orange-50 text-orange-700 border-orange-200',
  'Truering': 'bg-purple-50 text-purple-700 border-purple-200',
  'CrediScout': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Credify': 'bg-cyan-50 text-cyan-700 border-cyan-200',
}

const SOURCE_ALIASES: Record<string, string> = {
  'credi-scout': 'CrediScout',
  crediscout: 'CrediScout',
  truering: 'Truering',
  hubcheck: 'Hubcheck',
  credify: 'Credify',
  brighto: 'Brighto India',
  'brighto india': 'Brighto India',
}

const KNOWN_SOURCES = ['Brighto India', 'Hubcheck', 'Truering', 'CrediScout', 'Credify']

function normalizeSource(source: string) {
  const s = (source || '').trim()
  return SOURCE_ALIASES[s.toLowerCase()] || s || 'Brighto India'
}

function sourceColor(source: string) {
  return SOURCE_COLORS[normalizeSource(source)] || 'bg-zinc-100 text-zinc-600 border-zinc-200'
}

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', icon: IconMail, color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { value: 'in_progress', label: 'In Progress', icon: IconClock, color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { value: 'contacted', label: 'Contacted', icon: IconMailOpened, color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { value: 'resolved', label: 'Resolved', icon: IconCircleCheck, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { value: 'closed', label: 'Closed', icon: IconCircleX, color: 'bg-zinc-100 text-zinc-500 border-zinc-200' },
]

const PAGE_SIZE = 30

export default function ContactsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [noteText, setNoteText] = useState('')
  const [addingNote, setAddingNote] = useState(false)
  const [filter, setFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [busyId, setBusyId] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const lastFilterKey = useRef('all|all|')

  function readPageFromUrl() {
    const n = parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10)
    return Number.isFinite(n) && n > 0 ? n : 1
  }

  function goToPage(p: number) {
    setPage(p)
    const url = `${window.location.pathname}${p > 1 ? `?page=${p}` : ''}`
    window.history.pushState(null, '', url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setPage(readPageFromUrl())
    const onPop = () => setPage(readPageFromUrl())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedSubmission ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedSubmission])

  useEffect(() => {
    fetchSubmissions()
  }, [])

  useEffect(() => {
    const key = `${filter}|${sourceFilter}|${search}`
    if (lastFilterKey.current === key) return
    lastFilterKey.current = key
    setPage(1)
    window.history.replaceState(null, '', window.location.pathname)
  }, [filter, sourceFilter, search])

  async function fetchSubmissions(isRefresh = false) {
    if (isRefresh) setRefreshing(true)
    setError('')
    try {
      const res = await authFetch('/api/admin/contacts')
      const data = await res.json()
      if (data.success) {
        // Display-only: older partner-site enquiries were stored as "Brighto India"; recover the real site from the subject prefix.
        setSubmissions(
          data.submissions.map((s: Submission) => {
            const m = s.subject.trim().match(/^\[(hubcheck|truering|credi-?scout|credify)/i)
            return normalizeSource(s.source) === 'Brighto India' && m
              ? { ...s, source: normalizeSource(m[1]) }
              : s
          })
        )
      } else setError(data.error || 'Failed to load enquiries')
    } catch {
      setError('Network error while loading enquiries')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  async function updateStatus(id: string, status: string) {
    setBusyId(id)
    try {
      const res = await authFetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s))
        if (selectedSubmission?.id === id) {
          setSelectedSubmission({ ...selectedSubmission, status })
        }
      } else {
        setError(data.error || 'Failed to update status')
      }
    } catch {
      setError('Failed to update status')
    } finally {
      setBusyId(null)
    }
  }

  async function deleteSubmission(id: string) {
    if (!confirm('Delete this enquiry permanently? This cannot be undone.')) return
    setBusyId(id)
    try {
      const res = await authFetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('delete failed')
      setSubmissions(submissions.filter(s => s.id !== id))
      if (selectedSubmission?.id === id) setSelectedSubmission(null)
    } catch {
      setError('Failed to delete enquiry')
    } finally {
      setBusyId(null)
    }
  }

  async function addNote() {
    if (!noteText.trim() || !selectedSubmission) return
    setAddingNote(true)
    try {
      const res = await authFetch(`/api/admin/contacts/${selectedSubmission.id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: noteText }),
      })
      const data = await res.json()
      if (data.success) {
        const newNote = data.note
        setSelectedSubmission({
          ...selectedSubmission,
          notes: [newNote, ...selectedSubmission.notes],
        })
        setSubmissions(submissions.map(s =>
          s.id === selectedSubmission.id
            ? { ...s, notes: [newNote, ...s.notes] }
            : s
        ))
        setNoteText('')
      }
    } catch {
      console.error('Failed to add note')
    } finally {
      setAddingNote(false)
    }
  }

  async function deleteNote(noteId: string) {
    if (!selectedSubmission) return
    try {
      const res = await authFetch(`/api/admin/contacts/${selectedSubmission.id}/notes/${noteId}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('delete failed')
      setSelectedSubmission({
        ...selectedSubmission,
        notes: selectedSubmission.notes.filter(n => n.id !== noteId),
      })
      setSubmissions(submissions.map(s =>
        s.id === selectedSubmission.id
          ? { ...s, notes: s.notes.filter(n => n.id !== noteId) }
          : s
      ))
    } catch {
      console.error('Failed to delete note')
    }
  }

  const q = search.trim().toLowerCase()
  const filtered = submissions
    .filter(s => filter === 'all' || s.status === filter)
    .filter(s => sourceFilter === 'all' || normalizeSource(s.source) === sourceFilter)
    .filter(s =>
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.subject.toLowerCase().includes(q) ||
      s.message.toLowerCase().includes(q) ||
      (s.phone || '').toLowerCase().includes(q)
    )

  const statusCounts = submissions.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sourceCounts = submissions.reduce((acc, s) => {
    const key = normalizeSource(s.source)
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sourceList = [
    ...KNOWN_SOURCES,
    ...Object.keys(sourceCounts).filter(k => !KNOWN_SOURCES.includes(k)),
  ]

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const pageStart = (currentPage - 1) * PAGE_SIZE
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE)

  const pageNumbers: (number | '...')[] = []
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1) pageNumbers.push(p)
    else if (pageNumbers[pageNumbers.length - 1] !== '...') pageNumbers.push('...')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Contacts</h1>
          <p className="text-sm text-zinc-500 mt-0.5">
            {submissions.length} total enquiries across all websites
            {filtered.length !== submissions.length && ` · showing ${filtered.length}`}
          </p>
        </div>
        <button
          onClick={() => fetchSubmissions(true)}
          disabled={refreshing || loading}
          className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-60 transition-colors flex items-center gap-2"
        >
          <span className={`w-3.5 h-3.5 border-2 border-zinc-300 border-t-zinc-600 rounded-full ${refreshing ? 'animate-spin' : 'opacity-0'}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {error && (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
          <span>{error}</span>
          <button onClick={() => setError('')} className="text-red-500 hover:text-red-700"><IconX className="w-4 h-4" /></button>
        </div>
      )}

      <div className="mb-5">
        <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Website</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSourceFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              sourceFilter === 'all' ? 'bg-zinc-950 text-white border-zinc-950' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
            }`}
          >
            All Websites ({submissions.length})
          </button>
          {sourceList.map(src => (
            <button
              key={src}
              onClick={() => setSourceFilter(src)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                sourceFilter === src ? 'bg-zinc-950 text-white border-zinc-950' : `${sourceColor(src)} hover:opacity-80`
              }`}
            >
              {src} ({sourceCounts[src] || 0})
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone, message..."
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
            All ({submissions.length})
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
          <IconMessage className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-500 text-sm">{search || filter !== 'all' || sourceFilter !== 'all' ? 'No enquiries match your filters' : 'No contact submissions yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-zinc-200 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Contact</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Source</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Subject</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Team Alert</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map(sub => {
                const statusOpt = STATUS_OPTIONS.find(s => s.value === sub.status) || STATUS_OPTIONS[0]
                return (
                  <tr key={sub.id} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                          <IconUser className="w-4 h-4 text-zinc-500" />
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900 text-sm">{sub.name}</div>
                          <div className="text-xs text-zinc-500">{sub.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${sourceColor(sub.source)}`}>
                        {normalizeSource(sub.source)}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-zinc-600 max-w-[200px] truncate">{sub.subject}</td>
                    <td className="px-5 py-3.5">
                      <select
                        value={sub.status}
                        onChange={(e) => updateStatus(sub.id, e.target.value)}
                        disabled={busyId === sub.id}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border cursor-pointer disabled:opacity-50 disabled:cursor-wait ${statusOpt.color}`}
                      >
                        {STATUS_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1 text-xs ${sub.emailSent ? 'text-emerald-600' : 'text-red-500'}`}>
                        {sub.emailSent ? <IconMail className="w-3 h-3" /> : <IconCircleX className="w-3 h-3" />}
                        {sub.emailSent ? 'Sent' : 'Failed'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-zinc-500">
                      {new Date(sub.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedSubmission(sub)}
                          className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors"
                          title="View Details"
                        >
                          <IconEye className="w-4 h-4 text-zinc-600" />
                        </button>
                        <button
                          onClick={() => deleteSubmission(sub.id)}
                          disabled={busyId === sub.id}
                          className="p-1.5 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {busyId === sub.id ? (
                            <span className="block w-4 h-4 border-2 border-red-200 border-t-red-500 rounded-full animate-spin" />
                          ) : (
                            <IconTrash className="w-4 h-4 text-red-500" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 px-5 py-3 sticky left-0">
              <p className="text-xs text-zinc-500">
                Showing {pageStart + 1}–{Math.min(pageStart + PAGE_SIZE, filtered.length)} of {filtered.length}
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-600 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {pageNumbers.map((p, i) =>
                  p === '...' ? (
                    <span key={`dots-${i}`} className="px-1.5 text-xs text-zinc-400">…</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      className={`min-w-8 px-2.5 py-1.5 rounded-lg text-xs font-medium ${
                        p === currentPage ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-600 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedSubmission(null)} />
          <div className="relative bg-white rounded-xl border border-zinc-200 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <IconUser className="w-5 h-5 text-zinc-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{selectedSubmission.name}</h3>
                  <p className="text-xs text-zinc-500">{selectedSubmission.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedSubmission(null)} className="p-1.5 hover:bg-zinc-100 rounded-lg">
                <IconX className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm font-medium text-zinc-900">{selectedSubmission.phone || 'N/A'}</p>
                </div>
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Source</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${sourceColor(selectedSubmission.source)}`}>
                    {normalizeSource(selectedSubmission.source)}
                  </span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Date</p>
                  <p className="text-sm font-medium text-zinc-900">
                    {new Date(selectedSubmission.createdAt).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Subject</p>
                <p className="text-sm font-medium text-zinc-900">{selectedSubmission.subject}</p>
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Message</p>
                <div className="bg-zinc-50 rounded-lg p-4 text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-2">Update Status</p>
                <div className="flex flex-wrap gap-1.5">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => updateStatus(selectedSubmission.id, opt.value)}
                      disabled={busyId === selectedSubmission.id}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border disabled:opacity-50 disabled:cursor-wait ${
                        selectedSubmission.status === opt.value
                          ? 'bg-zinc-950 text-white border-zinc-950'
                          : `border-zinc-200 ${opt.color}`
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-2">Notes ({selectedSubmission.notes.length})</p>
                <div className="space-y-2">
                  {selectedSubmission.notes.map(note => (
                    <div key={note.id} className="bg-zinc-50 border border-zinc-100 rounded-lg p-3">
                      <p className="text-sm text-zinc-700">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[10px] text-zinc-400">
                          {new Date(note.createdAt).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="text-[10px] text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                    onKeyDown={(e) => e.key === 'Enter' && addNote()}
                  />
                  <button
                    onClick={addNote}
                    disabled={addingNote || !noteText.trim()}
                    className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
                  >
                    {addingNote ? '...' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
