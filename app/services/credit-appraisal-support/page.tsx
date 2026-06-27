import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: 'Credit Appraisal Support Services India | Brighto India',
  description:
    'Brighto India provides structured Credit Appraisal Support Services since 2015 for banks, NBFCs, housing finance companies, fintech companies, microfinance institutions, and other lenders across India.',
  keywords: [
    'credit appraisal support services India',
    'credit appraisal support',
    'loan review support',
    'lending assessment support',
    'verification services India',
    'Brighto India credit appraisal support',
    'credit assessment services',
  ],
  alternates: { canonical: '/services/credit-appraisal-support' },
  openGraph: {
    title: 'Credit Appraisal Support Services India | Brighto India',
    description:
      'Structured Credit Appraisal Support Services for banks, NBFCs, fintechs, housing finance companies, microfinance institutions, and enterprises across India.',
    url: 'https://www.brightoindia.com/services/credit-appraisal-support',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const SERVICES = [
  { icon: 'FileText', title: 'Loan Application Verification', desc: 'Help with lending assessments by checking what the applicant shared and any additional details.', color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'FileCheck', title: 'Document Verification', desc: 'Go over the papers people send in, using established verification methods to check them and compile reports.', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { icon: 'MapPin', title: 'Contact Point Verification', desc: 'Confirm home, work, business, and other contact details through structured confirmation steps.', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
  { icon: 'Home', title: 'Residence Verification', desc: 'Support validation on home details using independent confirmation and report steps.', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
  { icon: 'Briefcase', title: 'Office Verification', desc: 'Verify job-related details using defined confirmation methods.', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'Building2', title: 'Business Verification', desc: 'Validate business details through structured review and verification activities.', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
  { icon: 'Search', title: 'Information Validation Support', desc: 'Build stronger lending review steps with organized methods for checking facts.', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  { icon: 'FileCheck', title: 'Assessment Reporting', desc: 'Get clear reports that list what was found and the details that support the review.', color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
]

const INCLUDES = [
  'Loan Application Verification',
  'Document Verification',
  'Contact Point Verification',
  'Residence Verification',
  'Office Verification',
  'Business Verification',
  'Information Validation',
  'Assessment Reporting',
]

const WHY_MATTERS = [
  { title: 'Improve Lending Visibility', desc: 'Credit appraisal support gives lenders a clearer view of details that affect assessment decisions.' },
  { title: 'Strengthen Review Consistency', desc: 'Structured workflows help teams keep review practices steady across files and branches.' },
  { title: 'Support Better Decisions', desc: 'Independently verified inputs help internal teams make more informed lending choices.' },
  { title: 'Reduce Missing Information Gaps', desc: 'Verification steps help identify paperwork or detail gaps before approval stages.' },
  { title: 'Support Credit Policy Workflows', desc: 'Reports and notes can fit into existing credit rules, review standards, and decision steps.' },
]

const WHY_BRIGHTO = [
  { title: 'Financial Services Expertise', desc: 'Brighto India works with banks, NBFCs, housing finance companies, fintech companies, and other lenders.' },
  { title: 'Process-Driven Methodology', desc: 'Our services use established operational procedures designed to keep work consistent and clear.' },
  { title: 'Verification & Investigation Capabilities', desc: 'We combine verification expertise with field investigation and assessment support capabilities.' },
  { title: 'Secure & Compliance-Oriented Operations', desc: 'Our way of working includes set rules for data safety, quality control, and process controls.' },
  { title: 'Structured Reporting Framework', desc: 'Assessment findings are organized into report formats that support internal review work.' },
  { title: 'Pan-India Operational Reach', desc: 'Our network enables verification and assessment support across many locations and work settings.' },
]

const INDUSTRIES = [
  { title: 'Banking', desc: 'Verification and assessment support for lending and credit review work.' },
  { title: 'NBFCs', desc: 'Structured credit appraisal support services matched to lending and daily needs.' },
  { title: 'Housing Finance Companies', desc: 'Information validation and assessment support for home loans and housing finance steps.' },
  { title: 'Fintech Companies', desc: 'Confirmation services that support online lending and customer evaluation.' },
  { title: 'Microfinance Institutions', desc: 'Assessment support services designed to strengthen lending review steps.' },
  { title: 'Consumer Lending Companies', desc: 'Checks and fact confirmation services that support credit review work.' },
  { title: 'Enterprises', desc: 'Assessment support services matched to internal review and evaluation needs.' },
]

const PROCESS = [
  { num: '01', title: 'Requirement Assessment', desc: 'Learning the assessment objectives, limits, and daily needs.' },
  { num: '02', title: 'Case Assignment', desc: 'Assigning cases using structured working steps.' },
  { num: '03', title: 'Verification & Information Validation', desc: 'Doing the verification steps and information validation procedures.' },
  { num: '04', title: 'Quality Review', desc: 'Going over the gathered details using the set quality-check steps.' },
  { num: '05', title: 'Assessment & Documentation', desc: 'Putting together the notes and backup details for review.' },
  { num: '06', title: 'Reporting', desc: 'Giving clear reports for the client to look at and use in their review.' },
]

const FAQS = [
  { q: 'What is Credit Appraisal Support?', a: 'Credit Appraisal Support means the verification, information validation, document review, and assessment activities that assist financial institutions in evaluating loan requests.' },
  { q: 'Who uses Credit Appraisal Support Services?', a: 'Banks, NBFCs, housing finance companies, fintech groups, microfinance institutions, and other financial groups often use credit appraisal support services.' },
  { q: 'What activities are included in Credit Appraisal Support?', a: 'Services may include loan application verification, document verification, contact point verification, residence verification, office verification, business verification, information validation, and assessment reporting.' },
  { q: 'How does Credit Appraisal Support help financial institutions?', a: 'Credit Appraisal Support provides independently verified information, documented observations, and clear reports to support internal lending review and assessment work.' },
  { q: 'Does Brighto India provide verification support for lending assessments?', a: 'Yes. Brighto India provides verification and information validation services made to support credit appraisal steps.' },
  { q: 'How can I get started with Brighto India?', a: 'Reach out to our team to discuss your assessment requirements, operational objectives, and service scope. We will suggest a support plan tailored to your needs.' },
]

export default function CreditAppraisalSupportPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Credit Appraisal Since 2015"
        title="Credit Appraisal Support Services for"
        titleAccent="Better-Informed Lending Assessments"
        description="Missing details, missing paperwork, and pending checks can slow down how lenders review loan requests. Brighto India offers Credit Appraisal Support Services that let banks and lenders build stronger ways to check facts, go over files, and run their reviews using clear steps for confirmation and updates."
        primaryCta="Request Consultation"
        secondaryCta="Talk to Our Experts"
        accentColor="#b45309"
        accentLight="#fffbeb"
        accentBorder="#fde68a"
        gridStroke="#f59e0b"
        blob1="#fcd34d"
        blob2="#f59e0b"
        blob3="#a78bfa"
        breadcrumb="Credit Appraisal Support"
        breadcrumbHref="/services/credit-appraisal-support"
        stats={[
          { val: '2015', label: 'Serving Since', sub: 'Decade of experience', color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
          { val: '500K+', label: 'Cases Supported', sub: 'Across India', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
          { val: 'Pan-India', label: 'Coverage', sub: 'Multi-geography reach', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs', label: 'ISO + SOC 2', sub: 'Internationally audited', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                About Brighto India
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>Brighto India works with banks, NBFCs, housing finance companies, fintech companies, and other lenders by providing Credit Appraisal Support Services designed to streamline loan checks and reviews.</p>
                <p>We handle due diligence, verify loan applications, contact points, and documents, conduct field investigations, and provide risk assessment support. This lets organizations establish consistent methods to verify details and conduct reviews.</p>
                <p className="sm:col-span-2">As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, Brighto India follows established standards for keeping data safe, managing quality, and protecting information as we carry out process-driven verification and assessment support services.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/team-analysis.jpg"
                  alt="Brighto India credit appraisal support professional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-amber-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-amber-900">
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
                <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Strengthen Lending Assessments</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Strengthen Lending Assessments Through Structured Credit Appraisal Support
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>The credit appraisal process typically requires accurate details, supporting documentation, verification activities, and clear reports to support the full lending review process. Structured appraisal support lets lenders see the details more clearly and maintain consistency as they move through their assessment workflows.</p>
                  <p>Brighto India&apos;s Credit Appraisal Support Services help companies with information validation, document review, field verification support, and assessment-driven reporting. Our services give lenders independently verified information and documented observations within the set limits of each job.</p>
                  <p>Whether we work with banks, NBFCs, housing finance companies, fintech lenders, or other financial groups, we provide process-driven appraisal support tailored to their operating models.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
                <Image
                  src="/finance-graphs-office.jpg"
                  alt="Brighto India credit appraisal support team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-amber-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team - Pan-India Coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Credit Appraisal Support?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>Credit Appraisal Support means the verification, information validation, document review, and assessment support activities that assist financial groups in evaluating loan requests.</p>
                <p>The goal is to support internal credit review frameworks by providing information, documented observations, and clear reports to support the review process.</p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Credit Appraisal Support may include the following:</p>
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
        heading="Our Credit Appraisal Support Services"
        services={SERVICES}
        accentColor="#b45309"
        ctaText="Need a custom appraisal support plan?"
        ctaDesc="Our team will assess your requirements and recommend the right verification and assessment approach for your lending workflow."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why Credit Appraisal Support Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">The credit appraisal process needs accurate details, supporting paperwork, and consistent review steps to stay effective. Structured support helps lenders review files with more confidence and less friction.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div key={item.title} className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`} style={{ background: 'color-mix(in srgb, #fffbeb 55%, white 45%)', borderColor: '#fde68a', boxShadow: '0 2px 16px 0 #fde68a88, inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <div className="w-9 h-9 rounded-xl bg-amber-800 text-white flex items-center justify-center text-xs font-black mb-4">{String(i + 1).padStart(2, '0')}</div>
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
            <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Why Choose Brighto India for Credit Appraisal Support Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ background: 'color-mix(in srgb, #fffbeb 50%, white 50%)', borderColor: '#fde68a', boxShadow: '0 4px 24px -4px #fde68a99, inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 flex items-center justify-center font-black text-sm mb-5 group-hover:bg-amber-800 group-hover:text-white group-hover:border-amber-800 transition-all">
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
            <p className="text-slate-400 mt-4 text-base">Brighto India delivers credit appraisal support across many lending and business areas where checks and reports matter.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-amber-600 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-900/50 flex items-center justify-center shrink-0 group-hover:bg-amber-800 group-hover:border-amber-800 transition-all text-amber-300 group-hover:text-white">
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
            <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Our Credit Appraisal Support Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-800 text-white flex items-center justify-center font-black text-sm shrink-0">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-800">
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
              <p className="text-sm text-amber-900 leading-relaxed">Brighto India&apos;s Credit Appraisal Support Services are based on the details provided at the time of assessment and remain within the agreed job limits. Check results, notes, and backup details help clients review the work alongside their own credit rules, review standards, and decision steps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <section className="py-24 bg-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let's Discuss Your Credit Appraisal Requirements
          </h2>
          <p className="text-amber-100 text-lg leading-relaxed mb-10">
            If you need loan application verification, document verification, contact point verification, business verification, residence verification, office verification, or information validation support, our team can suggest a good way that fits your daily needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-amber-50 text-amber-900 rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
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
