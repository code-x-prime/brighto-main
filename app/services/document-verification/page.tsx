import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'
import {
  ArrowRight, CheckCircle2, Shield, FileText, FileSearch,
  Users, Building2, Landmark, Cpu, BadgeCheck, ClipboardList,
  Briefcase, FileCheck, FileScan, FileWarning, ListChecks,
} from 'lucide-react'
import { FAQAccordion } from '@/components/faq-accordion'

export const metadata: Metadata = {
  title: "Document Verification Services India | Brighto India – Trusted Information Validation",
  description:
    "Brighto India provides structured Document Verification Services since 2015 — identity, address, employment, financial & business document review across India. ISO 27001 | ISO 9001 | SOC 2 Audited.",
  keywords: [
    'document verification services India', 'identity document verification', 'address document verification',
    'employment document verification', 'financial document verification', 'business document verification',
    'Brighto India document verification', 'document validation India', 'ISO 27001 verification company India',
  ],
  alternates: { canonical: '/services/document-verification' },
  openGraph: {
    title: "Document Verification Services India | Brighto India",
    description: "Structured Document Verification Services since 2015 for banks, NBFCs, fintechs & enterprises. ISO 27001 | ISO 9001 | SOC 2 Audited.",
    url: 'https://www.brightoindia.com/services/document-verification',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const DV_SERVICES = [
  {
    icon: BadgeCheck,
    title: 'Identity Document Verification',
    desc: 'Support information validation through structured review of identity-related documentation and supporting records.',
    color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe',
  },
  {
    icon: FileSearch,
    title: 'Address Document Verification',
    desc: 'Validate address-related information through defined document review and verification procedures.',
    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    icon: Briefcase,
    title: 'Employment Document Verification',
    desc: 'Review employment-related documents to support onboarding, lending, and assessment processes.',
    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0',
  },
  {
    icon: FileText,
    title: 'Financial Document Verification',
    desc: 'Support financial assessment activities through structured review of submitted financial documentation.',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
  },
  {
    icon: Building2,
    title: 'Business Document Verification',
    desc: 'Validate business-related information through review of organizational and operational documents.',
    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe',
  },
  {
    icon: ClipboardList,
    title: 'Supporting Document Review',
    desc: 'Assess supporting documentation through established verification methodologies and reporting practices.',
    color: '#0891b2', bg: '#f0fdfa', border: '#a5f3fc',
  },
  {
    icon: ListChecks,
    title: 'Information Validation Support',
    desc: 'Strengthen review frameworks through structured document verification and assessment support services.',
    color: '#dc2626', bg: '#fef2f2', border: '#fecaca',
  },
  {
    icon: FileCheck,
    title: 'Verification Reporting',
    desc: 'Receive organized reporting that documents verification observations and supporting information for evaluation purposes.',
    color: '#65a30d', bg: '#f7fee7', border: '#d9f99d',
  },
]

const BENEFITS = [
  {
    title: 'Improve Information Validation',
    desc: 'Structured document verification supports the validation of information submitted during operational and assessment processes.',
  },
  {
    title: 'Strengthen Review Frameworks',
    desc: 'Independent review activities contribute to more consistent document assessment procedures.',
  },
  {
    title: 'Enhance Information Visibility',
    desc: 'Document verification provides additional visibility into submitted information and supporting records.',
  },
  {
    title: 'Support Assessment Processes',
    desc: 'Verification findings may assist organizations during onboarding, lending, and operational review activities.',
  },
  {
    title: 'Improve Process Consistency',
    desc: 'Defined methodologies help organizations maintain consistency across document review and verification workflows.',
  },
]

const WHY_BRIGHTO = [
  {
    icon: ClipboardList,
    title: 'Process-Driven Verification Methodology',
    desc: 'Our document verification services follow structured review procedures designed to support consistency and reporting quality.',
  },
  {
    icon: Building2,
    title: 'Industry-Focused Expertise',
    desc: 'Brighto India supports banks, NBFCs, housing finance companies, fintech organizations, insurance providers, and enterprises.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliance-Oriented Operations',
    desc: 'Our verification processes are supported by established information security, quality management, and operational controls.',
  },
  {
    icon: FileCheck,
    title: 'Structured Reporting Framework',
    desc: 'Verification observations are documented through organized reporting formats that support client review processes.',
  },
  {
    icon: Users,
    title: 'Experienced Verification Team',
    desc: 'Our team follows defined verification procedures designed to support information validation requirements across industries.',
  },
  {
    icon: Landmark,
    title: 'Pan-India Operational Reach',
    desc: 'Brighto India supports document verification requirements across multiple locations and operational environments.',
  },
]

const INDUSTRIES = [
  { icon: Landmark, title: 'Banking', desc: 'Document verification support for onboarding, lending, and customer review processes.' },
  { icon: Building2, title: 'NBFCs', desc: 'Structured document review services aligned with lending and assessment requirements.' },
  { icon: FileText, title: 'Housing Finance Companies', desc: 'Verification support for mortgage and housing finance assessment workflows.' },
  { icon: Cpu, title: 'Fintech Companies', desc: 'Document verification services supporting digital onboarding and customer validation requirements.' },
  { icon: Shield, title: 'Insurance Companies', desc: 'Information validation support for policyholder and customer documentation reviews.' },
  { icon: Users, title: 'Microfinance Institutions', desc: 'Document verification and assessment support tailored to operational requirements.' },
  { icon: Briefcase, title: 'Enterprises', desc: 'Verification solutions designed to support onboarding, compliance, and operational review processes.' },
]

const PROCESS = [
  { num: '01', icon: ClipboardList, title: 'Requirement Assessment', desc: 'Understanding review objectives, scope, and verification requirements.' },
  { num: '02', icon: FileScan, title: 'Document Collection & Review', desc: 'Reviewing submitted documents and supporting information.' },
  { num: '03', icon: FileSearch, title: 'Verification Activities', desc: 'Conducting validation procedures in accordance with the agreed scope of work.' },
  { num: '04', icon: CheckCircle2, title: 'Quality Review', desc: 'Reviewing collected information through defined quality control procedures.' },
  { num: '05', icon: FileWarning, title: 'Assessment & Documentation', desc: 'Compiling observations and supporting information for review purposes.' },
  { num: '06', icon: FileCheck, title: 'Reporting', desc: 'Providing structured reports to support client evaluation and decision-making processes.' },
]

const FAQS = [
  {
    q: 'What is Document Verification?',
    a: 'Document Verification is the process of reviewing and validating information contained within submitted documents through structured verification and assessment procedures.',
  },
  {
    q: 'Who uses Document Verification Services?',
    a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, enterprises, and other organizations commonly use document verification services.',
  },
  {
    q: 'What types of documents can be reviewed?',
    a: 'Depending on organizational requirements, document verification services may include identity documents, proof of address, employment records, financial documents, business records, and supporting documentation submitted during onboarding, assessment, or review processes.',
  },
  {
    q: 'Why is Document Verification important?',
    a: 'Document Verification supports information validation, strengthens review processes, and helps organizations improve visibility into submitted information.',
  },
  {
    q: 'Does Brighto India provide document review support for financial institutions?',
    a: 'Yes. Brighto India supports financial institutions through structured document verification and information validation services.',
  },
]

export default function DocumentVerificationPage() {
  return (
    <>
      <BrightoHeader />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f7fee7 50%, #ecfdf5 100%)' }} />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#86efac" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dv-grid)" />
        </svg>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }} />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #86efac, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-800 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Document Verification Services
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              India&apos;s Trusted Partner for{' '}
              <span className="text-green-700">Document Verification</span>{' '}
              Services
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Incomplete, inconsistent, or unverifiable documentation can impact onboarding, lending, and assessment processes. Since 2015, Brighto India has provided Document Verification Services to help organizations with structured document review, information validation, and verification reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition-all hover:shadow-lg text-sm">
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all text-sm">
                View Our Services
              </button>
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap items-center gap-3">
              {['ISO 27001 Certified', 'ISO 9001 Certified', 'SOC 2 Audited', 'Since 2015'].map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-green-200 text-xs font-medium text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { val: '2015', label: 'Founded', sub: 'Trusted since day one' },
              { val: '500K+', label: 'Verifications Done', sub: 'Across India' },
              { val: 'Pan-India', label: 'Coverage', sub: 'Multi-location reach' },
              { val: '3 Certs', label: 'Certifications', sub: 'ISO 27001 · ISO 9001 · SOC 2' },
            ].map((s) => (
              <div key={s.label} className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-2xl p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-green-700">{s.val}</p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">{s.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">About Brighto India</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-3xl">
              Trusted Verification &amp; Assessment Support
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600 leading-relaxed text-sm">
            <p>
              Brighto India works with financial institutions, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises. We deliver Document Verification Services built to strengthen information validation and review processes.
            </p>
            <p>
              Our experience covers due diligence, loan application verification, contact point verification, field investigation, and document review support. This enables organizations to maintain consistent verification practices across their operational workflows.
            </p>
            <p>
              As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, Brighto India follows established standards for information security, quality management, and data protection across its verification and assessment operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── STRENGTHEN + WHAT IS DV ── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Strengthen Information Validation Through Document Verification
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Documents play a critical role in onboarding, lending, compliance, and operational review processes. Organizations often need independent validation of submitted information to strengthen internal review frameworks and improve information visibility.
                </p>
                <p>
                  Brighto India&apos;s Document Verification Services help review and validate documents through structured verification methodologies, information assessment procedures, and organized reporting frameworks. Our services help organizations maintain consistency across document review processes while supporting informed assessment activities.
                </p>
                <p>
                  Whether working with banks, NBFCs, housing finance companies, fintech companies, insurance providers, or enterprises, Brighto India delivers process-driven document verification services tailored to operational requirements.
                </p>
              </div>
            </div>

            {/* What is DV card */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-green-400">What is Document Verification?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Document Verification is the process of reviewing and validating information contained within submitted documents as part of onboarding, lending, assessment, compliance, and operational workflows. The objective is to support information validation through structured review procedures and verification activities.
              </p>
              <p className="text-slate-400 text-xs mb-4 font-semibold uppercase tracking-widest">Document Verification may include:</p>
              <ul className="space-y-2.5">
                {[
                  'Identity Document Verification',
                  'Address Document Verification',
                  'Employment Document Review',
                  'Financial Document Verification',
                  'Business Document Verification',
                  'Supporting Documentation Assessment',
                  'Information Validation',
                  'Verification Reporting',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DV SERVICES ── */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Document Verification Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DV_SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className="rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: svc.bg, borderColor: svc.border }}
                >
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: svc.color + '18' }}>
                    <Icon className="w-5 h-5" style={{ color: svc.color }} />
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Full-width CTA strip */}
          <div className="mt-8 rounded-2xl bg-green-700 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg">Need Document Verification Support?</p>
              <p className="text-green-100 text-sm mt-1">Our team can help assess your requirements and recommend the right approach.</p>
            </div>
            <button className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-green-800 rounded-xl font-bold text-sm hover:bg-green-50 transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Sticky left */}
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Benefits of Document Verification Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Accurate documentation forms the foundation of many onboarding, lending, assessment, and compliance-related processes. Independent document review and validation activities help organizations strengthen information quality and improve operational consistency.
              </p>
            </div>

            {/* Numbered benefit cards */}
            <div className="space-y-4">
              {BENEFITS.map((b, i) => (
                <div key={b.title} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4 hover:shadow-md transition-shadow">
                  <span className="w-10 h-10 rounded-xl bg-green-700 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BRIGHTO ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Why Brighto India</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Brighto India for Document Verification Services?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-green-200 hover:bg-green-50/40 transition-all hover:-translate-y-1 hover:shadow-md">
                  <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 group-hover:border-green-200 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-green-700" />
                  </span>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2 block">Sectors We Serve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Industries We Serve
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6 hover:border-green-600 hover:bg-slate-800/80 transition-all">
                  <Icon className="w-6 h-6 text-green-400 mb-3" />
                  <h3 className="font-bold text-white text-sm mb-2">{ind.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Document Verification Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex gap-4">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <span className="text-2xl font-extrabold text-green-700/30">{step.num}</span>
                    <span className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-slate-900 mb-1.5 leading-snug">{step.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK DISCLAIMER ── */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 items-start">
            <FileWarning className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-900 mb-1">Our Verification Framework</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Brighto India&apos;s Document Verification Services are conducted based on information available at the time of assessment and within the agreed scope of work. Verification findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside internal policies, assessment criteria, and decision-making frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Discuss Your Verification Requirements
          </h2>
          <p className="text-green-100 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you require identity document verification, address validation, employment document review, financial document verification, or business document assessment support, our team can recommend an approach aligned with your operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-green-800 rounded-xl font-bold text-sm hover:bg-green-50 transition-all hover:shadow-lg inline-flex items-center gap-2">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3.5 border border-green-400 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </>
  )
}
