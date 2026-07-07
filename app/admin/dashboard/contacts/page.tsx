'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Trash2, Eye, Mail, MailOpen, Clock, CheckCircle, XCircle } from 'lucide-react'

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
  { value: 'new', label: 'New', icon: Mail, color: 'bg-blue-100 text-blue-700' },
  { value: 'in_progress', label: 'In Progress', icon: Clock, color: 'bg-yellow-100 text-yellow-700' },
  { value: 'contacted', label: 'Contacted', icon: MailOpen, color: 'bg-purple-100 text-purple-700' },
  { value: 'resolved', label: 'Resolved', icon: CheckCircle, color: 'bg-green-100 text-green-700' },
  { value: 'closed', label: 'Closed', icon: XCircle, color: 'bg-gray-100 text-gray-700' },
]

export default function ContactsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [noteText, setNoteText] = useState('')
  const [addingNote, setAddingNote] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    try {
      const res = await fetch('/api/admin/contacts')
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
      const res = await fetch(`/api/admin/contacts/${id}`, {
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
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
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
      const res = await fetch(`/api/admin/contacts/${selectedSubmission.id}/notes`, {
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
      await fetch(`/api/admin/contacts/${selectedSubmission.id}/notes/${noteId}`, { method: 'DELETE' })
      setSelectedSubmission({
        ...selectedSubmission,
        notes: selectedSubmission.notes.filter(n => n.id !== noteId),
      })
    } catch {
      console.error('Failed to delete note')
    }
  }

  const filtered = filter === 'all' ? submissions : submissions.filter(s => s.status === filter)
  const statusCounts = submissions.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Contact Submissions</h2>
        <span className="text-sm text-slate-500">{submissions.length} total</span>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All ({submissions.length})
        </button>
        {STATUS_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === opt.value ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {opt.label} ({statusCounts[opt.value] || 0})
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No submissions found.</div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Contact</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Subject</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Email</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(sub => {
                  const statusOpt = STATUS_OPTIONS.find(s => s.value === sub.status) || STATUS_OPTIONS[0]
                  return (
                    <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{sub.name}</div>
                        <div className="text-xs text-slate-500">{sub.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-[200px] truncate">{sub.subject}</td>
                      <td className="px-6 py-4">
                        <select
                          value={sub.status}
                          onChange={(e) => updateStatus(sub.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${statusOpt.color}`}
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs ${sub.emailSent ? 'text-green-600' : 'text-red-500'}`}>
                          {sub.emailSent ? <Mail className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {sub.emailSent ? 'Sent' : 'Failed'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4 text-blue-600" />
                          </button>
                          <button
                            onClick={() => deleteSubmission(sub.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
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
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedSubmission(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            {/* Dialog Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{selectedSubmission.name}</h3>
                <p className="text-sm text-slate-500">{selectedSubmission.email}</p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <XCircle className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">Phone</p>
                  <p className="text-sm font-medium text-slate-900">{selectedSubmission.phone || 'N/A'}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">Date</p>
                  <p className="text-sm font-medium text-slate-900">
                    {new Date(selectedSubmission.createdAt).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Subject & Message */}
              <div>
                <p className="text-xs text-slate-500 mb-1">Subject</p>
                <p className="text-sm font-medium text-slate-900">{selectedSubmission.subject}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Message</p>
                <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>

              {/* Status */}
              <div>
                <p className="text-xs text-slate-500 mb-2">Status</p>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => updateStatus(selectedSubmission.id, opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedSubmission.status === opt.value
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <p className="text-xs text-slate-500 mb-2">Notes ({selectedSubmission.notes.length})</p>
                <div className="space-y-3">
                  {selectedSubmission.notes.map(note => (
                    <div key={note.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm text-slate-700">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-400">
                          {new Date(note.createdAt).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="text-xs text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Note */}
                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && addNote()}
                  />
                  <button
                    onClick={addNote}
                    disabled={addingNote || !noteText.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
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
