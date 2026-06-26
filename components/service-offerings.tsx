'use client'

import Link from 'next/link'
import {
  ArrowRight, Building2, BarChart3, Users, FileSearch, Shield,
  Phone, Search, FileCheck, Home, Briefcase, AlertTriangle,
  FileText, CheckCircle2, BadgeCheck, ClipboardList, ListChecks,
  MapPin, CreditCard, Landmark, Cpu, HeartPulse, Package,
  Microscope, type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Building2, BarChart3, Users, FileSearch, Shield,
  Phone, Search, FileCheck, Home, Briefcase, AlertTriangle,
  FileText, CheckCircle2, BadgeCheck, ClipboardList, ListChecks,
  MapPin, CreditCard, Landmark, Cpu, HeartPulse, Package,
  Microscope,
}


export interface ServiceItem {
  icon: string
  title: string
  desc: string
  color: string
  bg: string
  border: string
}

interface ServiceOfferingsProps {
  label?: string
  heading: string
  services: ServiceItem[]
  ctaText?: string
  ctaDesc?: string
  accentColor?: string
}

export function ServiceOfferings({
  label = 'What We Offer',
  heading,
  services,
  ctaText = 'Not sure which service you need?',
  ctaDesc = 'Our experts will assess your requirements and suggest the right approach for your organization.',
  accentColor = '#091C8C',
}: ServiceOfferingsProps) {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>
            {label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            {heading}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {services.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] ?? Shield
            const total = services.length
            const isLast = i === total - 1
            const isSecondLast = i === total - 2
            // Wide = first card of each visual row (pattern: wide+normal fills 3 cols per row)
            // Row 0: i=0(w2), i=1(1) → 3 cols
            // Row 1: i=2(1), i=3(w2) → 3 cols
            // Row 2: i=4(w2), i=5(1) → 3 cols
            // Row 3: i=6(1), i=7(w2) → 3 cols
            const isWide = i % 4 === 0 || i % 4 === 3
            // Last two cards → both col-span-2 to fill row evenly (3+3 won't fit; use 2+1 or pair)
            // Simplest: last card lone → col-span-3; last two both not wide → each col-span-2 (won't exceed if only 2 left)
            const twoLeft = isSecondLast && total - i === 2
            let colSpan: string
            if (twoLeft) {
              colSpan = 'lg:col-span-2 sm:col-span-2'
            } else if (isLast && !isWide) {
              colSpan = 'lg:col-span-3 sm:col-span-2'
            } else {
              colSpan = isWide ? 'lg:col-span-2' : 'lg:col-span-1'
            }

            return (
              <div
                key={svc.title}
                className={`group relative rounded-2xl border p-6 sm:p-7 overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${colSpan}`}
                style={{
                  background: `color-mix(in srgb, ${svc.bg} 50%, white 50%)`,
                  borderColor: svc.border,
                  boxShadow: `0 4px 24px -4px ${svc.border}99, inset 0 1px 0 rgba(255,255,255,0.9)`,
                }}
              >
                {/* Large bg number watermark */}
                <span
                  className="absolute -right-2 -bottom-4 text-[7rem] font-black leading-none select-none pointer-events-none opacity-[0.06] transition-all duration-300 group-hover:opacity-[0.1] group-hover:scale-110"
                  style={{ color: svc.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-60"
                  style={{ background: `linear-gradient(90deg, ${svc.color}00, ${svc.color}, ${svc.color}00)` }}
                />

                {(isLast && !isWide) || twoLeft ? (
                  /* Wide/last cards — horizontal layout */
                  <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                      style={{ background: svc.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-black text-slate-900 mb-1.5 leading-snug">{svc.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                    </div>
                    <span
                      className="text-xs font-black tabular-nums px-2.5 py-1 rounded-full border shrink-0 self-start"
                      style={{ color: svc.color, borderColor: svc.border, background: 'rgba(255,255,255,0.7)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                ) : (
                  /* Normal/wide cards — vertical layout */
                  <div className="relative flex flex-col h-full gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
                        style={{ background: svc.color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span
                        className="text-xs font-black tabular-nums px-2.5 py-1 rounded-full border"
                        style={{ color: svc.color, borderColor: svc.border, background: 'rgba(255,255,255,0.7)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-black text-slate-900 mb-2 leading-snug ${isWide ? 'text-xl' : 'text-base sm:text-lg'}`}>
                        {svc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                    </div>
                    <div
                      className="h-0.5 w-10 rounded-full opacity-40 group-hover:w-20 group-hover:opacity-60 transition-all duration-500"
                      style={{ background: svc.color }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{ctaText}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{ctaDesc}</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all"
          >
            Talk to an Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
