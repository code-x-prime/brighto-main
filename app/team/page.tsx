import type { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowRight, IconSparkles, IconUsers, IconBuilding, IconWorld } from '@tabler/icons-react'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'
import { BrightoTeamGrid } from '@/components/brighto-team'

export const metadata: Metadata = {
  title: 'Our Team | Brighto India',
  description:
    'Meet the team behind Brighto India — the founders and leaders driving verification, risk management, and technology solutions for banks, NBFCs, fintechs, and enterprises across India.',
  alternates: { canonical: '/team' },
}

const HIGHLIGHTS = [
  { icon: IconUsers, label: 'Leadership Team', value: '4' },
  { icon: IconBuilding, label: 'Founded', value: '2015' },
  { icon: IconWorld, label: 'Operations', value: 'Pan-India' },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef5ff] via-white to-[#fff8f0]" />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: '#93c5fd' }} />
        <div className="absolute top-16 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#f97316' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: '#818cf8' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-900 font-semibold">Our Team</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-[0.24em] mb-6">
                <IconSparkles className="w-3.5 h-3.5" />
                Our Experts
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.04] mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
                Meet the Brilliant Minds Behind Brighto
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                A team of experienced leaders driving verification, risk intelligence, and technology-led operations for banks, NBFCs, fintechs, and enterprises across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-950 transition-all hover:shadow-lg">
                  Talk to Our Team
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-900 font-semibold hover:bg-white hover:shadow-sm transition-all">
                  About Brighto India
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm text-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-slate-950">{item.value}</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <BrightoTeamGrid />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.1] bg-blue-600 pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-[0.1] bg-orange-500 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            Want to work with our team?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Whether you're exploring a partnership or a career at Brighto India, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all hover:shadow-lg">
              Get in Touch
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/career" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
              View Careers
            </Link>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
