'use client'

import { ArrowRight, BookOpen, TrendingUp, Shield, FileText, AlertTriangle, CheckCircle2 } from 'lucide-react'

const TOPICS = [
  {
    icon: FileText,
    category: 'Due Diligence',
    title: 'Due Diligence Tips & Best Practices',
    desc: 'Practical guidance on structuring due diligence workflows, document checklists, and field verification standards for financial institutions.',
    accent: '#3B82F6',
  },
  {
    icon: TrendingUp,
    category: 'Risk Management',
    title: 'Risk Management Ideas for Lenders',
    desc: 'Industry insights on managing lending risk, improving RCU processes, and building robust internal risk review frameworks.',
    accent: '#F97316',
  },
  {
    icon: Shield,
    category: 'Compliance',
    title: 'Compliance Changes & Regulatory Updates',
    desc: 'Stay current with RBI guidelines, KYC/AML regulatory updates, and compliance requirements affecting NBFCs, banks, and fintechs.',
    accent: '#10B981',
  },
  {
    icon: AlertTriangle,
    category: 'Fraud Detection',
    title: 'Verification Updates & Fraud Intelligence',
    desc: 'Fresh insights on emerging fraud patterns, verification technology, and fraud containment strategies across the financial sector.',
    accent: '#EF4444',
  },
  {
    icon: BookOpen,
    category: 'Field Investigation',
    title: 'Field Investigation Insights',
    desc: 'On-ground investigation techniques, CPV standards, and how structured field checks strengthen loan application processing.',
    accent: '#8B5CF6',
  },
  {
    icon: CheckCircle2,
    category: 'Background Verification',
    title: 'Background Verification Best Practices',
    desc: 'Employee screening, vendor verification, and contractor background check frameworks for regulated industries.',
    accent: '#6366F1',
  },
]

export function BrightoInsights() {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-100">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ins-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="14" cy="14" r="1" fill="#CBD5E1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ins-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-900 mb-3 tracking-widest uppercase">Insights & Resources</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
              Industry Knowledge & Best Practices
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Stay updated with fresh industry news, verification updates, due diligence tips, risk management ideas, compliance changes, and practical best practices.
            </p>
          </div>
          <button className="shrink-0 self-start lg:self-auto flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors">
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TOPICS.map((topic, idx) => {
            const Icon = topic.icon
            return (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col gap-5"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-black text-slate-100 select-none leading-none group-hover:text-slate-200 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Top — icon + category */}
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${topic.accent}15`, border: `1px solid ${topic.accent}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: topic.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                    style={{ color: topic.accent, background: `${topic.accent}10`, borderColor: `${topic.accent}25` }}
                  >
                    {topic.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col gap-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{topic.desc}</p>
                </div>

                {/* Bottom accent bar on hover */}
                <div className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-900 transition-colors">
                  Read Article <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Bottom border accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${topic.accent}, transparent)` }}
                />
              </div>
            )
          })}
        </div>

        {/* CTA strip — dark version */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="font-bold text-white text-base sm:text-lg">Looking for a specific topic?</p>
            <p className="text-sm text-slate-400 mt-1">Browse all articles, case studies, and compliance updates from the Brighto knowledge base.</p>
          </div>
          <button className="relative z-10 shrink-0 flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-orange-500/20">
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
