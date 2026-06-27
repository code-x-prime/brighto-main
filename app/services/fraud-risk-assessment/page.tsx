import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: 'Fraud Risk Assessment Support Services India | Brighto India',
  description:
    'Brighto India provides structured Fraud Risk Assessment Support Services since 2015 for banks, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises across India.',
  keywords: [
    'fraud risk assessment support services India',
    'fraud risk assessment',
    'risk review support',
    'information validation services',
    'field investigation support',
    'Brighto India fraud risk assessment',
    'verification services India',
  ],
  alternates: { canonical: '/services/fraud-risk-assessment' },
  openGraph: {
    title: 'Fraud Risk Assessment Support Services India | Brighto India',
    description:
      'Structured fraud risk assessment support services for banks, NBFCs, fintechs, insurers, and enterprises across India.',
    url: 'https://www.brightoindia.com/services/fraud-risk-assessment',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const FRAUD_SERVICES = [
  {
    icon: 'Search',
    title: 'Information Validation Support',
    desc: 'Support internal review work through structured validation of applicant, customer, business, or operational information.',
    color: '#091C8C',
    bg: '#eef2ff',
    border: '#c7d2fe',
  },
  {
    icon: 'AlertTriangle',
    title: 'Field Investigation Support',
    desc: 'Conduct field investigation activities set up to support data evaluation and review needs.',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    icon: 'FileCheck',
    title: 'Document Review Support',
    desc: 'Examine supporting documentation using set check methods and summary practices.',
    color: '#0369a1',
    bg: '#f0f9ff',
    border: '#bae6fd',
  },
  {
    icon: 'Home',
    title: 'Residence Verification',
    desc: 'Confirm residential information through structured check steps and recorded summaries.',
    color: '#059669',
    bg: '#f0fdf4',
    border: '#a7f3d0',
  },
  {
    icon: 'Briefcase',
    title: 'Office Verification',
    desc: 'Support confirming employment-related information through independent verification activities.',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    icon: 'Building2',
    title: 'Business Verification',
    desc: 'Check business details through process-based review and investigation activities.',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
  },
  {
    icon: 'CheckCircle2',
    title: 'Exception Case Assessment',
    desc: 'Provide additional check and evaluation support for situations that require deeper review.',
    color: '#0f766e',
    bg: '#f0fdfa',
    border: '#99f6e4',
  },
  {
    icon: 'FileText',
    title: 'Assessment Reporting',
    desc: 'Get clear summaries that record findings, supporting information, and evaluation results.',
    color: '#4f46e5',
    bg: '#eef2ff',
    border: '#c7d2fe',
  },
]

const INCLUDES = [
  'Information Validation',
  'Field Investigation Support',
  'Document Review Support',
  'Residence Verification',
  'Office Verification',
  'Business Verification',
  'Exception Case Assessment',
  'Assessment Reporting',
]

const WHY_MATTERS = [
  { title: 'Improve Information Visibility', desc: 'Verification activities help companies gain additional visibility into details that need evaluation.' },
  { title: 'Strengthen Review Frameworks', desc: 'Structured evaluation support adds to more consistent review and evaluation methods.' },
  { title: 'Support Risk Assessment Activities', desc: 'Verification findings and recorded results can back internal evaluation steps.' },
  { title: 'Enhance Information Validation', desc: 'Separate investigations help to confirm the details given during operational processes.' },
  { title: 'Improve Operational Consistency', desc: 'Clear methods support steady work across validation, investigations, and summary activities.' },
]

const WHY_BRIGHTO = [
  { title: 'Financial Services Expertise', desc: 'Brighto India works with banks, NBFCs, housing finance companies, fintech organizations, insurance providers, and other businesses.' },
  { title: 'Process-Driven Methodology', desc: 'Our services follow defined operational procedures designed to deliver consistent results, clear steps, and quality summaries.' },
  { title: 'Experienced Investigation Network', desc: 'We combine verification expertise with on-site investigative capabilities across multiple locations.' },
  { title: 'Secure & Compliance-Oriented Operations', desc: 'Our operational framework includes data safety, quality management, and control steps.' },
  { title: 'Structured Reporting Framework', desc: 'Evaluation results get recorded in clear summary formats that back internal review work.' },
  { title: 'Pan-India Operational Reach', desc: 'Our network provides verification and investigation support across different areas and work settings.' },
]

const INDUSTRIES = [
  { title: 'Banking', desc: 'Check and evaluation support for lending, customer onboarding, and customer review steps.' },
  { title: 'NBFCs', desc: 'Structured risk evaluation support services matched to lending and work review needs.' },
  { title: 'Housing Finance Companies', desc: 'Assessment support and investigation support for housing finance evaluation workflows.' },
  { title: 'Fintech Companies', desc: 'Verification services supporting digital onboarding and customer assessment processes.' },
  { title: 'Insurance Companies', desc: 'Evaluation support services are built to strengthen customer review and validation steps.' },
  { title: 'Microfinance Institutions', desc: 'On-site investigation and check support matched to work needs.' },
  { title: 'Enterprises', desc: 'Risk evaluation support services built to strengthen work review systems.' },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Requirement Assessment', desc: 'Getting to know review goals, limits, and operational requirements.' },
  { num: '02', title: 'Case Assignment', desc: 'Assigning cases through set workflows.' },
  { num: '03', title: 'Verification & Investigation', desc: 'Doing check activities, on-site investigations, and information validation steps.' },
  { num: '04', title: 'Quality Review', desc: 'Studying gathered details through set quality control steps.' },
  { num: '05', title: 'Assessment & Documentation', desc: 'Putting together findings, supporting information, and evaluation results.' },
  { num: '06', title: 'Reporting', desc: 'Providing structured reports for client evaluation and review.' },
]

const FAQS = [
  { q: 'What is Fraud Risk Assessment Support?', a: 'Fraud Risk Assessment Support covers structured validation, investigations, and information validation activities to support companies through risk review and evaluation.' },
  { q: 'Which organizations use Fraud Risk Assessment Support Services?', a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, and other businesses often use fraud risk assessment support services.' },
  { q: 'What services are included in Fraud Risk Assessment Support?', a: 'Services may cover information validation, on-site investigation support, document review, residence verification, office verification, business validation, and structured reporting.' },
  { q: 'Does Brighto India provide field investigation support?', a: 'Yes. Brighto India provides on-site investigation and check support services designed to help companies with review and evaluation work.' },
  { q: 'How can Fraud Risk Assessment Support help organizations?', a: 'Structured evaluation support provides independently verified information and recorded findings to support internal review and evaluation steps.' },
  { q: 'How can I get started with Brighto India?', a: 'Contact our team to discuss your verification requirements, operational scope, and reporting needs. We will recommend an approach aligned with your goals.' },
]

export default function FraudRiskAssessmentPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Fraud Risk Support Since 2015"
        title="Fraud Risk Assessment Support Services for"
        titleAccent="Stronger Risk Review Processes"
        description="Inconsistencies in details, missing paperwork, and questions about accuracy may require additional validation during customer sign-up, loan review, and evaluation steps. Brighto India offers Fraud Risk Assessment Support Services that help organizations through structured information validation, investigation, assessment support, and reporting."
        primaryCta="Request Consultation"
        secondaryCta="Talk to Our Experts"
        accentColor="#dc2626"
        accentLight="#fef2f2"
        accentBorder="#fecaca"
        gridStroke="#FECACA"
        blob1="#fca5a5"
        blob2="#fed7aa"
        blob3="#c7d2fe"
        breadcrumb="Fraud Risk Assessment"
        breadcrumbHref="/services/fraud-risk-assessment"
        stats={[
          { val: '2015', label: 'Serving Since', sub: 'Decade of experience', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
          { val: '500K+', label: 'Cases Supported', sub: 'Across India', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
          { val: 'Pan-India', label: 'Coverage', sub: 'Multi-geography reach', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs', label: 'ISO + SOC 2', sub: 'Internationally audited', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                About Brighto India: Fraud Risk Assessment Support Partner
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>Since 2015, Brighto India has been a trusted partner in Fraud Risk Assessment Support Services, working with banks, NBFCs, housing finance companies, fintech companies, insurance providers, and other businesses to improve risk management and verification.</p>
                <p>Our team brings expertise in information validation, loan application verification, contact point verification, on-site investigations, document validation, and evaluation support, enabling companies to establish structured review frameworks.</p>
                <p className="sm:col-span-2">As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, Brighto India adheres to established standards for data safety, quality management, and protection while providing process-based validation, investigations, and risk evaluation support.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/consulting-expert.jpg"
                  alt="Brighto India fraud risk assessment support professional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-red-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-red-900">
                    ISO 27001 - ISO 9001 - SOC 2 Audited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Transform Risk Reviews</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Transform Risk Reviews into Better-Informed Assessments
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Companies often face situations in which additional validation, investigation, or assessment support becomes necessary before proceeding with their own review and evaluation.</p>
                  <p>Brighto India&apos;s Fraud Risk Assessment Support Services provide companies with verification activities, on-site investigations, verification, and structured reporting. Our services work alongside company review systems, providing structured, recorded methods for documenting observations.</p>
                  <p>Whether working with banks, NBFCs, housing finance companies, fintech organizations, insurance providers, or other businesses, Brighto India delivers process-based evaluation support aligned with operational requirements.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
                <Image
                  src="/finance-graphs-office.jpg"
                  alt="Brighto India fraud risk assessment team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-red-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team - Pan-India Coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Fraud Risk Assessment Support?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>Fraud Risk Assessment Support means structured validation, investigation, information validation, and review work that helps companies examine details requiring further review.</p>
                <p>The goal is to support internal review systems by providing independently verified details, recorded findings, and evaluation support to inform internal risk assessment processes.</p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Fraud Risk Assessment Support may include:</p>
              <ul className="space-y-2.5">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceOfferings
        heading="Our Fraud Risk Assessment Support Services"
        services={FRAUD_SERVICES}
        accentColor="#dc2626"
        ctaText="Need a custom fraud risk review plan?"
        ctaDesc="Our team will assess your requirements and recommend the right validation and investigation approach for your organization."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why Fraud Risk Assessment Support Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">Risk evaluation steps often require additional validation, investigation, and review support to build stronger internal decision-making systems. Structured evaluation steps help companies gain a clearer view of information while maintaining consistent work across daily tasks.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div key={item.title} className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`} style={{ background: 'color-mix(in srgb, #fef2f2 55%, white 45%)', borderColor: '#fecaca', boxShadow: '0 2px 16px 0 #fecaca88, inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center text-xs font-black mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Why Choose Brighto India for Fraud Risk Assessment Support?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ background: 'color-mix(in srgb, #fef2f2 50%, white 50%)', borderColor: '#fecaca', boxShadow: '0 4px 24px -4px #fecaca99, inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-red-700 flex items-center justify-center font-black text-sm mb-5 group-hover:bg-red-700 group-hover:text-white group-hover:border-red-700 transition-all">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="ind-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#ind-grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">Sectors We Cover</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Industries We Serve</h2>
            <p className="text-slate-400 mt-4 text-base">Brighto India provides fraud risk assessment support across the business areas where validation and review are critical.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-blue-700 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-900/50 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:border-blue-900 transition-all text-blue-300 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{ind.title}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{ind.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Our Fraud Risk Assessment Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-sm shrink-0">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-200 border border-amber-300 flex items-center justify-center text-amber-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Our Assessment Framework</p>
              <p className="text-sm text-amber-900 leading-relaxed">Brighto India&apos;s Fraud Risk Assessment Support Services are conducted based on the details present at the time of review and within the agreed scope of work. Check results, findings, and supporting information help clients review the steps and evaluate them alongside internal risk rules, work policies, and decision systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Discuss Your Requirements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let's Discuss Your Verification & Investigation Requirements
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Whether you need information validation, on-site investigation support, document review, business validation, or evaluation summaries, our team can suggest a method matched to your work goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request a Consultation
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-bold text-base transition-all">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      <BrightoFooter />
    </div>
  )
}
