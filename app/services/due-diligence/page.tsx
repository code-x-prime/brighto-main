import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import {
  ArrowRight, CheckCircle2, Shield, BarChart3,
  Users, Building2, Landmark, Cpu, HeartPulse, Package, ClipboardList,
  Briefcase, Microscope, FileCheck,
} from 'lucide-react'
import Link from 'next/link'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: "Due Diligence Services India | Brighto India – Verified Risk & Business Decisions",
  description:
    "Brighto India provides structured Due Diligence Services since 2015 — business, financial, customer, vendor & enterprise due diligence across India. ISO 27001 | ISO 9001 | SOC 2 Audited.",
  keywords: [
    'due diligence services India', 'business due diligence', 'financial due diligence',
    'vendor due diligence', 'customer due diligence', 'Brighto India due diligence',
    'certified due diligence company India', 'ISO 27001 due diligence',
  ],
  alternates: { canonical: '/services/due-diligence' },
  openGraph: {
    title: "Due Diligence Services India | Brighto India",
    description: "Structured Due Diligence Services since 2015 for banks, NBFCs, fintechs & enterprises. ISO 27001 | ISO 9001 | SOC 2 Audited.",
    url: 'https://www.brightoindia.com/services/due-diligence',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const DD_SERVICES = [
  {
    icon: 'Building2',
    title: 'Business Due Diligence',
    desc: 'Planning to engage a new business partner or supplier? Brighto India validates business information, operational details, and supporting documentation to support informed business decisions.',
    color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe',
  },
  {
    icon: 'BarChart3',
    title: 'Financial Due Diligence Support',
    desc: 'Reliable information is essential for financial review processes. Brighto India supports lenders and financial institutions through structured verification, document review, and assessment support.',
    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    icon: 'Users',
    title: 'Customer & Borrower Due Diligence',
    desc: 'Strengthen customer and borrower evaluation processes through structured verification and information validation services.',
    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0',
  },
  {
    icon: 'FileSearch',
    title: 'Vendor Due Diligence',
    desc: 'Want more trust before you work with a supplier or service provider? Brighto India confirms key details and documents before any business partnership.',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
  },
  {
    icon: 'Shield',
    title: 'Enterprise Due Diligence',
    desc: 'Strong governance, rule-following, and risk management require trustworthy information. Brighto India provides structured due diligence support for large-company review needs.',
    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe',
  },
]

const IMPORTANCE = [
  {
    title: 'Improve Decision-Making',
    desc: 'Independently verified information supports more informed business and financial decisions.',
  },
  {
    title: 'Strengthen Risk Visibility',
    desc: 'Organizations gain greater visibility into information that may require additional review.',
  },
  {
    title: 'Support Internal Review Processes',
    desc: 'Structured verification brings more consistency to internal review and assessment processes.',
  },
  {
    title: 'Enhance Governance Standards',
    desc: 'Due diligence adds to stronger governance, oversight, and risk management practices.',
  },
  {
    title: 'Reduce Information Gaps',
    desc: 'Independent validation helps identify inconsistencies or information gaps requiring further assessment.',
  },
]

const WHY_BRIGHTO = [
  {
    title: 'Verification-Led Approach',
    desc: 'Our due diligence process centers on independent checks and independent verification methodologies.',
  },
  {
    title: 'Investigation Expertise',
    desc: 'We bring together verification systems and field investigation skills to deliver deeper, more comprehensive reviews.',
  },
  {
    title: 'Industry-Focused Knowledge',
    desc: 'Years of work in BFSI, fintech, insurance, logistics, staffing, and enterprise sectors have given us a clear understanding of sector-specific verification and assessment requirements.',
  },
  {
    title: 'Structured Reporting Framework',
    desc: 'We deliver clear report formats that make it easy for clients to review the results and use them in their own decision-making.',
  },
  {
    title: 'Pan-India Operational Reach',
    desc: 'Our network of verifiers operates across multiple geographies, so companies can conduct due diligence at any scale.',
  },
  {
    title: 'Process-Oriented Execution',
    desc: 'Every job follows defined operational procedures meant to keep things consistent, open, and high-quality.',
  },
]

const INDUSTRIES = [
  { icon: Landmark,    label: 'Banking',                  desc: 'Help with lending, customer onboarding, verification, and risk review needs.' },
  { icon: Building2,   label: 'NBFCs & HFCs',             desc: 'Verification and due diligence work designed to strengthen lending and improve customer checks.' },
  { icon: Cpu,         label: 'Fintech Companies',        desc: 'Support for digital onboarding, verification, and risk handling flows.' },
  { icon: HeartPulse,  label: 'Insurance Companies',      desc: 'Verification help for customers, partners, and operational review processes.' },
  { icon: Users,       label: 'Microfinance Institutions', desc: 'Organized verification services that back up field-level assessment work.' },
  { icon: Package,     label: 'Manufacturing & Logistics', desc: 'Business checks and due diligence support for operations and supplier networks.' },
]

const PROCESS_STEPS = [
  { num: '01', icon: ClipboardList, title: 'Requirement Assessment',      desc: 'We get clear on the project scope, goals, and exact verification needs for each job.' },
  { num: '02', icon: Briefcase,     title: 'Information Collection',       desc: 'We pull together the relevant details and supporting documentation.' },
  { num: '03', icon: Microscope,    title: 'Verification & Investigation', desc: 'We carry out field checks, verification activities, and investigative work wherever needed.' },
  { num: '04', icon: CheckCircle2,  title: 'Quality Review',               desc: 'Teams go over all collected information using pre-defined quality steps.' },
  { num: '05', icon: BarChart3,     title: 'Risk Assessment',              desc: 'We review what we found and highlight information requiring further assessment.' },
  { num: '06', icon: FileCheck,     title: 'Reporting',                    desc: 'We hand over organized findings and documents to support client review and decision-making processes.' },
]

const WHAT_DD_HELPS = [
  'Validate critical information',
  'Support risk assessment processes',
  'Strengthen internal controls',
  'Improve decision-making confidence',
  'Identify inconsistencies or gaps in information',
  'Enhance verification and review frameworks',
  'Support compliance and governance objectives',
]

const FAQS = [
  {
    q: 'What are Due Diligence Services?',
    a: 'Due Diligence Services are structured verification, investigation, and information validation activities that help organizations review and validate information prior to significant business, financial, or operational decisions.',
  },
  {
    q: 'Who uses Due Diligence Services?',
    a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, enterprises, and other organizations use Due Diligence Services to support informed decision-making.',
  },
  {
    q: 'What types of due diligence does Brighto India provide?',
    a: 'Brighto India provides Business Due Diligence, Financial Due Diligence Support, Customer & Borrower Due Diligence, Vendor Due Diligence, and Enterprise Due Diligence services.',
  },
  {
    q: 'Is Brighto India certified for due diligence services?',
    a: 'Yes. Brighto India is ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited, reflecting our commitment to information security, quality management, and data protection.',
  },
  {
    q: 'Does Brighto India provide pan-India due diligence support?',
    a: 'Yes. Brighto India supports due diligence requirements across multiple locations and operational environments throughout India.',
  },
  {
    q: 'How can I get started with Brighto India\'s Due Diligence Services?',
    a: 'Reach out to our team to discuss your verification requirements, assessment goals, and operational needs. We will recommend the right approach based on your scope and objectives.',
  },
]

export default function DueDiligencePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Trusted Since 2015"
        title="India's Trusted"
        titleAccent="Due Diligence Services Partner"
        subtitle="for Smarter Risk & Business Decisions"
        description="Incomplete information and inconsistent verification can affect critical business decisions. Brighto India has been providing structured Due Diligence Services since 2015 that support information validation, risk assessment, and informed decision-making."
        primaryCta="Request Consultation"
        secondaryCta="Talk to Our Experts"
        accentColor="#091C8C"
        accentLight="#eef2ff"
        accentBorder="#c7d2fe"
        gridStroke="#BFDBFE"
        blob1="#93c5fd"
        blob2="#818cf8"
        blob3="#f97316"
        breadcrumb="Due Diligence Services"
        breadcrumbHref="/services/due-diligence"
        stats={[
          { val: '2015',      label: 'Serving Since',   sub: 'Decade of experience',     color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
          { val: '500K+',     label: 'Cases Verified',  sub: 'Across India',              color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
          { val: 'Pan-India', label: 'Coverage',        sub: 'Multi-geography reach',     color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs',   label: 'ISO + SOC 2',     sub: 'Internationally audited',   color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      {/* ══════════════════════════════════════════
          ABOUT BRIGHTO INDIA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">About Brighto India</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Your Due Diligence Partner in India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600 leading-relaxed text-base">
              <p>
                Brighto India supports financial institutions, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises through structured Due Diligence Services designed to strengthen information validation, business assessments, and risk review processes.
              </p>
              <p>
                Our expertise spans due diligence, field investigation, loan application verification, contact point verification, document verification, and credit appraisal support, helping organizations build consistent frameworks for verification and assessment.
              </p>
              <p>
                As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, Brighto India follows established standards for information security, quality management, and data protection across every due diligence engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BUILD CONFIDENCE
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Counts</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Build Confidence Before Every Critical Decision With Experts
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Every lending decision, business deal, customer signup, or supplier tie-up comes with some risk. Companies that rely solely on what people hand over can run into problems such as incorrect details, missing facts, day-to-day issues, or compliance concerns.
                </p>
                <p>
                  Brighto India supports organizations through structured Due Diligence Services designed to strengthen information validation, support risk assessment, and enhance internal review processes.
                </p>
                <p>
                  As a certified due diligence company in India, we help banks, NBFCs, housing finance companies, fintech platforms, insurance companies, and other businesses with clear verification and investigation work that fits their exact needs.
                </p>
                <p>
                  We combine on-the-ground checks, document reviews, fact-checking, risk support, and clear reports. This provides clients with independently verified information and documented observations to support internal review and decision-making processes.
                </p>
              </div>
            </div>

            {/* Dark card — What is DD */}
            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What Are Due Diligence Services?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>
                  Doing your due diligence involves reviewing, examining, and researching information before entering into a business partnership, approving a transaction, onboarding a new customer, choosing a supplier, or making a significant move.
                </p>
                <p>
                  The goal goes beyond just gathering papers. It means independently confirming the important parts and identifying information requiring further review or assessment.
                </p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Professional Due Diligence Services help organizations:</p>
              <ul className="space-y-2.5">
                {WHAT_DD_HELPS.map((item) => (
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
          OUR DD SERVICES
      ══════════════════════════════════════════ */}
      <ServiceOfferings
        heading="Our Due Diligence Services"
        services={DD_SERVICES}
        accentColor="#091C8C"
        ctaDesc="Our experts will assess your requirements and suggest the right due diligence approach for your organization."
      />

      {/* ══════════════════════════════════════════
          IMPORTANCE
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Importance of Due Diligence
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Organizations frequently rely on information from multiple sources when evaluating business relationships, customers, suppliers, or investment opportunities. Structured due diligence helps strengthen review processes and information validation before critical decisions are made.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IMPORTANCE.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md ${i === IMPORTANCE.length - 1 ? 'sm:col-span-2' : ''}`}
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    borderColor: 'rgba(191,219,254,0.7)',
                    boxShadow: '0 2px 16px 0 rgba(9,28,140,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center text-xs font-black mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
              Why Choose Brighto India for Due Diligence Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border p-7 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  borderColor: 'rgba(199,210,254,0.6)',
                  boxShadow: '0 2px 20px 0 rgba(9,28,140,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 flex items-center justify-center font-black text-sm mb-5 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
              Brighto India delivers Due Diligence Services across many sectors where checks, risk assessment, and fact validation are critical.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-blue-700 hover:bg-slate-900 transition-all duration-300 group cursor-pointer">
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
              Our Due Diligence Process
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
                  <h3 className="font-bold text-slate-900 mb-2">Step {i + 1}: {step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
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
          PRINCIPLES
      ══════════════════════════════════════════ */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-200 border border-amber-300 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Principles That Guide Our Assessments</p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Brighto India carries out Due Diligence Services based on the information available during the check and within the agreed work scope. We share findings and notes to help clients with their review work. Clients are always encouraged to consider these alongside their own rules, procedures, and decision-making systems.
              </p>
            </div>
          </div>
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
            Strengthen Your Due Diligence Framework with Brighto India
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Brighto India supports organizations through structured Due Diligence Services, helping strengthen information validation, risk assessment, and internal review processes across diverse business requirements and industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request a Consultation Today <ArrowRight className="w-5 h-5" />
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
