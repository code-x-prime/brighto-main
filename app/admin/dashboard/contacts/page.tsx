'use client'

import { useState, useEffect } from 'react'
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
  status: string
  emailSent: boolean
  notes: Note[]
  createdAt: string
}

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', icon: IconMail, color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { value: 'in_progress', label: 'In Progress', icon: IconClock, color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { value: 'contacted', label: 'Contacted', icon: IconMailOpened, color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { value: 'resolved', label: 'Resolved', icon: IconCircleCheck, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { value: 'closed', label: 'Closed', icon: IconCircleX, color: 'bg-zinc-100 text-zinc-500 border-zinc-200' },
]

export default function ContactsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [noteText, setNoteText] = useState('')
  const [addingNote, setAddingNote] = useState(false)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    try {
      const res = await authFetch('/api/admin/contacts')
      const data = await res.json()
      if (data.success) setSubmissions(data.submissions)
    } catch {
      console.error('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, status: string) {
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
      }
    } catch {
      console.error('Failed to update')
    }
  }

  async function deleteSubmission(id: string) {
    if (!confirm('Delete this submission?')) return
    try {
      await authFetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
      setSubmissions(submissions.filter(s => s.id !== id))
      if (selectedSubmission?.id === id) setSelectedSubmission(null)
    } catch {
      console.error('Failed to delete')
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
      await authFetch(`/api/admin/contacts/${selectedSubmission.id}/notes/${noteId}`, { method: 'DELETE' })
      setSelectedSubmission({
        ...selectedSubmission,
        notes: selectedSubmission.notes.filter(n => n.id !== noteId),
      })
    } catch {
      console.error('Failed to delete note')
    }
  }

  const filtered = submissions
    .filter(s => filter === 'all' || s.status === filter)
    .filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.subject.toLowerCase().includes(search.toLowerCase())
    )

  const statusCounts = submissions.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Contacts</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{submissions.length} total submissions</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts..."
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
          <p className="text-zinc-500 text-sm">{search || filter !== 'all' ? 'No contacts match your filters' : 'No contact submissions yet'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Contact</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Subject</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(sub => {
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
                    <td className="px-5 py-3.5 text-sm text-zinc-600 max-w-[200px] truncate">{sub.subject}</td>
                    <td className="px-5 py-3.5">
                      <select
                        value={sub.status}
                        onChange={(e) => updateStatus(sub.id, e.target.value)}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border cursor-pointer ${statusOpt.color}`}
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
                          className="p-1.5 hover:bg-red-50 rounded-md transition-colors"
                          title="Delete"
                        >
                          <IconTrash className="w-4 h-4 text-red-500" />
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

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-50 rounded-lg p-3">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm font-medium text-zinc-900">{selectedSubmission.phone || 'N/A'}</p>
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
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
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
