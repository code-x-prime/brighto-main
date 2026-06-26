import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import {
  ArrowRight, CheckCircle2, Shield, Briefcase,
  Building2, Landmark, Cpu, HeartPulse, Users, Package,
  ClipboardList, FileCheck, BarChart3, Home, Search,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: 'Contact Point Verification (CPV) Services India | Brighto India',
  description:
    'Brighto India provides structured Contact Point Verification (CPV) Services since 2015 — residence, office, business & contact validation across India. ISO 27001 | ISO 9001 | SOC 2 Audited.',
  keywords: [
    'contact point verification services India', 'CPV services', 'residence verification',
    'office verification', 'business verification', 'field verification India',
    'Brighto India CPV', 'NBFC CPV services', 'bank contact point verification',
    'ISO 27001 CPV company India',
  ],
  alternates: { canonical: '/services/contact-point-verification' },
  openGraph: {
    title: 'Contact Point Verification (CPV) Services India | Brighto India',
    description: 'Structured CPV services for banks, NBFCs, fintechs & enterprises since 2015. ISO 27001 | ISO 9001 | SOC 2 Audited.',
    url: 'https://www.brightoindia.com/services/contact-point-verification',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const CPV_SERVICES = [
  {
    icon: 'Home',
    title: 'Residence Verification',
    desc: 'Support residential information validation through structured residence verification activities and reporting processes. Brighto India offers structured residence verification to support data confirmation and review needs.',
    color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe',
  },
  {
    icon: 'Briefcase',
    title: 'Office Verification',
    desc: 'Employment-related information often requires independent validation. Our office verification services support information review through structured verification procedures.',
    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    icon: 'Building2',
    title: 'Business Verification',
    desc: 'Validate business-related information through structured verification activities designed to support onboarding, review, and assessment requirements.',
    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0',
  },
  {
    icon: 'Phone',
    title: 'Contact Information Verification',
    desc: "Brighto India helps organizations verify applicants' contact details using proven verification steps and reporting methods.",
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
  },
  {
    icon: 'Search',
    title: 'Field Verification Support',
    desc: 'Support information validation requirements through field-based verification activities conducted using structured operational processes and documentation standards.',
    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe',
  },
  {
    icon: 'FileCheck',
    title: 'Verification Reporting',
    desc: 'Our reporting system provides documented verification, observations, and supporting information to help organizations with their internal review and assessment work.',
    color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4',
  },
]

const CPV_INCLUDES = [
  'Residence Verification',
  'Office Verification',
  'Business Verification',
  'Contact Information Validation',
  'Field Verification Activities',
  'Verification Reporting',
  'Information Assessment Support',
]

const WHY_MATTERS = [
  {
    title: 'Improved Information Validation',
    desc: 'Planned verification steps help organizations confirm details given during new account setup and review flows.',
  },
  {
    title: 'Enhanced Review Processes',
    desc: 'Contact Point Verification leads to steadier review and judgment steps.',
  },
  {
    title: 'Better Information Visibility',
    desc: 'Independent verification provides additional visibility into applicant-provided information and supporting details.',
  },
  {
    title: 'Support for Assessment Activities',
    desc: 'Verification observations may assist organizations during internal review and assessment processes.',
  },
  {
    title: 'Consistent Verification Frameworks',
    desc: 'Set verification steps help maintain steady work across daily operations.',
  },
]

const WHY_BRIGHTO = [
  {
    title: 'BFSI-Focused Expertise',
    desc: 'Brighto India helps banks, housing finance companies, NBFCs, fintech organizations, and insurance providers with organized verification services.',
  },
  {
    title: 'Process-Driven Verification',
    desc: 'Our Contact Point Verification Services use proven daily steps built to keep work steady and reports accurate.',
  },
  {
    title: 'Experienced Verification Network',
    desc: 'We combine operational expertise with field verification capabilities across multiple locations.',
  },
  {
    title: 'Secure & Compliance-Oriented',
    desc: 'Our check steps rest on solid data safety, quality rules, and daily controls.',
  },
  {
    title: 'Structured Reporting Methodology',
    desc: 'Verification findings are documented through organized reporting formats that support internal review activities.',
  },
  {
    title: 'Pan-India Verification Support',
    desc: 'Our operational network enables verification support across multiple geographies and business environments.',
  },
]

const INDUSTRIES = [
  { icon: Landmark,   label: 'Banking',                   desc: 'Verification support for lending, onboarding, and customer review processes.' },
  { icon: Building2,  label: 'NBFCs',                     desc: 'Structured CPV services to support customer validation and assessment requirements.' },
  { icon: Home,       label: 'Housing Finance Companies', desc: 'Verification support aligned with housing finance and mortgage-related workflows.' },
  { icon: Cpu,        label: 'Fintech Companies',         desc: 'CPV services supporting digital onboarding and customer review requirements.' },
  { icon: HeartPulse, label: 'Insurance Companies',       desc: 'Information validation support for policyholder and customer verification.' },
  { icon: Users,      label: 'Microfinance Institutions', desc: 'Field verification services supporting operational and assessment requirements.' },
  { icon: Package,    label: 'Enterprises',               desc: 'Verification solutions for onboarding, operational reviews, and business processes.' },
]

const PROCESS_STEPS = [
  { num: '01', icon: ClipboardList, title: 'Requirement Assessment',     desc: 'Understanding verification objectives, scope, and operational requirements.' },
  { num: '02', icon: Briefcase,     title: 'Case Assignment',            desc: 'Allocation of verification cases through structured operational workflows.' },
  { num: '03', icon: Search,        title: 'Verification Activities',    desc: 'Conducting verification procedures and field-based validation activities where required.' },
  { num: '04', icon: CheckCircle2,  title: 'Quality Review',             desc: 'Reviewing collected information through defined quality control procedures.' },
  { num: '05', icon: BarChart3,     title: 'Documentation & Assessment', desc: 'Compiling verification observations and supporting information.' },
  { num: '06', icon: FileCheck,     title: 'Reporting',                  desc: 'Providing structured verification reports for client review and evaluation.' },
]

const FAQS = [
  {
    q: 'What is Contact Point Verification (CPV)?',
    a: 'Contact Point Verification (CPV) is a structured verification process used to validate residential, office, business, or contact-related information provided by applicants, customers, borrowers, or businesses through independent verification activities and reporting procedures.',
  },
  {
    q: 'Who uses CPV Services?',
    a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, microfinance institutions, and enterprises commonly use Contact Point Verification Services as part of their verification, onboarding, and assessment processes.',
  },
  {
    q: 'What does a CPV process include?',
    a: 'The Contact Point Verification process may include residence verification, office verification, business verification, contact information validation, field verification, information assessment support, and verification reporting.',
  },
  {
    q: 'Does Brighto India provide field verification services?',
    a: "Yes. Brighto India provides field-based verification support as part of its Contact Point Verification Services, depending on the engagement's scope and operational requirements.",
  },
  {
    q: 'Can CPV Services support customer onboarding processes?',
    a: 'Yes. Structured Contact Point Verification Services may support information validation requirements within customer onboarding, lending, account opening, and assessment workflows.',
  },
  {
    q: 'How can I get started with Brighto India\'s CPV Services?',
    a: 'Contact our team to discuss your verification requirements, operational objectives, and service scope. We will recommend an appropriate verification approach aligned with your business and operational requirements.',
  },
]

export default function CPVPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="CPV Services Since 2015"
        title="One Stop Destination for"
        titleAccent="Contact Point Verification Services"
        description="Since 2015, Brighto India has supported financial institutions, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises through structured Contact Point Verification Services designed to strengthen information validation and review processes."
        primaryCta="Request Consultation"
        secondaryCta="Contact Our Team"
        accentColor="#0369a1"
        accentLight="#f0f9ff"
        accentBorder="#bae6fd"
        gridStroke="#BAE6FD"
        blob1="#7dd3fc"
        blob2="#a5f3fc"
        blob3="#818cf8"
        breadcrumb="Contact Point Verification"
        breadcrumbHref="/services/contact-point-verification"
        stats={[
          { val: '2015',      label: 'Serving Since',   sub: 'Decade of CPV expertise',   color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
          { val: '500K+',     label: 'Cases Verified',  sub: 'Across India',               color: '#0891b2', bg: '#f0fdfa', border: '#a5f3fc' },
          { val: 'Pan-India', label: 'Field Coverage',  sub: 'Multi-geography reach',      color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs',   label: 'ISO + SOC 2',     sub: 'Internationally audited',    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Introducing the Leading Contact Point Verification Services Expert
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>
                  Brighto India works with banks, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises by offering structured Contact Point Verification (CPV) Services that strengthen data checks and review processes.
                </p>
                <p>
                  We know due diligence, loan checks, field visits, and risk review support, so we help organizations set up reliable verification methods and reporting systems.
                </p>
                <p className="sm:col-span-2">
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited organization, Brighto India adheres to clear rules for data safety, quality work, and protection in all its verification work.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/consulting-expert.jpg"
                  alt="Brighto India CPV expert consulting"
                  width={600}
                  height={480}
                  className="w-full h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-900">
                    ISO 27001 · ISO 9001 · SOC 2 Audited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRANSFORM / WHAT IS CPV
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Transform Verification Confidence</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Transform Information into Verification Confidence with CPV Services
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Accurate information plays an important role in lending, onboarding, customer assessment, and review processes. Brighto India&apos;s Contact Point Verification Services help organizations strengthen information validation through structured verification methodologies, field-based verification activities, and organized reporting frameworks.
                  </p>
                  <p>
                    We support banks, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises in validating residential, office, business, and contact-related information through consistent verification processes and documented observations.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/team-analysis.jpg"
                  alt="Brighto India team analyzing verification data"
                  width={700}
                  height={320}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team · Pan-India Coverage</span>
                </div>
              </div>
            </div>

            {/* Dark card — What is CPV */}
            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Contact Point Verification (CPV)?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>
                  Contact Point Verification (CPV) is a planned process that verifies details provided by applicants, customers, borrowers, businesses, or other involved parties.
                </p>
                <p>
                  CPV aims to support data checks with independent verification activities and documented reporting. Organizations often turn to CPV services in lending, new customer setup, account starts, risk reviews, and business checks.
                </p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">A CPV process may involve:</p>
              <ul className="space-y-2.5">
                {CPV_INCLUDES.map((item) => (
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
          OUR CPV SERVICES
      ══════════════════════════════════════════ */}
      <ServiceOfferings
        heading="Our Contact Point Verification Services"
        services={CPV_SERVICES}
        accentColor="#0369a1"
        ctaText="Not sure which CPV service you need?"
        ctaDesc="Our experts will assess your verification requirements and recommend the right approach for your organization."
      />

      {/* ══════════════════════════════════════════
          WHY CPV MATTERS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why Contact Point Verification Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Correct details matter a lot in lending, onboarding, customer checks, and business review steps. Independent verification activities help organizations strengthen data checks and maintain consistent review steps.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`}
                  style={{
                    background: 'color-mix(in srgb, #f0f9ff 55%, white 45%)',
                    borderColor: '#bae6fd',
                    boxShadow: '0 2px 16px 0 #bae6fd88, inset 0 1px 0 rgba(255,255,255,0.8)',
                  }}
                >
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
              Why Choose Brighto India as Trusted Choice for CPV Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: 'color-mix(in srgb, #f0f9ff 50%, white 50%)',
                  borderColor: '#bae6fd',
                  boxShadow: '0 4px 24px -4px #bae6fd99, inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
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
              Brighto India provides Contact Point Verification Services across many areas where data checks are critical.
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
              Our Contact Point Verification Process
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
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Our Verification Framework</p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Brighto India's Contact Point Verification Services operate on the details provided when we perform the work and remain within the agreed limits. Verification findings, observations, and supporting information aim to assist client review processes and should be evaluated alongside internal policies, assessment criteria, and decision-making frameworks.
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
            <span className="text-xs font-bold text-white uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let&apos;s Strengthen Your Verification Process
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Whether you require residence verification, office verification, business verification, contact information validation, or field verification support, our team can recommend an appropriate verification approach aligned with your operational requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-bold text-base transition-all">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <BrightoFooter />
    </div>
  )
}
