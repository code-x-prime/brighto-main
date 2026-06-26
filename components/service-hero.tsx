'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from 'framer-motion'

interface StatCard {
  val: string
  label: string
  sub: string
  color: string
  bg: string
  border: string
}

interface ServiceHeroProps {
  badge: string
  title: string
  titleAccent: string
  subtitle?: string
  description: string
  primaryCta?: string
  secondaryCta?: string
  stats: StatCard[]
  accentColor: string
  accentLight: string
  accentBorder: string
  gridStroke: string
  blob1: string
  blob2: string
  blob3: string
  breadcrumb: string
  breadcrumbHref: string
  certs?: string[]
}

function GridPattern({
  offsetX,
  offsetY,
  size,
  stroke,
}: {
  offsetX: any
  offsetY: any
  size: number
  stroke: string
}) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={`grid-${stroke.replace('#', '')}`}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={stroke}
            strokeWidth="0.8"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${stroke.replace('#', '')})`} />
    </svg>
  )
}

export function ServiceHero({
  badge,
  title,
  titleAccent,
  subtitle,
  description,
  primaryCta = 'Request Consultation',
  secondaryCta = 'Contact Our Team',
  stats,
  accentColor,
  accentLight,
  accentBorder,
  gridStroke,
  blob1,
  blob2,
  blob3,
  breadcrumb,
  breadcrumbHref,
  certs = ['ISO 27001 Certified', 'ISO 9001 Certified', 'SOC 2 Audited'],
}: ServiceHeroProps) {
  const GRID_SIZE = 44

  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const handleMouseLeave = () => {
    mouseX.set(-9999)
    mouseY.set(-9999)
  }

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % GRID_SIZE)
    gridOffsetY.set((gridOffsetY.get() + 0.4) % GRID_SIZE)
  })

  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <section
      className="relative pt-28 sm:pt-36 pb-24 overflow-hidden min-h-130"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── BG BASE ── */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      {/* Gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 10% 10%, ${blob1}55 0%, transparent 60%),
                       radial-gradient(ellipse 60% 50% at 90% 80%, ${blob2}33 0%, transparent 60%),
                       radial-gradient(ellipse 50% 40% at 50% 50%, ${blob3}22 0%, transparent 60%)`,
        }}
      />

      {/* Dim base grid — always visible */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          size={GRID_SIZE}
          stroke={gridStroke}
        />
      </div>

      {/* Bright grid — flashlight reveal on hover */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage, opacity: 0.55 }}
      >
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          size={GRID_SIZE}
          stroke={accentColor}
        />
      </motion.div>

      {/* Animated accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[18, 50, 82].map((pos, i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 right-0 svc-hline"
            style={{
              top: `${pos}%`,
              height: '1px',
              background: `linear-gradient(90deg, transparent 0%, ${accentColor}22 20%, ${accentColor}44 50%, ${accentColor}22 80%, transparent 100%)`,
              animationDelay: `${i * 130 + 100}ms`,
            }}
          />
        ))}
        {[20, 50, 80].map((pos, i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 bottom-0 svc-vline"
            style={{
              left: `${pos}%`,
              width: '1px',
              background: `linear-gradient(180deg, transparent 0%, ${accentColor}22 20%, ${accentColor}44 50%, ${accentColor}22 80%, transparent 100%)`,
              animationDelay: `${i * 120 + 400}ms`,
            }}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-slate-400">Services</span>
          <span aria-hidden>/</span>
          <span className="font-semibold" style={{ color: accentColor }}>{breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border text-xs font-bold uppercase tracking-wider"
              style={{ background: accentLight, borderColor: accentBorder, color: accentColor }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              {badge}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.08] mb-4"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              {title}{' '}
              <span style={{ color: accentColor }}>{titleAccent}</span>
            </h1>

            {subtitle && (
              <p className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: accentColor, opacity: 0.7 }}>
                {subtitle}
              </p>
            )}

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: accentColor }}
              >
                {primaryCta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all border-2"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {secondaryCta}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {certs.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-800"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 border backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  background: `color-mix(in srgb, ${s.bg} 55%, white 45%)`,
                  borderColor: s.border,
                  boxShadow: `0 2px 16px 0 ${s.border}88, inset 0 1px 0 rgba(255,255,255,0.8)`,
                }}
              >
                <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-sm font-bold text-slate-800">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .svc-hline {
          transform: scaleX(0);
          transform-origin: 50% 50%;
          animation: svcDrawX 900ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        .svc-vline {
          transform: scaleY(0);
          transform-origin: 50% 0%;
          animation: svcDrawY 1000ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        @keyframes svcDrawX {
          0%   { transform: scaleX(0); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.8; }
        }
        @keyframes svcDrawY {
          0%   { transform: scaleY(0); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}
