import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: 'Loan Application Verification Services India | Brighto India',
  description:
    'Brighto India provides structured Loan Application Verification Services since 2015 for banks, NBFCs, housing finance companies, fintech lenders, and microfinance institutions across India.',
  keywords: [
    'loan application verification services India',
    'loan verification',
    'lender verification services',
    'bank loan verification',
    'NBFC loan verification',
    'Brighto India loan application verification',
  ],
  alternates: { canonical: '/services/loan-application-verification' },
}

const SERVICES = [
  { icon: 'Home', title: 'Residence Verification', desc: 'Confirm the address provided by applicants through structured residence checks.', color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
  { icon: 'Briefcase', title: 'Office Verification', desc: 'Validate workplace-related details through independent office verification steps.', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { icon: 'Building2', title: 'Business Verification', desc: 'Check business details for commercial and business loans through structured workflows.', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
  { icon: 'MapPin', title: 'Contact Point Verification (CPV)', desc: 'Verify the contact point details shared by the applicant during review.', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'FileCheck', title: 'Document Verification', desc: 'Review supporting documents to strengthen the overall application review process.', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
  { icon: 'Search', title: 'Field Investigation', desc: 'Handle sensitive or complex cases with ground-level verification support.', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
]

const INCLUDES = [
  'Residence Verification',
  'Office Verification',
  'Business Verification',
  'Contact Point Verification (CPV)',
  'Document Verification',
  'Field Investigation (FI)',
  'Information Validation',
  'Assessment Support',
]

const WHY = [
  { title: 'Improved Information Validation', desc: 'Verification helps lenders review and validate application details.' },
  { title: 'Stronger Assessment Frameworks', desc: 'Independent checks support more structured review and evaluation.' },
  { title: 'Better Information Visibility', desc: 'Validated information gives teams a clearer view of applicant details.' },
  { title: 'Consistent Verification Processes', desc: 'Defined methods improve consistency across verification work.' },
  { title: 'Support for Risk Review Processes', desc: 'Verification findings can contribute to broader internal review and risk assessment frameworks.' },
]

const WHY_BRIGHTO = [
  { title: 'Independent Verification Support', desc: 'We help lenders with organized fact-checking and verification processes.' },
  { title: 'Experienced Field Network', desc: 'Brighto India combines checking know-how with field-visit strength.' },
  { title: 'BFSI-Focused Expertise', desc: 'We support banks, NBFCs, housing finance companies, fintech lenders, and more.' },
  { title: 'Structured Reporting', desc: 'We put verification results into clear report formats for client review.' },
  { title: 'Scalable Operations', desc: 'Our setup helps us handle verification needs across locations.' },
  { title: 'Quality-Driven Processes', desc: 'We follow fixed workflows to keep work steady and accurate.' },
]

const INDUSTRIES = [
  { title: 'Banking', desc: 'Verification support for lending, onboarding, and assessment processes.' },
  { title: 'NBFCs', desc: 'Structured verification services designed for consumer and business lending.' },
  { title: 'Housing Finance Companies', desc: 'Verification support for housing and mortgage-related assessment processes.' },
  { title: 'Fintech Companies', desc: 'Information validation services supporting digital lending workflows.' },
  { title: 'Microfinance Institutions', desc: 'Field verification and assessment support tailored to operational needs.' },
  { title: 'Consumer Lending Companies', desc: 'Verification services designed to support applicant review and assessment.' },
]

const PROCESS = [
  { num: '01', title: 'Requirement Assessment', desc: 'Understanding the scope, objectives, and verification requirements.' },
  { num: '02', title: 'Case Assignment', desc: 'Allocation of cases through structured operational workflows.' },
  { num: '03', title: 'Information Review', desc: 'Reviewing submitted information and supporting documentation.' },
  { num: '04', title: 'Verification and Investigation', desc: 'Conducting verification and field investigation activities where required.' },
  { num: '05', title: 'Quality Review', desc: 'Internal review procedures designed to maintain consistency and reporting standards.' },
  { num: '06', title: 'Reporting', desc: 'Providing structured findings and supporting information for client evaluation.' },
]

const FAQS = [
  { q: 'What is Loan Application Verification?', a: 'It is the process of confirming the details applicants provide as part of the lending and credit review process.' },
  { q: 'Who uses these services?', a: 'Banks, NBFCs, housing finance companies, fintech lenders, and microfinance institutions commonly use them.' },
  { q: 'What does the process include?', a: 'It may include residence verification, office verification, business verification, CPV, document verification, field investigation, and assessment support.' },
  { q: 'Does Brighto India provide field investigation support?', a: 'Yes. We provide field investigation support for cases that need additional verification and assessment.' },
  { q: 'Can this service support loan approval workflows?', a: 'Yes. Structured verification can support underwriting, review, and approval workflows.' },
  { q: 'How can I get started?', a: 'Contact our team to discuss your verification requirements, scope, and lending workflow.' },
]

export default function LoanApplicationVerificationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Loan Verification Since 2015"
        title="Loan Application Verification Services for"
        titleAccent="Informed Lending Decisions"
        description="Need greater confidence before progressing a loan application? Since 2015, Brighto India has provided independent Loan Application Verification Services that support financial institutions through structured verification, field investigations, document reviews, and reporting."
        primaryCta="Talk to Our Experts"
        secondaryCta="Request Consultation"
        accentColor="#091C8C"
        accentLight="#eef2ff"
        accentBorder="#c7d2fe"
        gridStroke="#BFDBFE"
        blob1="#93c5fd"
        blob2="#818cf8"
        blob3="#f97316"
        breadcrumb="Loan Application Verification"
        breadcrumbHref="/services/loan-application-verification"
        stats={[
          { val: '2015', label: 'Serving Since', sub: 'Decade of experience', color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
          { val: '500K+', label: 'Cases Supported', sub: 'Across India', color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
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
                Introducing Brighto India: Loan Application Verification Company
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>Verification is at the core of every reliable lending process. Since 2015, Brighto India has combined verification expertise, field investigations, document reviews, and structured reporting to help financial institutions strengthen Loan Application Verification processes.</p>
                <p>We support banks, NBFCs, housing finance companies, fintech lenders, and microfinance groups that need a dependable partner for checking applicant details and supporting internal review work.</p>
                <p className="sm:col-span-2">As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, we follow established standards for information security, quality management, and data protection across every engagement.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/businessman-reading-contract.jpg"
                  alt="Brighto India loan application verification professional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-900">
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
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Strengthen Lending Reviews</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Strengthen Lending Reviews with Structured Loan Application Verification
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Every loan request includes details that must be verified before the bank or lender moves ahead in its internal approval process. Banks, NBFCs, housing finance firms, fintech lenders, and microfinance groups often need external help to ensure the information is reliable and their review systems work effectively.</p>
                  <p>Brighto India delivers Loan Application Verification Services designed to help lenders verify facts, conduct field visits, review documents, and prepare clear reports. Our work gives organizations better visibility into applicant details and supports smarter lending decisions.</p>
                  <p>By linking these checks with assessment support, we help clients build a more dependable verification workflow that fits their operational needs.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
                <Image
                  src="/corporate-boardroom.jpg"
                  alt="Brighto India team analyzing loan verification details"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team - Pan-India Coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Loan Application Verification?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>Loan Application Verification means confirming the details that applicants provide as part of the lending and credit review process.</p>
                <p>The goal is to support internal reviews by checking key facts independently and recording what we find through structured verification steps.</p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Loan Application Verification may include:</p>
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
        heading="Our Loan Application Verification Services"
        services={SERVICES}
        accentColor="#091C8C"
        ctaText="Need a custom loan verification plan?"
        ctaDesc="Our team will assess your verification requirements and recommend the right approach for your lending workflow."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why Loan Application Verification Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">Solid facts are key to lending and credit review work. Organized check steps help groups improve information quality and strengthen their internal review systems.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY.map((item, i) => (
                <div key={item.title} className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY.length - 1 ? 'sm:col-span-2' : ''}`} style={{ background: 'color-mix(in srgb, #eef2ff 55%, white 45%)', borderColor: '#c7d2fe', boxShadow: '0 2px 16px 0 #c7d2fe88, inset 0 1px 0 rgba(255,255,255,0.8)' }}>
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
              Why Choose Brighto India?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ background: 'color-mix(in srgb, #eef2ff 50%, white 50%)', borderColor: '#c7d2fe', boxShadow: '0 4px 24px -4px #c7d2fe99, inset 0 1px 0 rgba(255,255,255,0.9)' }}>
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
            <p className="text-slate-400 mt-4 text-base">Brighto India helps groups working in many lending and finance areas.</p>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Our Loan Verification Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step) => (
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
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Our Verification Framework</p>
              <p className="text-sm text-amber-900 leading-relaxed">Brighto India's Loan Application Verification Services are conducted based on information available at the time of assessment and within the agreed scope of work. Findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside internal underwriting policies, risk assessment criteria, and decision-making frameworks.</p>
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
            <span className="text-xs font-bold text-white uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let's Build a More Reliable Verification Process
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            From residence checks to field visits, Brighto India provides lenders with organized Loan Application Verification Services that strengthen fact-checking and assessment processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request a Consultation Today
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
