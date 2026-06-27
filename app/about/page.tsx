import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export const metadata: Metadata = {
  title: 'About Brighto India | Verification, Risk & Technology Solutions',
  description:
    'Learn about Brighto India, a trusted verification, risk management, and technology partner serving banks, NBFCs, fintech companies, and enterprises across India since 2015.',
  alternates: { canonical: '/about' },
}

const STATS = [
  { value: '2015', label: 'Founded', sub: 'A decade of steady growth' },
  { value: '500K+', label: 'Cases Supported', sub: 'Across India and beyond' },
  { value: 'PAN-India', label: 'Coverage', sub: 'Field teams and partner reach' },
  { value: '3', label: 'Certifications', sub: 'ISO 27001, ISO 9001, SOC 2' },
]

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Trust and Compliance',
    desc: 'We keep security, process discipline, and audit readiness at the center of every engagement.',
    color: '#091C8C',
    bg: '#eef2ff',
    border: '#c7d2fe',
  },
  {
    icon: Users,
    title: 'Human-led Verification',
    desc: 'Experienced teams handle field work, document checks, and review support with care and consistency.',
    color: '#0f766e',
    bg: '#f0fdfa',
    border: '#99f6e4',
  },
  {
    icon: Globe2,
    title: 'Pan-India Execution',
    desc: 'Our operating network supports cases across cities, towns, and remote locations with the same quality bar.',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    icon: FileCheck,
    title: 'Structured Reporting',
    desc: 'We deliver clear, decision-ready outputs so clients can move faster without losing control of detail.',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
  },
  {
    icon: Target,
    title: 'Risk Intelligence',
    desc: 'Our work is designed to surface inconsistencies, strengthen review processes, and reduce avoidable risk.',
    color: '#b91c1c',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    icon: Handshake,
    title: 'Partnership Mindset',
    desc: 'We stay close to client workflows and tailor engagement models to each team, portfolio, and use case.',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
]

const JOURNEY = [
  {
    step: '01',
    title: 'Understand the need',
    desc: 'We begin by mapping the client objective, the case type, and the exact review rules that need support.',
  },
  {
    step: '02',
    title: 'Assign the right team',
    desc: 'Cases are routed to the right people, geography, and workflow so each assignment is handled efficiently.',
  },
  {
    step: '03',
    title: 'Verify, investigate, and review',
    desc: 'Our teams perform ground checks, document validation, and structured quality review before reporting results.',
  },
  {
    step: '04',
    title: 'Deliver decision-ready output',
    desc: 'Clients receive concise findings that can be used directly in lending, compliance, or internal assessment steps.',
  },
]

const SERVICES = [
  'Due Diligence',
  'Loan Application Verification',
  'Field Investigation (FI)',
  'Contact Point Verification (CPV)',
  'RCU Support',
  'Document Verification',
  'Fraud Risk Assessment',
  'Credit Appraisal Support',
]

const INDUSTRIES = [
  'Banking',
  'NBFCs',
  'Housing Finance',
  'Fintech',
  'Insurance',
  'Microfinance',
  'Manufacturing',
  'Logistics',
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef5ff] via-white to-[#fff8f0]" />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: '#93c5fd' }} />
        <div className="absolute top-16 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#f97316' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: '#818cf8' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-900 font-semibold">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-[0.24em]">
                <Sparkles className="w-3.5 h-3.5" />
                About Brighto India
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.04]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Built to make verification faster, clearer, and more reliable.
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Since 2015, Brighto India has supported banks, NBFCs, fintech firms, and enterprises with structured verification, risk review, and technology-enabled operations. We help teams move with confidence by turning complex checks into clean, usable outcomes.
                </p>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Our approach combines experienced people, field execution, and disciplined reporting. That mix lets us handle everything from contact point checks and loan application verification to fraud risk assessment, document review, and credit appraisal support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-950 transition-all hover:shadow-lg">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/due-diligence" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-900 font-semibold hover:bg-white hover:shadow-sm transition-all">
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm">
                    <div className="text-2xl font-black text-slate-950">{stat.value}</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 row-span-2 rounded-[2rem] overflow-hidden shadow-2xl border border-white/70 min-h-[420px] relative">
                  <Image
                    src="/corporate-boardroom.jpg"
                    alt="Brighto India team in a boardroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-blue-900 shadow-sm">
                      ISO 27001 - ISO 9001 - SOC 2 Audited
                    </div>
                  </div>
                </div>
                <div className="col-span-5 rounded-[1.5rem] overflow-hidden shadow-xl border border-white/70 min-h-[200px] relative">
                  <Image
                    src="/about-indian-professional.jpg"
                    alt="Professional representing Brighto India"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                  />
                </div>
                <div className="col-span-5 rounded-[1.5rem] overflow-hidden shadow-xl border border-white/70 min-h-[200px] relative">
                  <Image
                    src="/team-analysis.jpg"
                    alt="Brighto India team analyzing data"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 sm:-left-8 bg-slate-950 text-white rounded-2xl p-5 shadow-2xl max-w-xs border border-slate-800">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-2">Our Promise</p>
                <p className="text-sm leading-relaxed text-slate-200">
                  We combine trust, speed, and structured execution so clients can review cases with less noise and more confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-[0.24em]">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                A practical partner for risk, verification, and operations teams.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Brighto India was built for teams that need real answers, not just data. Our work supports decision makers who want verified information, structured field inputs, and outputs that are easy to understand and act on.
                </p>
                <p>
                  Over time, we expanded beyond core verification into a broader ecosystem of services that includes due diligence, field investigation, loan application verification, contact point verification, RCU support, document verification, fraud risk assessment, and credit appraisal support.
                </p>
                <p>
                  That broader capability means one partner can support multiple layers of review, making delivery simpler for clients while keeping standards high.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-7 shadow-sm">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.24em] mb-4">Core Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <BadgeCheck className="w-4 h-4 text-blue-900 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-[0.24em]">What Defines Us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                The principles that shape every engagement.
              </h2>
            </div>
            <p className="text-slate-600 max-w-xl leading-relaxed">
              Our services are designed to be operationally useful, audit-friendly, and consistent across teams, territories, and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="rounded-[1.75rem] border p-6 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: pillar.bg, borderColor: pillar.border }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm border" style={{ borderColor: pillar.border }}>
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #f97316 0%, transparent 40%), radial-gradient(circle at bottom left, #3b82f6 0%, transparent 35%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-[0.24em]">How We Work</p>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                A clear workflow built for accuracy and speed.
              </h2>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                We keep the process simple for clients: understand the requirement, assign the case, verify the facts, review the output, and deliver a clean report. That structure keeps communication tight and results dependable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {INDUSTRIES.map((industry) => (
                  <div key={industry} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {JOURNEY.map((item, idx) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-orange-400 tracking-[0.24em]">STEP {item.step}</span>
                    <span className="text-xs text-slate-400">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[360px] border border-slate-200">
              <Image
                src="/consulting-expert.jpg"
                alt="Brighto India consulting expert"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/90 backdrop-blur p-4 text-slate-950">
                    <div className="text-2xl font-black">ISO 27001</div>
                    <div className="text-xs font-semibold text-slate-600 mt-1">Information security focus</div>
                  </div>
                  <div className="rounded-2xl bg-white/90 backdrop-blur p-4 text-slate-950">
                    <div className="text-2xl font-black">SOC 2</div>
                    <div className="text-xs font-semibold text-slate-600 mt-1">Data protection and controls</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-[0.24em]">Certifications and Controls</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Governance that gives clients confidence.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto India operates with a clear commitment to information security, quality management, and data protection. Those standards are not add-ons; they shape how we handle every case, every report, and every client relationship.
              </p>
              <div className="space-y-3">
                {[
                  'ISO 27001 Certified - Information Security',
                  'ISO 9001 Certified - Quality Management',
                  'SOC 2 Audited - Data Protection',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 bg-slate-50">
                    <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-950 transition-all hover:shadow-lg">
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/fraud-risk-assessment" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition-all">
                  View Risk Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
