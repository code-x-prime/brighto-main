import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'
import {
  ArrowRight, CheckCircle2, Shield, Briefcase,
  Building2, Landmark, Cpu, Users, Package,
  ClipboardList, FileCheck, BarChart3, Home, Search,
  FileText, AlertTriangle,
} from 'lucide-react'
import { FAQAccordion } from '@/components/faq-accordion'

export const metadata: Metadata = {
  title: 'Risk Containment Unit (RCU) Support Services India | Brighto India',
  description:
    'Brighto India provides structured Risk Containment Unit (RCU) Support Services for banks, NBFCs & lenders — field investigation, verification, document review & reporting. ISO 27001 | ISO 9001 | SOC 2 Audited.',
  keywords: [
    'RCU support services India', 'risk containment unit support', 'RCU verification',
    'field investigation RCU', 'bank RCU services', 'NBFC RCU support',
    'Brighto India RCU', 'loan verification RCU India',
  ],
  alternates: { canonical: '/services/rcu-support' },
  openGraph: {
    title: 'Risk Containment Unit (RCU) Support Services India | Brighto India',
    description: 'Structured RCU Support Services for banks, NBFCs & lenders since 2015. ISO 27001 | ISO 9001 | SOC 2 Audited.',
    url: 'https://www.brightoindia.com/services/rcu-support',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const RCU_SERVICES = [
  {
    icon: Search,
    title: 'Field Investigation Support',
    desc: 'Help meet information validation requirements by following organized field visit and written report steps.',
    color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe',
  },
  {
    icon: AlertTriangle,
    title: 'Exception Case Review',
    desc: 'Independent review support for situations requiring additional verification, investigation, and assessment.',
    color: '#dc2626', bg: '#fef2f2', border: '#fecaca',
  },
  {
    icon: Home,
    title: 'Residence Verification',
    desc: 'Confirm the home address using structured verification steps that support review and assessment work.',
    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    icon: Briefcase,
    title: 'Office Verification',
    desc: 'Help confirm job details through separate, independent verification steps and reporting systems.',
    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0',
  },
  {
    icon: Building2,
    title: 'Business Verification',
    desc: 'Check business details with careful verification and investigation activities.',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
  },
  {
    icon: CheckCircle2,
    title: 'Information Validation Support',
    desc: 'Build stronger review systems with structured information validation and assessment support services.',
    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe',
  },
  {
    icon: FileText,
    title: 'Document Review Support',
    desc: 'Help the company review processes by checking and validating the papers people submit.',
    color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4',
  },
  {
    icon: FileCheck,
    title: 'Verification Reporting',
    desc: 'Get clear reports with final results and backup details ready for review.',
    color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe',
  },
]

const RCU_INCLUDES = [
  'Field Investigation Support',
  'Residence Verification',
  'Office Verification',
  'Business Verification',
  'Information Validation',
  'Document Review Support',
  'Exception Case Assessment',
  'Verification Reporting',
]

const WHY_MATTERS = [
  {
    title: 'Improve Information Visibility',
    desc: 'Independent verification steps give groups a better view of the details that need review.',
  },
  {
    title: 'Strengthen Review Frameworks',
    desc: 'Planned RCU help leads to independent verification and assessment steps.',
  },
  {
    title: 'Support Risk Assessment Activities',
    desc: 'Checking results and notes can help groups in their own review and evaluation steps.',
  },
  {
    title: 'Enhance Information Validation',
    desc: 'Independent investigations corroborate the details provided in daily work and loan steps.',
  },
  {
    title: 'Improve Operational Consistency',
    desc: 'Defined methodologies keep review, check, and report steps consistent across the board.',
  },
]

const WHY_BRIGHTO = [
  {
    title: 'Financial Services Expertise',
    desc: 'Brighto India helps banks, NBFCs, housing finance companies, fintech groups, and other finance organizations with specialized verification and investigation services.',
  },
  {
    title: 'Process-Driven Investigation Support',
    desc: 'Our RCU services use established methods that ensure consistency, transparency, and high-quality reporting.',
  },
  {
    title: 'Experienced Verification Network',
    desc: 'We combine operational expertise with field investigation skills spread over multiple places.',
  },
  {
    title: 'Secure & Compliance-Focused Operations',
    desc: 'Our processes are supported by solid data safety, quality rules, and daily controls.',
  },
  {
    title: 'Structured Reporting Framework',
    desc: 'Check notes go into clear report formats that feed company review steps.',
  },
  {
    title: 'Pan-India Operational Reach',
    desc: 'Our check network gives help across different areas and work settings.',
  },
]

const INDUSTRIES = [
  { icon: Landmark,   label: 'Banking',                    desc: 'Verification and investigation support for the loan and customer review steps.' },
  { icon: Building2,  label: 'NBFCs',                      desc: 'Planned RCU support services that match lending and daily review needs.' },
  { icon: Home,       label: 'Housing Finance Companies',  desc: 'Data confirmation and investigation help for housing loan review flows.' },
  { icon: Cpu,        label: 'Fintech Companies',          desc: 'Check services that back digital loans and customer review steps.' },
  { icon: Users,      label: 'Microfinance Institutions',  desc: 'Field investigation and verification support shaped for daily needs.' },
  { icon: Package,    label: 'Consumer Lending Companies', desc: 'Independent verification services that back assessment and review work.' },
]

const PROCESS_STEPS = [
  { num: '01', icon: ClipboardList, title: 'Requirement Assessment',      desc: 'Learning the review goals, limits, and daily needs.' },
  { num: '02', icon: Briefcase,     title: 'Case Assignment',             desc: 'Sending out cases through structured daily workflows.' },
  { num: '03', icon: Search,        title: 'Verification & Investigation', desc: 'Running verification activities, field investigations, and information validation processes.' },
  { num: '04', icon: CheckCircle2,  title: 'Quality Review',              desc: 'Going over gathered details with end to end quality review steps.' },
  { num: '05', icon: BarChart3,     title: 'Assessment & Documentation',  desc: 'Putting together notes, back-up details, and investigation results.' },
  { num: '06', icon: FileCheck,     title: 'Reporting',                   desc: 'Giving organized reports for the client to review and judge.' },
]

const FAQS = [
  {
    q: 'What is Risk Containment Unit (RCU) Support?',
    a: 'RCU Support covers structured verification, investigation, and information validation activities that support groups during risk review and assessment.',
  },
  {
    q: 'Which organizations use RCU Support Services?',
    a: 'Banks, NBFCs, housing finance companies, fintech groups, and other finance organizations often use RCU support services.',
  },
  {
    q: 'What services are included in RCU Support?',
    a: 'RCU Support can cover field investigations, residence verification, office verification, business verification, document review support, information validation, and reporting services.',
  },
  {
    q: 'Does Brighto India provide field investigation services?',
    a: 'Yes. Brighto India gives field investigation and verification support services built to help organizations in the review and assessment steps.',
  },
  {
    q: 'How does RCU Support help financial institutions?',
    a: 'RCU Support provides independently verified information and documented observations to help organizations with their own review and assessment work.',
  },
  {
    q: 'Does Brighto India offer pan-India RCU Support?',
    a: 'Yes. Brighto India fulfills support verification and investigation requirements across multiple locations through its operational network.',
  },
  {
    q: "How can I get started with Brighto India's RCU Support Services?",
    a: 'Reach out to our team to discuss your verification requirements, assessment goals, and daily needs. We will suggest the right help plan based on your limits and needs.',
  },
]

export default function RCUSupportPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-28 sm:pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg,#fef2f2 0%,#fff7ed 35%,#ffffff 70%,#eef2ff 100%)' }} />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rcu-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FECACA" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rcu-grid)" opacity="0.65" />
          </svg>
          <div className="absolute w-150 h-150 rounded-full blur-[130px] opacity-20 -top-24 -right-24" style={{ background: '#fca5a5' }} />
          <div className="absolute w-100 h-100 rounded-full blur-[100px] opacity-15 bottom-0 left-0" style={{ background: '#fed7aa' }} />
          <div className="absolute w-100 h-100 rounded-full blur-[100px] opacity-10 top-1/3 left-1/3" style={{ background: '#c7d2fe' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-blue-900 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">RCU Support Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-200 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">RCU Support Since 2015</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
                Risk Containment Unit{' '}
                <span className="text-blue-900">(RCU) Support</span>{' '}
                Services
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6">
                for Stronger Risk Assessment Processes
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Lending teams sometimes face unclear details, missing checks, and special situations that need extra attention. Brighto India offers Risk Containment Unit (RCU) Support Services to help banks and lenders with structured verification, investigation, information validation, and reporting support.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-950 transition-all hover:shadow-xl hover:-translate-y-0.5">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-7 py-3.5 border-2 border-blue-900 text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                  Contact Our Team
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {['ISO 27001 Certified', 'ISO 9001 Certified', 'SOC 2 Audited'].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2015',      label: 'Serving Since',   sub: 'Decade of RCU expertise',      color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
                { val: '500K+',     label: 'Cases Supported', sub: 'Across India',                  color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
                { val: 'Pan-India', label: 'Field Coverage',  sub: 'Multi-geography network',       color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
                { val: '3 Certs',   label: 'ISO + SOC 2',     sub: 'Internationally audited',       color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 border" style={{ background: s.bg, borderColor: s.border }}>
                  <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-sm font-bold text-slate-800">{s.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">About Brighto India</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Trusted RCU Support Partner Since 2015
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600 leading-relaxed text-base">
              <p>
                Since 2015, Brighto India has worked with banks, NBFCs, housing finance companies, fintech companies, and similar groups by providing structured Risk Containment Unit (RCU) Support Services that improve risk review and assessment processes.
              </p>
              <p>
                Our team has extensive experience in due diligence, loan application verification, contact point verification, field investigation, and information validation, helping organizations build consistent verification and assessment frameworks.
              </p>
              <p>
                As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, Brighto India follows established standards for information security, quality management, and data protection while delivering structured verification, investigation, and assessment support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STRENGTHEN / WHAT IS RCU
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Strengthen Risk Frameworks</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Strengthen Risk Review Frameworks Through RCU Support Services
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Banks and lenders work in a world where information accuracy and structured review processes really matter. Some situations call for additional verification, investigation, or assessment support before they move ahead in company systems.
                </p>
                <p>
                  Brighto India&apos;s Risk Containment Unit (RCU) Support Services give organizations help through structured verification activities, field investigations, information validation, and assessment-driven reporting. These services help financial lenders to go over the submitted details, evaluate the reports, and build stronger internal verification processes with independent investigation support.
                </p>
                <p>
                  No matter if we help banks, NBFCs, housing finance companies, fintech lenders, or other finance groups, our team provides process-oriented RCU support that fits exactly what the daily operations need.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Risk Containment Unit (RCU) Support?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>
                  Risk Containment Unit (RCU) Support refers to structured verification, investigation, and information validation activities that assist financial groups through the risk review and assessment steps.
                </p>
                <p>
                  Companies often turn to RCU support services for additional validation, field investigations, document reviews, or assessment support for specific files. The goal is to provide clear, verified details and written information that feed into company review systems.
                </p>
                <p>
                  These steps help groups strengthen their review methods and back up decisions with solid data.
                </p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">RCU Support may include:</p>
              <ul className="space-y-2.5">
                {RCU_INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR RCU SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Our Risk Containment Unit (RCU) Support Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RCU_SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="rounded-2xl border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer" style={{ background: svc.bg, borderColor: svc.border }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: svc.color }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Need a custom RCU support plan?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Our experts will assess your requirements and recommend the right verification and investigation approach for your organization.</p>
            </div>
            <button className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY RCU MATTERS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why RCU Support Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Steps included in risk reviews often need independent verification, additional detail, and investigative support to strengthen internal assessment systems.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div key={item.title} className={`rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`}>
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center text-xs font-black mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY BRIGHTO
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Why Choose Brighto India for RCU Support Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 flex items-center justify-center font-black text-sm mb-5 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ind-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ind-grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">Sectors We Cover</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Industries We Serve
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Brighto India provides RCU Support Services across financial sectors where risk review and verification are critical.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-blue-700 hover:bg-slate-900 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-900/50 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:border-blue-900 transition-all">
                    <Icon className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white mb-1">{ind.label}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{ind.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Our RCU Support Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-sm shrink-0">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FRAMEWORK DISCLAIMER
      ══════════════════════════════════════════ */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-200 border border-amber-300 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Our Assessment Framework</p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Brighto India&apos;s Risk Containment Unit (RCU) Support Services are conducted based on the information available at the time of assessment and within the agreed scope of work. Verification findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside internal risk policies, assessment criteria, and decision-making frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Discuss Your Requirements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let&apos;s Discuss Your Verification &amp; Investigation Requirements
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Whether you need field investigation support, residence verification, office verification, business verification, exception case reviews, or information validation services, our team can suggest a good plan that fits your daily work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-bold text-base transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </div>
  )
}
