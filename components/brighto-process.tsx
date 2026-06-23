'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ClipboardList, Briefcase, Microscope, CheckCircle2, BarChart3, FileCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Requirement Assessment',
    description: 'We start by getting clear on client goals, project scope, and exact verification needs. Every engagement begins with a thorough intake process so no detail is missed.',
    icon: ClipboardList,
    tag: 'Intake',
    color: 'blue',
    image: '/process/requirement-assessment.jpg',
  },
  {
    number: '02',
    title: 'Case Assignment',
    description: 'We hand over cases in accordance with predefined workflows — the right team, right expertise, right geography matched to each case automatically.',
    icon: Briefcase,
    tag: 'Allocation',
    color: 'orange',
    image: '/process/case-assignment.jpg',
  },
  {
    number: '03',
    title: 'Verification & Investigation',
    description: 'Teams carry out the actual verifications and field investigations on the ground — physical visits, document checks, applicant interviews, and multi-source validation.',
    icon: Microscope,
    tag: 'Field Work',
    color: 'purple',
    image: '/process/verification-investigation.jpg',
  },
  {
    number: '04',
    title: 'Quality Review',
    description: 'Internal QA teams review every case to keep standards high and reports consistent. Nothing moves forward without meeting our accuracy benchmarks.',
    icon: CheckCircle2,
    tag: 'QA Check',
    color: 'emerald',
    image: '/process/quality-review.jpg',
  },
  {
    number: '05',
    title: 'Risk Assessment',
    description: 'We study all findings and synthesize them into a clear risk picture — flagging anomalies, fraud signals, and compliance gaps for the client.',
    icon: BarChart3,
    tag: 'Analysis',
    color: 'amber',
    image: '/process/risk-assessment.jpg',
  },
  {
    number: '06',
    title: 'Reporting',
    description: 'Clients receive clear, structured, audit-ready reports they can use directly for final decisions, credit approvals, or regulatory submissions.',
    icon: FileCheck,
    tag: 'Delivery',
    color: 'teal',
    image: '/process/reporting.jpg',
  },
]

const tagColors: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  amber: 'bg-amber-100 text-amber-800 border-amber-200',
  teal: 'bg-teal-100 text-teal-800 border-teal-200',
}

const iconColors: Record<string, string> = {
  blue: 'bg-blue-900 text-white',
  orange: 'bg-orange-500 text-white',
  purple: 'bg-purple-700 text-white',
  emerald: 'bg-emerald-600 text-white',
  amber: 'bg-amber-500 text-white',
  teal: 'bg-teal-600 text-white',
}

export function BrightoProcess() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 4000)
    return () => clearInterval(t)
  }, [])

  const current = steps[active]
  const Icon = current.icon

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Subtle top-right blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-[0.06] bg-blue-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-blue-900 mb-2 tracking-widest uppercase">Our Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured, six-step workflow built for accuracy, compliance, and fast turnaround across all verification scenarios.
          </p>
        </div>

        {/* Main layout — step list left, detail panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* Left — step list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {steps.map((step, idx) => {
              const StepIcon = step.icon
              const isActive = idx === active
              const isDone = idx < active
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`group w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all duration-300 ${isActive
                    ? 'bg-blue-900 border-blue-900 shadow-lg shadow-blue-900/20'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50/50'
                    }`}
                >
                  {/* Step icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive
                    ? 'bg-white/15 text-white'
                    : isDone
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-500'
                    }`}>
                    {isDone && !isActive
                      ? <CheckCircle2 className="w-5 h-5" />
                      : <StepIcon className="w-5 h-5" />
                    }
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                        {step.number}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${isActive ? 'bg-white/10 text-blue-100 border-white/20' : tagColors[step.color]
                        }`}>
                        {step.tag}
                      </span>
                    </div>
                    <p className={`text-sm font-semibold mt-0.5 truncate ${isActive ? 'text-white' : 'text-slate-800'}`}>
                      {step.title}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 ml-auto shrink-0 transition-all ${isActive ? 'text-white opacity-100 translate-x-0' : 'text-slate-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                </button>
              )
            })}
          </div>

          {/* Right — detail panel */}
          <div className="lg:col-span-3 sticky top-28">
            <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 min-h-95 flex flex-col justify-between relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl" />
                {/* dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="proc-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="12" cy="12" r="1" fill="#ffffff" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#proc-dots)" />
                </svg>
              </div>

              {/* Full image with overlays */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shrink-0">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/20 to-slate-950/50" />

                {/* Step + tag — top overlay */}
                <div className="absolute top-4 left-5 right-5 flex items-start justify-between z-10">
                  <div>
                    <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">Step</span>
                    <p className="text-5xl font-black text-white/20 leading-none select-none">{current.number}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tagColors[current.color]}`}>
                    {current.tag}
                  </span>
                </div>

                {/* Icon badge — bottom-left overlay */}
                <div className={`absolute bottom-3 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg z-10 ${iconColors[current.color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Title + desc */}
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {current.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-base">
                  {current.description}
                </p>
              </div>

              {/* Bottom — animated progress dots */}
              <div className="relative z-10 flex items-center gap-2 mt-8">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className="relative h-2 rounded-full overflow-hidden transition-all duration-300 bg-slate-700"
                    style={{ width: idx === active ? 32 : 8 }}
                  >
                    {/* fill bar — animates from 0 to 100% over 4s when active */}
                    {idx === active && (
                      <span
                        className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
                        style={{ animation: 'fillBar 4s linear forwards' }}
                      />
                    )}
                    {/* already done → solid emerald */}
                    {idx < active && (
                      <span className="absolute inset-0 bg-emerald-500 rounded-full" />
                    )}
                  </button>
                ))}
                <span className="ml-auto text-xs text-slate-500 font-medium">
                  {active + 1} / {steps.length}
                </span>
              </div>

              <style>{`
                @keyframes fillBar {
                  from { width: 0%; }
                  to   { width: 100%; }
                }
              `}</style>
            </div>
          </div>

        </div>

        {/* Mobile — compact step list (visible on all, hidden lg) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
          {steps.map((step, idx) => {
            const StepIcon = step.icon
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`text-left p-3 rounded-xl border transition-all ${idx === active
                  ? 'border-blue-900 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-blue-200'
                  }`}
              >
                <span className={`text-[10px] font-bold ${idx === active ? 'text-blue-900' : 'text-slate-400'}`}>{step.number}</span>
                <p className={`text-xs font-semibold mt-1 leading-snug ${idx === active ? 'text-blue-900' : 'text-slate-700'}`}>{step.title}</p>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
