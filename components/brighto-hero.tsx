'use client'

import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'


const ROTATING_HEADLINES = [
  { primary: 'Due Diligence,', highlight: 'Field Investigation', rest: '& CPV Solutions', highlightClass: 'text-orange-600' },
  { primary: 'Due Diligence,', highlight: 'Fraud Detection', rest: '& Risk Intelligence', highlightClass: 'text-orange-600' },
  { primary: 'Due Diligence,', highlight: 'Compliance', rest: '& Verification Services', highlightClass: 'text-orange-600' },
  { primary: 'Due Diligence,', highlight: 'Risk Management', rest: 'Solutions', highlightClass: 'text-orange-600' },
]

export function BrightoHero() {
  const [activeHeadline, setActiveHeadline] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true)
      setTimeout(() => {
        setActiveHeadline((prev) => (prev + 1) % ROTATING_HEADLINES.length)
        setFadeOut(false)
      }, 300)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 overflow-hidden" style={{ backgroundColor: '#fff' }}>
      {/* Background — soft blue gradient + faint square grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* White base */}
        <div className="absolute inset-0 bg-white" />
        {/* Animated blurred color blobs */}
        <div className="absolute w-150 h-150 rounded-full blur-[120px] opacity-30 hero-blob-1"
          style={{ background: '#93c5fd', top: '-10%', left: '-5%' }} />
        <div className="absolute w-125 h-125 rounded-full blur-[100px] opacity-20 hero-blob-2"
          style={{ background: '#f97316', bottom: '-10%', right: '5%' }} />
        <div className="absolute w-100 h-100 rounded-full blur-[90px] opacity-20 hero-blob-3"
          style={{ background: '#818cf8', top: '30%', left: '40%' }} />
        <style>{`
          @keyframes blob1 {
            0%,100% { transform: translate(0,0) scale(1); }
            33%      { transform: translate(60px,-40px) scale(1.1); }
            66%      { transform: translate(-30px,50px) scale(0.95); }
          }
          @keyframes blob2 {
            0%,100% { transform: translate(0,0) scale(1); }
            33%      { transform: translate(-70px,30px) scale(1.05); }
            66%      { transform: translate(40px,-60px) scale(1.1); }
          }
          @keyframes blob3 {
            0%,100% { transform: translate(0,0) scale(1); }
            50%      { transform: translate(-50px,-40px) scale(1.15); }
          }
          .hero-blob-1 { animation: blob1 14s ease-in-out infinite; }
          .hero-blob-2 { animation: blob2 18s ease-in-out infinite; }
          .hero-blob-3 { animation: blob3 12s ease-in-out infinite; }
        `}</style>
        {/* Faint square grid on top */}
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-sq-grid" width="70" height="70" patternUnits="userSpaceOnUse">
              <path d="M 70 0 L 0 0 0 70" fill="none" stroke="#BFDBFE" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-sq-grid)" opacity="0.7" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-900 animate-pulse" />
              <span className="text-sm font-medium text-blue-900">Trusted Risk, Verification & Technology Partner since 2015</span>
            </div>

            {/* Headline with Rotation */}
            <div className="min-h-[150px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px] flex items-start">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Due Diligence,
                <span
                  className="block transition-all duration-300"
                  style={{
                    opacity: fadeOut ? 0 : 1,
                    transform: fadeOut ? 'translateY(-10px)' : 'translateY(0)',
                  }}
                >
                  <span className={ROTATING_HEADLINES[activeHeadline].highlightClass}>
                    {ROTATING_HEADLINES[activeHeadline].highlight}
                  </span>
                  <br />
                  <span className="text-slate-950 font-bold">
                    {ROTATING_HEADLINES[activeHeadline].rest}
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
              Delivering secure, compliant, and technology-driven business solutions for financial institutions and enterprises since 2015.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {['ISO 27001 Certified', 'ISO 9001 Certified', 'SOC 2 Audited'].map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {cert}
                </span>
              ))}
            </div>



            {/* CTA Buttons with Hover Lift */}
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-950 transition-all duration-250 hover:shadow-lg hover:translate-y-[-4px] flex items-center gap-2">
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-all duration-250 hover:shadow-md hover:translate-y-[-4px]">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Visualization */}
          <div className="relative h-full py-16 lg:py-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg">

              {/* ── Main Dashboard Card ── */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-[0_32px_80px_rgba(9,28,140,0.10)] overflow-hidden relative z-10 hero-db-card">

                {/* Title bar — macOS style */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 tracking-wide">Verification Dashboard</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-600">LIVE</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">

                  {/* Requests metric */}
                  <div className="rounded-2xl p-4 border border-blue-100" style={{ background: 'linear-gradient(135deg,#eff6ff,#eef2ff)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Verification Requests</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">↑ +12% week</span>
                    </div>
                    <div className="text-4xl font-black text-blue-900 tracking-tight">2,847</div>
                    <div className="mt-3 w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-900 rounded-full" style={{ width: '74%' }} />
                    </div>
                  </div>

                  {/* 3-stat grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Active Cases', val: '543', dot: '#10B981', bg: '#f0fdf4', border: '#bbf7d0' },
                      { label: 'Risk Alerts', val: '28', dot: '#F97316', bg: '#fff7ed', border: '#fed7aa' },
                      { label: 'Fraud Flags', val: '5', dot: '#EF4444', bg: '#fef2f2', border: '#fecaca' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl p-3 text-center border" style={{ background: s.bg, borderColor: s.border }}>
                        <div className="w-2 h-2 rounded-full mx-auto mb-1.5" style={{ background: s.dot }} />
                        <div className="text-xl font-black text-slate-900">{s.val}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Compliance */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-bold text-slate-700">Compliance Status</span>
                      <span className="text-[11px] text-slate-400">4/5 requirements met</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex-1 h-2 rounded-full" style={{ background: i < 4 ? '#10B981' : '#E2E8F0' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating — Investigation Progress */}
              <div
                className="absolute -top-6 -right-4 sm:-right-12 bg-white rounded-xl border border-slate-200 shadow-xl p-4 w-40 sm:w-48 z-20 overflow-hidden hero-db-sm"
                style={{ animation: 'hero-float 3s ease-in-out infinite' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-slate-500">Investigation Progress</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </div>
                <div className="text-3xl font-black text-blue-900">78%</div>
                <div className="w-full h-1.5 bg-blue-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-900 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>

              {/* Floating — Avg Turnaround */}
              <div
                className="absolute -bottom-6 -left-4 sm:-left-12 bg-white rounded-xl border border-slate-200 shadow-xl p-4 w-40 sm:w-48 z-20 overflow-hidden hero-db-sm2"
                style={{ animation: 'hero-float 4s ease-in-out infinite 0.6s' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-slate-500">Avg Turnaround</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-3xl font-black text-emerald-600">3.2 <span className="text-base font-semibold">days</span></div>
                <div className="text-[10px] text-slate-400 mt-1">↓ 0.4 days vs last month</div>
              </div>

            </div>

            <style>{`
              @keyframes hero-float {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-14px); }
              }
              @keyframes float-particle {
                0%   { transform: translate(0,0); opacity:0.05; }
                50%  { opacity:0.15; }
                100% { transform: translate(-50px,-50px); opacity:0.05; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}


