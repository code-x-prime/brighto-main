'use client'

import { useState, useEffect } from 'react'
import { Save, RotateCcw, Eye } from 'lucide-react'
import { authFetch } from '@/lib/auth-client'

const DEFAULTS: Record<string, string> = {
  verificationRequests: '2,847',
  verificationGrowth: '+12% week',
  verificationProgress: '74',
  activeCases: '543',
  riskAlerts: '28',
  fraudFlags: '5',
  investigationProgress: '78',
  avgTurnaround: '3.2',
  avgTurnaroundUnit: 'days',
  avgTurnaroundChange: '0.4 days vs last month',
  complianceMet: '4',
  complianceTotal: '5',
}

export default function DashboardSettingsPage() {
  const [v, setV] = useState<Record<string, string>>(DEFAULTS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard')
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          const map: Record<string, string> = {}
          data.stats.forEach((s: { key: string; value: string }) => { map[s.key] = s.value })
          if (Object.keys(map).length > 0) setV(map)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    try {
      const stats = Object.entries(v).map(([key, value]) => ({
        key,
        label: key,
        value,
        type: 'text',
      }))
      await authFetch('/api/dashboard', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stats }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {}
    setSaving(false)
  }

  function set(key: string, val: string) {
    setV((prev) => ({ ...prev, [key]: val }))
  }

  if (loading) return <div className="text-center py-20 text-zinc-500">Loading...</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Dashboard Preview & Settings</h2>
          <p className="text-sm text-zinc-500 mt-1">Edit numbers on the left, see live preview on the right</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setV(DEFAULTS)} className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors">
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : saved ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>

      {saved && <div className="mb-4 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-700">Saved successfully!</div>}

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-zinc-400" /> Verification Requests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Number</label>
                <input value={v.verificationRequests} onChange={(e) => set('verificationRequests', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Growth Badge</label>
                <input value={v.verificationGrowth} onChange={(e) => set('verificationGrowth', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Progress %</label>
                <input value={v.verificationProgress} onChange={(e) => set('verificationProgress', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Stat Cards</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Active Cases</label>
                <input value={v.activeCases} onChange={(e) => set('activeCases', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Risk Alerts</label>
                <input value={v.riskAlerts} onChange={(e) => set('riskAlerts', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Fraud Flags</label>
                <input value={v.fraudFlags} onChange={(e) => set('fraudFlags', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Investigation Progress</h3>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5">Progress %</label>
              <input value={v.investigationProgress} onChange={(e) => set('investigationProgress', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Avg Turnaround</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Number</label>
                <input value={v.avgTurnaround} onChange={(e) => set('avgTurnaround', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Unit</label>
                <input value={v.avgTurnaroundUnit} onChange={(e) => set('avgTurnaroundUnit', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Change Text</label>
                <input value={v.avgTurnaroundChange} onChange={(e) => set('avgTurnaroundChange', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Compliance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Requirements Met</label>
                <input value={v.complianceMet} onChange={(e) => set('complianceMet', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Total Requirements</label>
                <input value={v.complianceTotal} onChange={(e) => set('complianceTotal', e.target.value)} className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 outline-none transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Live Preview</p>
          <div className="relative">
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-50 border-b border-zinc-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                </div>
                <span className="text-xs font-semibold text-zinc-500 tracking-wide">Verification Dashboard</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600">LIVE</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-xl p-4 border border-zinc-100 bg-zinc-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Requests</span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">↑ {v.verificationGrowth}</span>
                  </div>
                  <div className="text-4xl font-bold text-zinc-900 tracking-tight">{v.verificationRequests}</div>
                  <div className="mt-3 w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 rounded-full transition-all" style={{ width: `${v.verificationProgress}%` }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl p-3 text-center border border-zinc-100 bg-zinc-50">
                    <div className="text-xl font-bold text-zinc-900">{v.activeCases}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Active Cases</div>
                  </div>
                  <div className="rounded-xl p-3 text-center border border-zinc-100 bg-zinc-50">
                    <div className="text-xl font-bold text-zinc-900">{v.riskAlerts}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Risk Alerts</div>
                  </div>
                  <div className="rounded-xl p-3 text-center border border-zinc-100 bg-zinc-50">
                    <div className="text-xl font-bold text-zinc-900">{v.fraudFlags}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Fraud Flags</div>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-zinc-700">Compliance Status</span>
                    <span className="text-[11px] text-zinc-400">{v.complianceMet}/{v.complianceTotal} requirements met</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(parseInt(v.complianceTotal) || 5)].map((_, i) => (
                      <div key={i} className="flex-1 h-2 rounded-full" style={{ background: i < parseInt(v.complianceMet) ? '#18181b' : '#e4e4e7' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 bg-white rounded-xl border border-zinc-200 shadow-lg p-4 w-44 z-20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-zinc-500">Investigation Progress</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-zinc-900">{v.investigationProgress}%</div>
              <div className="w-full h-1.5 bg-zinc-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-zinc-900 rounded-full" style={{ width: `${v.investigationProgress}%` }} />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl border border-zinc-200 shadow-lg p-4 w-44 z-20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-zinc-500">Avg Turnaround</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-zinc-900">{v.avgTurnaround} <span className="text-base font-medium text-zinc-500">{v.avgTurnaroundUnit}</span></div>
              <div className="text-[10px] text-zinc-400 mt-1">↓ {v.avgTurnaroundChange}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
