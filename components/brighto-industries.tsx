'use client'

import { ArrowRight, PlusIcon } from 'lucide-react'
import Image from 'next/image'

const industries = [
  { name: 'Banking', icon: '/icons/Banking.svg', accent: '#3B82F6', desc: 'Due diligence, field investigation, and fraud detection for scheduled and cooperative banks.' },
  { name: 'NBFCs', icon: '/icons/NBFCs.svg', accent: '#F97316', desc: 'Loan application verification and RCU support for non-banking financial companies.' },
  { name: 'Housing Finance', icon: '/icons/housing-finance.svg', accent: '#10B981', desc: 'Physical address checks and property verification for housing finance companies.' },
  { name: 'Fintech Companies', icon: '/icons/fintech-companies.svg', accent: '#8B5CF6', desc: 'API-driven KYC, KYB, and digital onboarding for fintech platforms at scale.' },
  { name: 'Insurance', icon: '/icons/Insurance.svg', accent: '#EF4444', desc: 'Risk assessment and claimant verification for insurance underwriting and claims.' },
  { name: 'Microfinance', icon: '/icons/Microfinance.svg', accent: '#14B8A6', desc: 'Field verification for MFI customer onboarding in rural and semi-urban locations.' },
  { name: 'Staffing & Recruit', icon: '/icons/staffing-recruitment.svg', accent: '#6366F1', desc: 'Background screening, employment verification, and contractor checks for workforce compliance.' },
  { name: 'Commodity Finance', icon: '/icons/commodity-finance.svg', accent: '#F59E0B', desc: 'Warehouse audits, stock verification, and collateral reviews for commodity finance lenders.' },
  { name: 'Manufacturing', icon: '/icons/Manufacturing.svg', accent: '#64748B', desc: 'Vendor screening and contractor verification for manufacturing supply chains.' },
  { name: 'Logistics', icon: '/icons/Logistics.svg', accent: '#06B6D4', desc: 'Employee background verification for a safe and trusted logistics workforce.' },
]

/* alternating highlight pattern — cells at positions 0,2,5,7 get subtle bg lift */
const HIGHLIGHTED = new Set([0, 2, 5, 7])

export function BrightoIndustries() {
  return (
    <section id="industries" className="py-12 lg:py-16 bg-slate-950 relative overflow-hidden">

      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ind-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ind-dots)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute -top-32 left-1/4 w-125 h-125 rounded-full blur-[120px] opacity-[0.08] bg-blue-600 pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-100 h-100 rounded-full blur-[100px] opacity-[0.07] bg-orange-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Trusted Across<br />10 Sectors
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              Our experience across different sectors helps us understand each industry's own verification needs and daily challenges — so we deliver practical support that fits.
            </p>
          </div>


        </div>

        {/* Logo-cloud grid — border-connected, corner plus icons */}
        <div className="relative border border-slate-800 rounded-2xl overflow-hidden">

          {/* Full-width top border line */}
          <div className="absolute -top-px left-0 right-0 h-px bg-slate-700/60 pointer-events-none" />
          <div className="absolute -bottom-px left-0 right-0 h-px bg-slate-700/60 pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-slate-800">

            {industries.map((ind, idx) => {
              const isHighlighted = HIGHLIGHTED.has(idx)
              /* corner + icons: show on right-border cells */
              const showRightPlus = idx % 5 !== 4  /* not last col on lg */
              const showBottomPlus = idx < 5        /* first row on lg */

              return (
                <div
                  key={idx}
                  className="group relative flex flex-col gap-4 p-6 border-r border-b border-slate-800 cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{
                    background: isHighlighted
                      ? 'rgba(255,255,255,0.03)'
                      : 'transparent',
                  }}
                >
                  {/* Hover accent glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 30% 20%, ${ind.accent}18, transparent 65%)`,
                    }}
                  />

                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(to right, transparent, ${ind.accent}90, transparent)` }}
                  />

                  {/* Corner + icons (logo-cloud style) */}
                  {showRightPlus && showBottomPlus && (
                    <PlusIcon
                      className="absolute -right-3 -bottom-3 z-20 w-6 h-6 text-slate-700"
                      strokeWidth={1.5}
                    />
                  )}

                  {/* Icon box */}
                  <div
                    className="relative z-10 w-13 h-13 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${ind.accent}20`,
                      border: `1px solid ${ind.accent}35`,
                    }}
                  >
                    <Image
                      src={ind.icon}
                      alt={ind.name}
                      width={35}
                      height={35}
                      style={{ filter: 'invert(1) brightness(10)', opacity: 0.9 }}
                    />
                  </div>

                  {/* Accent dot */}
                  <div
                    className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
                    style={{ background: ind.accent }}
                  />

                  {/* Text */}
                  <div className="relative z-10 flex flex-col gap-1.5 flex-1">
                    <h3
                      className="text-sm font-bold text-white leading-snug group-hover:text-white transition-colors duration-300"
                      style={{}}
                    >
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(to right, transparent, ${ind.accent}, transparent)` }}
                  />
                </div>
              )
            })}

          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-center">
          <button className="group flex items-center gap-2.5 px-6 py-3 rounded-xl border border-slate-700 text-slate-400 text-sm font-semibold hover:border-slate-500 hover:text-white transition-all duration-300">
            Explore All Industry Solutions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  )
}
