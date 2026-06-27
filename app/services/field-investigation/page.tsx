import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

export const metadata: Metadata = {
  title: 'Field Investigation (FI) Services India | Brighto India',
  description:
    'Brighto India provides structured Field Investigation (FI) Services since 2015 for banks, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises across India.',
  keywords: [
    'field investigation services India',
    'FI services',
    'field verification',
    'on-site investigation',
    'information validation services',
    'Brighto India field investigation',
    'verification services India',
  ],
  alternates: { canonical: '/services/field-investigation' },
  openGraph: {
    title: 'Field Investigation (FI) Services India | Brighto India',
    description:
      'Structured Field Investigation (FI) Services for banks, NBFCs, fintechs, insurers, and enterprises across India.',
    url: 'https://www.brightoindia.com/services/field-investigation',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
  },
}

const SERVICES = [
  { icon: 'Home', title: 'Residence Investigation', desc: 'Independently validate residential information through well-defined field investigations, physical observations, and organized reporting.', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
  { icon: 'Briefcase', title: 'Office Investigation', desc: 'Assess employment-related information through on-site office investigations and documented verification activities.', color: '#0b7285', bg: '#ecfeff', border: '#a5f3fc' },
  { icon: 'Building2', title: 'Business Investigation', desc: 'Verify business-related details through field investigations, operational assessments, and independent verification methods.', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
  { icon: 'Search', title: 'Field Verification', desc: 'Conduct standardized field verification to validate information through physical visits and documented observations.', color: '#0ea5a4', bg: '#f0fdfa', border: '#99f6e4' },
  { icon: 'FileText', title: 'Information Validation', desc: 'Strengthen internal review processes with well-defined information validation backed by independent field investigations.', color: '#0891b2', bg: '#f0f9ff', border: '#bae6fd' },
  { icon: 'FileCheck', title: 'Document Review Support', desc: 'Review supporting documents together with field investigation findings to improve information validation and assessment.', color: '#0891b2', bg: '#f8fafc', border: '#cbd5e1' },
  { icon: 'AlertTriangle', title: 'Exception Case Investigation', desc: 'Handle additional investigations for cases that need deeper verification and further operational review.', color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'CheckCircle2', title: 'Investigation Reporting', desc: 'Deliver standardized investigation reports that document observations, verification findings, and supporting information for easy client review.', color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
]

const INCLUDES = [
  'Residence Investigation',
  'Office Investigation',
  'Business Investigation',
  'Field Verification',
  'Information Validation',
  'Document Review Support',
  'Exception Case Investigation',
  'Investigation Reporting',
]

const WHY_MATTERS = [
  { title: 'Improve Information Validation', desc: 'Independent field investigations strengthen validation through verification activities and documented observations.' },
  { title: 'Strengthen Review Frameworks', desc: 'Defined investigation methods help create consistent internal review and assessment processes.' },
  { title: 'Support Lending & Business Reviews', desc: 'Field investigation findings can assist during lending reviews, customer assessments, and operational evaluations.' },
  { title: 'Enhance Operational Visibility', desc: 'On-the-ground investigations provide additional visibility into information that needs independent verification.' },
  { title: 'Support Risk Assessment Processes', desc: 'Independent verification findings can support organizational risk assessment and internal review requirements.' },
]

const WHY_BRIGHTO = [
  { title: 'Independent Investigation Expertise', desc: 'We have extensive experience in field investigations, verification activities, and information validation across many industries.' },
  { title: 'Experienced Investigation Team', desc: 'Our professionals follow structured field investigation methodologies to ensure consistency and high-quality reporting.' },
  { title: 'Process-Driven Investigation Methodology', desc: 'Every field investigation follows defined operational procedures that align with the agreed-upon verification requirements.' },
  { title: 'Secure & Compliance-Oriented Operations', desc: 'Our operations follow established information security, quality management, and data protection standards.' },
  { title: 'Structured Investigation Reporting', desc: 'We document verification findings and observations in organized report formats that support client review.' },
  { title: 'Pan-India Operational Reach', desc: 'Our investigation network supports field investigation requirements across multiple locations in India.' },
]

const INDUSTRIES = [
  { title: 'Banking', desc: 'Field investigation services supporting lending reviews, customer verification, and operational assessment processes.' },
  { title: 'NBFCs', desc: 'Independent field investigation services supporting lending reviews, customer verification, and operational assessment requirements.' },
  { title: 'Housing Finance Companies', desc: 'Field investigations supporting mortgage-related verification and customer assessment workflows.' },
  { title: 'Fintech Companies', desc: 'Structured investigation services supporting digital onboarding and customer verification processes.' },
  { title: 'Insurance Companies', desc: 'Information validation and investigation support for customer and operational review requirements.' },
  { title: 'Microfinance Institutions', desc: 'Independent field investigations supporting operational verification and assessment activities.' },
  { title: 'Enterprises', desc: 'Field investigation services designed to support business verification, operational reviews, and internal assessment processes.' },
]

const PROCESS = [
  { num: '01', title: 'Requirement Assessment', desc: 'We understand investigation objectives, verification requirements, and the agreed scope of work.' },
  { num: '02', title: 'Case Assignment', desc: 'We assign investigation cases through defined operational workflows.' },
  { num: '03', title: 'Field Investigation', desc: 'We conduct independent on-ground verification activities and operational observations.' },
  { num: '04', title: 'Information Validation', desc: 'We validate collected information through process-driven verification methodologies.' },
  { num: '05', title: 'Quality Review', desc: 'We review investigation findings through defined quality control procedures.' },
  { num: '06', title: 'Reporting', desc: 'We provide process-driven investigation reports documenting observations and supporting information for client review.' },
]

const FAQS = [
  { q: 'What are Field Investigation (FI) Services?', a: 'Field Investigation (FI) Services involve independent on-ground verification activities designed to validate information through structured investigations and reporting.' },
  { q: 'Who uses Field Investigation Services?', a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, microfinance institutions, and enterprises commonly use Field Investigation Services.' },
  { q: 'What activities are included in Field Investigation Services?', a: 'Services may include residence investigations, office investigations, business investigations, field verification, information validation, document review support, and investigation reporting.' },
  { q: 'How do Field Investigation Services support organizations?', a: 'Field investigations provide independently verified information and documented observations that can assist internal review, assessment, and decision-making processes.' },
  { q: 'Does Brighto India provide Pan-India Field Investigation Services?', a: 'Yes. Brighto India supports field investigation requirements across multiple locations in India, depending on the agreed project scope and operational requirements.' },
  { q: 'How can I get started with Brighto India?', a: 'Contact our team to discuss your verification requirements, operational objectives, and service scope. We will recommend the appropriate investigative approach aligned with your operational requirements and the agreed scope of work.' },
]

export default function FieldInvestigationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Field Investigation Since 2015"
        title="Field Investigation (FI) Services For"
        titleAccent="Independent Verification & Assessment"
        description="Need independent field verification to validate critical information? Independent field investigations help organizations verify information through on-the-ground assessments, consistent observations, and reporting prior to important business and lending decisions."
        primaryCta="Request Consultation"
        secondaryCta="Contact Our Team"
        accentColor="#0f766e"
        accentLight="#f0fdfa"
        accentBorder="#99f6e4"
        gridStroke="#5eead4"
        blob1="#99f6e4"
        blob2="#5eead4"
        blob3="#a78bfa"
        breadcrumb="Field Investigation"
        breadcrumbHref="/services/field-investigation"
        stats={[
          { val: '2015', label: 'Serving Since', sub: 'Decade of experience', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
          { val: '500K+', label: 'Cases Supported', sub: 'Across India', color: '#0ea5a4', bg: '#f0fdfa', border: '#99f6e4' },
          { val: 'Pan-India', label: 'Coverage', sub: 'Multi-geography reach', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs', label: 'ISO + SOC 2', sub: 'Internationally audited', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                About Brighto India
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>Brighto India is an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company that delivers consistent Field Investigation (FI) Services for banks, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises.</p>
                <p>Since 2015, we have delivered independent field investigations alongside due diligence, loan application verification, contact point verification, document verification, and information validation services, helping organizations strengthen consistent review and assessment processes.</p>
                <p className="sm:col-span-2">Our investigation support is structured to help clients review information through on-the-ground checks, documented observations, and clear reporting while staying within the agreed scope of work.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/field-visit-residential.jpg"
                  alt="Brighto India field investigation team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-teal-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-teal-900">
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
                <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">One Stop Destination</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  One Stop Destination for Field Investigation (FI) Services
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Important decisions often require more than document-based verification. That&apos;s where independent field investigations come in. Brighto India&apos;s Field Investigation (FI) Services help organizations improve verification through on-ground checks, information validation, organized observations, and reporting.</p>
                  <p>Our services support lending reviews, customer assessments, business verification, operational reviews, and internal risk management through practical field-based verification activities.</p>
                  <p>Whether you work with banks, NBFCs, housing finance companies, fintech companies, insurance providers, or enterprises, Brighto India delivers process-driven Field Investigation Services that match your requirements and agreed scope of work.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
                <Image
                  src="/corporate-boardroom.jpg"
                  alt="Brighto India field investigation team reviewing observations"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-teal-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team - Pan-India Coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What are Field Investigation (FI) Services?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>Field Investigation (FI) Services involve independent on-the-ground verification activities conducted to validate information provided by applicants, customers, businesses, vendors, or others during review and assessment processes.</p>
                <p>These services help organizations through organized field investigations, information validation, operational observations, document reviews, and reporting. Field Investigation Services strengthen internal review frameworks by providing independently verified details and documented observations.</p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Field Investigation Services may include the following:</p>
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
        heading="Our Field Investigation (FI) Services"
        services={SERVICES}
        accentColor="#0f766e"
        ctaText="Need a custom field investigation plan?"
        ctaDesc="Our team will assess your requirements and recommend the right investigative approach for your organization."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Why Field Investigation Services Matter
              </h2>
              <p className="text-slate-600 leading-relaxed">Independent field investigations help organizations confirm information that documents alone cannot fully verify. Independent investigation methods strengthen information validation, improve operational visibility, and support consistent review processes.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div key={item.title} className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`} style={{ background: 'color-mix(in srgb, #f0fdfa 55%, white 45%)', borderColor: '#99f6e4', boxShadow: '0 2px 16px 0 #99f6e488, inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <div className="w-9 h-9 rounded-xl bg-teal-800 text-white flex items-center justify-center text-xs font-black mb-4">{String(i + 1).padStart(2, '0')}</div>
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
            <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Why Choose Brighto India for Field Investigation (FI) Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ background: 'color-mix(in srgb, #f0fdfa 50%, white 50%)', borderColor: '#99f6e4', boxShadow: '0 4px 24px -4px #99f6e499, inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-black text-sm mb-5 group-hover:bg-teal-800 group-hover:text-white group-hover:border-teal-800 transition-all">
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
            <p className="text-slate-400 mt-4 text-base">Brighto India provides field investigation services across many areas where on-the-ground verification is critical.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-teal-700 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-teal-900/30 border border-teal-900/50 flex items-center justify-center shrink-0 group-hover:bg-teal-800 group-hover:border-teal-800 transition-all text-teal-300 group-hover:text-white">
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
            <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Our Field Investigation Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center font-black text-sm shrink-0">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
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
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Our Investigation Framework</p>
              <p className="text-sm text-amber-900 leading-relaxed">Brighto India&apos;s Field Investigation (FI) Services are carried out based on the information available at the time of investigation and within the agreed scope. Investigation findings, observations, and supporting details are intended to assist client review processes and should be considered alongside your internal policies, operational procedures, assessment criteria, and decision-making frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <section className="py-24 bg-teal-800 relative overflow-hidden">
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
            Plan Your Field Investigation with Brighto India
          </h2>
          <p className="text-teal-100 text-lg leading-relaxed mb-10">
            Whether you need residential, office, or business investigations; field verification; information validation or investigative reporting, Brighto India can recommend an investigation approach aligned with your operational requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-teal-50 text-teal-900 rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Contact Our Team
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-bold text-base transition-all">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <BrightoFooter />
    </div>
  )
}
