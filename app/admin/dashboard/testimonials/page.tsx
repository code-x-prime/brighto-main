'use client'

import { useState, useEffect } from 'react'
import { Star, Plus, Trash2, Edit, X, Eye, EyeOff, Search, Quote } from 'lucide-react'
import { authFetch } from '@/lib/auth-client'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string | null
  isActive: boolean
  sortOrder: number
  createdAt: string
}

const defaultForm = {
  name: '',
  role: '',
  company: '',
  content: '',
  rating: 5,
  avatar: '',
  isActive: true,
  sortOrder: 0,
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchTestimonials()
  }, [])

  async function fetchTestimonials() {
    try {
      const res = await authFetch('/api/admin/testimonials')
      const data = await res.json()
      if (data.success) setTestimonials(data.testimonials)
    } catch {
      console.error('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit() {
    if (!form.name.trim() || !form.content.trim()) return
    setSaving(true)
    try {
      const url = editingId ? `/api/admin/testimonials/${editingId}` : '/api/admin/testimonials'
      const method = editingId ? 'PUT' : 'POST'
      const res = await authFetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        if (editingId) {
          setTestimonials(testimonials.map(t => t.id === editingId ? data.testimonial : t))
        } else {
          setTestimonials([...testimonials, data.testimonial])
        }
        resetForm()
      }
    } catch {
      console.error('Failed to save')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this testimonial?')) return
    try {
      await authFetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
      setTestimonials(testimonials.filter(t => t.id !== id))
    } catch {
      console.error('Failed to delete')
    }
  }

  async function toggleActive(id: string, current: boolean) {
    try {
      const res = await authFetch(`/api/admin/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !current }),
      })
      const data = await res.json()
      if (data.success) {
        setTestimonials(testimonials.map(t => t.id === id ? { ...t, isActive: !current } : t))
      }
    } catch {
      console.error('Failed to toggle')
    }
  }

  function startEdit(t: Testimonial) {
    setForm({
      name: t.name,
      role: t.role,
      company: t.company,
      content: t.content,
      rating: t.rating,
      avatar: t.avatar || '',
      isActive: t.isActive,
      sortOrder: t.sortOrder,
    })
    setEditingId(t.id)
    setShowForm(true)
  }

  function resetForm() {
    setForm(defaultForm)
    setEditingId(null)
    setShowForm(false)
  }

  const filtered = testimonials.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.company.toLowerCase().includes(search.toLowerCase()) ||
    t.content.toLowerCase().includes(search.toLowerCase())
  )

  const activeCount = testimonials.filter(t => t.isActive).length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Testimonials</h1>
          <p className="text-sm text-zinc-500 mt-0.5">{testimonials.length} total, {activeCount} active</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true) }}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <div className="mb-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search testimonials..."
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
          <Quote className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-500 text-sm">{search ? 'No testimonials match your search' : 'No testimonials yet. Add your first one!'}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Person</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Company</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Review</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Rating</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => {
                const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                return (
                  <tr key={t.id} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-white font-medium text-xs">
                          {initials}
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900 text-sm">{t.name}</div>
                          <div className="text-xs text-zinc-500">{t.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-zinc-600">{t.company}</td>
                    <td className="px-5 py-3.5 text-sm text-zinc-600 max-w-[250px] truncate">{t.content}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`} />
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => toggleActive(t.id, t.isActive)}
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                          t.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'
                        }`}
                      >
                        {t.isActive ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {t.isActive ? 'Active' : 'Hidden'}
                      </button>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => startEdit(t)}
                          className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-zinc-600" />
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="p-1.5 hover:bg-red-50 rounded-md transition-colors"
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

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={resetForm} />
          <div className="relative bg-white rounded-xl border border-zinc-200 shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
              <h3 className="text-base font-semibold text-zinc-900">
                {editingId ? 'Edit Testimonial' : 'Add Testimonial'}
              </h3>
              <button onClick={resetForm} className="p-1.5 hover:bg-zinc-100 rounded-lg">
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Role</label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. CEO"
                    className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. TechCorp"
                    className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Review *</label>
                <textarea
                  value={form.content}
                  onChange={e => setForm({ ...form, content: e.target.value })}
                  placeholder="What did they say about Brighto?"
                  rows={3}
                  className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none resize-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(r => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setForm({ ...form, rating: r })}
                        className="p-0.5"
                      >
                        <Star className={`w-6 h-6 ${r <= form.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Sort Order</label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={e => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Avatar URL (optional)</label>
                <input
                  type="text"
                  value={form.avatar}
                  onChange={e => setForm({ ...form, avatar: e.target.value })}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={form.isActive}
                  onChange={e => setForm({ ...form, isActive: e.target.checked })}
                  className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-950/10"
                />
                <label htmlFor="isActive" className="text-sm text-zinc-600">Active (visible on website)</label>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-zinc-100 flex justify-end gap-3">
              <button
                onClick={resetForm}
                className="px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={saving || !form.name.trim() || !form.content.trim()}
                className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
              >
                {saving ? 'Saving...' : editingId ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
