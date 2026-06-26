'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

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
  accentColor: string     // e.g. '#091C8C'  — used for grid stroke, lines, badge
  accentLight: string     // e.g. '#eef2ff'  — light tint for badge bg
  accentBorder: string    // e.g. '#c7d2fe'  — border for badge
  gridStroke: string      // e.g. '#BFDBFE'
  blob1: string
  blob2: string
  blob3: string
  breadcrumb: string
  breadcrumbHref: string
  certs?: string[]
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()

    type Particle = {
      x: number; y: number; speed: number
      opacity: number; fadeDelay: number; fadeStart: number; fadingOut: boolean
    }

    let particles: Particle[] = []
    let raf = 0

    const count = () => Math.floor((canvas.width * canvas.height) / 9000)

    const make = (): Particle => {
      const fadeDelay = Math.random() * 800 + 200
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 6 + 0.08,
        opacity: 0.45,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      }
    }

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width
      p.y = Math.random() * canvas.height
      p.speed = Math.random() / 6 + 0.08
      p.opacity = 0.45
      p.fadeDelay = Math.random() * 800 + 200
      p.fadeStart = Date.now() + p.fadeDelay
      p.fadingOut = false
    }

    const init = () => {
      particles = []
      for (let i = 0; i < count(); i++) particles.push(make())
    }

    // parse accent hex -> rgb for particle color
    const hex = accentColor.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y -= p.speed
        if (p.y < 0) reset(p)
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true
        if (p.fadingOut) {
          p.opacity -= 0.006
          if (p.opacity <= 0) reset(p)
        }
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 2 + 1)
      })
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => { setSize(); init() }
    window.addEventListener('resize', onResize)
    init()
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [accentColor])

  return (
    <section className="relative pt-28 sm:pt-36 pb-24 overflow-hidden min-h-[520px]">

      {/* ── BG BASE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />

        {/* Subtle gradient tint */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse 80% 60% at 10% 10%, ${blob1}55 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 80%, ${blob2}33 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, ${blob3}22 0%, transparent 60%)` }}
        />

        {/* Square grid */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`svc-grid-${badge.replace(/\s/g, '')}`} width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke={gridStroke} strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#svc-grid-${badge.replace(/\s/g, '')})`} opacity="0.7" />
        </svg>

        {/* Animated accent lines — horizontal */}
        <div className="absolute inset-0">
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
          {/* Vertical lines */}
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

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ mixBlendMode: 'multiply', opacity: 0.5 }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {/* Badge */}
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

            {/* Certs */}
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

      {/* Keyframe styles */}
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
