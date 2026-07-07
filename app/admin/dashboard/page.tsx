'use client'

import { useState, useEffect } from 'react'
import { Briefcase, TrendingUp, Clock } from 'lucide-react'

export default function DashboardPage() {
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 })

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/jobs')
        const data = await res.json()
        if (data.success) {
          const jobs = data.jobs
          setStats({
            total: jobs.length,
            active: jobs.filter((j: { isActive: boolean }) => j.isActive).length,
            inactive: jobs.filter((j: { isActive: boolean }) => !j.isActive).length,
          })
        }
      } catch {
        console.error('Failed to fetch stats')
      }
    }
    fetchStats()
  }, [])

  const cards = [
    { label: 'Total Jobs', value: stats.total, icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Active Jobs', value: stats.active, icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Inactive Jobs', value: stats.inactive, icon: Clock, color: 'bg-orange-500' },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${card.color}`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <p className="text-2xl font-bold text-slate-900">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
