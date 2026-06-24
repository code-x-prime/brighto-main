'use client'

import { useState } from 'react'
import Image from 'next/image'

const ecosystem = [
  {
    name: 'Crediscout',
    role: 'Background Verification Solutions',
    desc: 'Employment verification, education checks, address confirmation, vendor screening, and contractor verification for comprehensive workforce screening.',
    tag: 'Background Verification',
    accent: '#3B82F6',
    letter: 'CS',
    logo: '/CrediScout-Logo2.png',
  },
  {
    name: 'Hubcheck',
    role: 'Warehouse Audit Solutions',
    desc: 'Warehouse inspections, stock verification, collateral reviews, inventory confirmation built for commodity finance and institutional risk management.',
    tag: 'Warehouse Audits',
    accent: '#F97316',
    letter: 'HC',
  },
  {
    name: 'Credify India',
    role: 'Verification API Solutions',
    desc: 'Digital onboarding APIs, KYC tools, KYB solutions, banking verification APIs, and compliance APIs to automate verification processes at scale.',
    tag: 'API & Tech',
    accent: '#10B981',
    letter: 'CI',
    logo: '/Credify-Logo2.png',
  },
  {
    name: 'Truering',
    role: 'Telecalling CRM Solutions',
    desc: 'Inbound/outbound calling CRM, cloud phone systems, lead tracking, auto dialers, and communication tools for sales and customer teams.',
    tag: 'CRM & Telecalling',
    accent: '#8B5CF6',
    letter: 'TR',
    logo: '/TrueRing-Logo2.png',
  },
]


export function BrightoEcosystem() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="ecosystem" className="py-12 lg:py-16 bg-white relative overflow-hidden">

      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Base grid lines */}
        <svg className="w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="eco-grid-lines" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0F172A" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eco-grid-lines)" />
        </svg>

        {/* Dot grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="eco-dots" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.2" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eco-dots)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-125 h-75 rounded-full blur-[120px] opacity-[0.07] bg-blue-500 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-62.5 rounded-full blur-[100px] opacity-[0.06] bg-orange-400 pointer-events-none" />

      {/* Floating animated grid boxes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '6%', left: '4%', size: 90, delay: '0s', dur: '7s' },
          { top: '10%', right: '6%', size: 65, delay: '1.2s', dur: '9s' },
          { top: '55%', left: '2%', size: 110, delay: '2.1s', dur: '6s' },
          { top: '65%', right: '4%', size: 75, delay: '0.6s', dur: '8s' },
          { top: '35%', left: '10%', size: 55, delay: '3s', dur: '10s' },
          { top: '25%', right: '12%', size: 85, delay: '1.8s', dur: '7s' },
          { top: '80%', left: '20%', size: 50, delay: '0.9s', dur: '11s' },
          { top: '5%', left: '45%', size: 70, delay: '2.5s', dur: '8s' },
        ].map((box, i) => (
          <div
            key={i}
            className="absolute border border-slate-300/40 rounded-xl eco-float"
            style={{
              top: box.top,
              left: (box as any).left,
              right: (box as any).right,
              width: box.size,
              height: box.size,
              animationDelay: box.delay,
              animationDuration: box.dur,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-900/20 bg-blue-900/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
            <span className="text-xs font-bold text-blue-900 tracking-widest uppercase">Business Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Our Business Solutions Ecosystem
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            To meet specific business needs, Brighto India offers special solution groups covering verification, technology, warehouse checks, and customer contact — each powered by a dedicated platform.
          </p>
        </div>

        {/* SVG Network Visualization */}
        <div className="relative w-full max-w-3xl mx-auto h-80 sm:h-105 mb-12 flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="eco-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#091C8C" floodOpacity="0.10" />
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.06" />
              </filter>

              <linearGradient id="beam-grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#091C8C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beam-grad-tr" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#091C8C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beam-grad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#091C8C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beam-grad-br" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#091C8C" stopOpacity="0" />
              </linearGradient>

              {/* Center node gradient */}
              <radialGradient id="center-grad" cx="50%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#091C8C" />
              </radialGradient>
            </defs>

            {/* Connection base lines */}
            <path d="M 155,85 L 400,200" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 645,85 L 400,200" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 155,315 L 400,200" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 645,315 L 400,200" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

            {/* Animated beams */}
            <path d="M 155,85 L 400,200" stroke="url(#beam-grad-tl)" strokeWidth="3" strokeLinecap="round" className="beam-flow" />
            <path d="M 645,85 L 400,200" stroke="url(#beam-grad-tr)" strokeWidth="3" strokeLinecap="round" className="beam-flow" style={{ animationDelay: '0.7s' }} />
            <path d="M 155,315 L 400,200" stroke="url(#beam-grad-bl)" strokeWidth="3" strokeLinecap="round" className="beam-flow" style={{ animationDelay: '1.4s' }} />
            <path d="M 645,315 L 400,200" stroke="url(#beam-grad-br)" strokeWidth="3" strokeLinecap="round" className="beam-flow" style={{ animationDelay: '2.1s' }} />

            {/* Center Node */}
            <g>
              <circle cx="400" cy="200" r="74" fill="none" stroke="#091C8C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25" className="eco-spin-slow" style={{ transformOrigin: '400px 200px' }} />
              <circle cx="400" cy="200" r="66" fill="none" stroke="#091C8C" strokeWidth="1" opacity="0.15" />
              <circle cx="400" cy="200" r="58" fill="#091C8C" opacity="0.08" className="animate-pulse" />
              <circle cx="400" cy="200" r="50" fill="#FFFFFF" stroke="#091C8C" strokeWidth="2" filter="url(#eco-shadow)" />
              <image
                href="/Brighto-Logo.png"
                x="355"
                y="180"
                width="90"
                height="40"
                preserveAspectRatio="xMidYMid meet"
              />

            </g>

            {/* Surrounding nodes */}
            {[
              { cx: 155, cy: 85, label: 'Crediscout', sub: 'Background', accent: '#3B82F6', logo: '/CrediScout-Logo2.png' },
              { cx: 645, cy: 85, label: 'Hubcheck', sub: 'Warehouse', accent: '#F97316' },
              { cx: 155, cy: 315, label: 'Credify', sub: 'APIs', accent: '#10B981', logo: '/Credify-Logo2.png' },
              { cx: 645, cy: 315, label: 'Truering', sub: 'CRM', accent: '#8B5CF6', logo: '/TrueRing-Logo2.png' },
            ].map((node, idx) => (
              <g key={idx} className="cursor-pointer group">
                {/* Outer ring pulse */}
                <circle cx={node.cx} cy={node.cy} r="58" fill="none" stroke={node.accent} strokeWidth="1" opacity="0.2" className="animate-pulse" style={{ animationDelay: `${idx * 0.5}s` }} />
                {/* Main node */}
                <circle cx={node.cx} cy={node.cy} r="48" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#eco-shadow)" />
                {/* Accent top arc */}
                <path
                  d={`M ${node.cx - 30} ${node.cy - 37} A 48 48 0 0 1 ${node.cx + 30} ${node.cy - 37}`}
                  fill="none"
                  stroke={node.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                {node.logo ? (
                  <image
                    href={node.logo}
                    x={node.cx - 42}
                    y={node.cy - 21}
                    width="84"
                    height="42"
                    preserveAspectRatio="xMidYMid meet"
                  />
                ) : (
                  <>
                    <text x={node.cx} y={node.cy + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A" fontFamily="var(--font-manrope)">{node.label}</text>
                    <text x={node.cx} y={node.cy + 21} textAnchor="middle" fontSize="11" fontWeight="500" fill={node.accent} fontFamily="var(--font-manrope)">{node.sub}</text>
                  </>
                )}
              </g>
            ))}
          </svg>

          <style>{`
            @keyframes ecoSpinSlow {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            .eco-spin-slow { animation: ecoSpinSlow 22s linear infinite; }

            @keyframes beamFlow {
              0%   { stroke-dashoffset: 320; }
              100% { stroke-dashoffset: 0; }
            }
            .beam-flow {
              stroke-dasharray: 80 240;
              animation: beamFlow 2.2s linear infinite;
            }

            @keyframes ecoFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
              40%       { transform: translateY(-14px) rotate(1.5deg); opacity: 0.8; }
              70%       { transform: translateY(-7px) rotate(-1deg); opacity: 0.6; }
            }
            .eco-float { animation: ecoFloat ease-in-out infinite; }
          `}</style>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ecosystem.map((item, idx) => {
            const isHovered = hovered === idx
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl border p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 overflow-hidden bg-white"
                style={{
                  borderColor: isHovered ? `${item.accent}50` : '#e2e8f0',
                  boxShadow: isHovered
                    ? `0 0 0 1px ${item.accent}25, 0 12px 36px ${item.accent}14`
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at 30% 0%, ${item.accent}10, transparent 65%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-5 right-5 h-px transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-2">
                  {item.logo ? (
                    <div
                      className="w-16 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 bg-white border border-slate-200/80 p-1.5 shadow-sm group-hover:border-blue-200"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={60}
                        height={30}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300 shrink-0"
                      style={{
                        background: isHovered ? item.accent : `${item.accent}15`,
                        border: `1px solid ${item.accent}${isHovered ? 'ff' : '35'}`,
                        color: isHovered ? '#fff' : item.accent,
                      }}
                    >
                      {item.letter}
                    </div>
                  )}
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full border"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}30`,
                      background: `${item.accent}08`,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col gap-1.5 flex-1">
                  <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                  <p className="text-xs font-semibold" style={{ color: item.accent }}>{item.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                <p className="relative z-10 text-[10px] text-slate-400 border-t border-slate-100 pt-3 mt-auto">
                  Powered by {item.name}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
