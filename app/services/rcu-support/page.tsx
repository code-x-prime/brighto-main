import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

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
  { icon: 'Search',       title: 'Field Investigation Support',   desc: 'Help meet information validation requirements by following organized field visit and written report steps.',                               color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
  { icon: 'AlertTriangle',title: 'Exception Case Review',         desc: 'Independent review support for situations requiring additional verification, investigation, and assessment.',                              color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { icon: 'Home',         title: 'Residence Verification',        desc: 'Confirm the home address using structured verification steps that support review and assessment work.',                                    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { icon: 'Briefcase',    title: 'Office Verification',           desc: 'Help confirm job details through separate, independent verification steps and reporting systems.',                                         color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
  { icon: 'Building2',    title: 'Business Verification',         desc: 'Check business details with careful verification and investigation activities.',                                                           color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'CheckCircle2', title: 'Information Validation Support', desc: 'Build stronger review systems with structured information validation and assessment support services.',                                   color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
  { icon: 'FileText',     title: 'Document Review Support',       desc: 'Help the company review processes by checking and validating the papers people submit.',                                                   color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
  { icon: 'FileCheck',    title: 'Verification Reporting',        desc: 'Get clear reports with final results and backup details ready for review.',                                                                color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
]

const RCU_INCLUDES = [
  'Field Investigation Support', 'Residence Verification', 'Office Verification',
  'Business Verification', 'Information Validation', 'Document Review Support',
  'Exception Case Assessment', 'Verification Reporting',
]

const WHY_MATTERS = [
  { title: 'Improve Information Visibility',   desc: 'Independent verification steps give groups a better view of the details that need review.' },
  { title: 'Strengthen Review Frameworks',      desc: 'Planned RCU help leads to independent verification and assessment steps.' },
  { title: 'Support Risk Assessment Activities',desc: 'Checking results and notes can help groups in their own review and evaluation steps.' },
  { title: 'Enhance Information Validation',    desc: 'Independent investigations corroborate the details provided in daily work and loan steps.' },
  { title: 'Improve Operational Consistency',   desc: 'Defined methodologies keep review, check, and report steps consistent across the board.' },
]

const WHY_BRIGHTO = [
  { title: 'Financial Services Expertise',          desc: 'Brighto India helps banks, NBFCs, housing finance companies, fintech groups, and other finance organizations with specialized verification and investigation services.' },
  { title: 'Process-Driven Investigation Support',  desc: 'Our RCU services use established methods that ensure consistency, transparency, and high-quality reporting.' },
  { title: 'Experienced Verification Network',       desc: 'We combine operational expertise with field investigation skills spread over multiple places.' },
  { title: 'Secure & Compliance-Focused Operations', desc: 'Our processes are supported by solid data safety, quality rules, and daily controls.' },
  { title: 'Structured Reporting Framework',         desc: 'Check notes go into clear report formats that feed company review steps.' },
  { title: 'Pan-India Operational Reach',            desc: 'Our check network gives help across different areas and work settings.' },
]

const INDUSTRIES = [
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>, label: 'Banking', desc: 'Verification and investigation support for the loan and customer review steps.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, label: 'NBFCs', desc: 'Planned RCU support services that match lending and daily review needs.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>, label: 'Housing Finance Companies', desc: 'Data confirmation and investigation help for housing loan review flows.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>, label: 'Fintech Companies', desc: 'Check services that back digital loans and customer review steps.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>, label: 'Microfinance Institutions', desc: 'Field investigation and verification support shaped for daily needs.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>, label: 'Consumer Lending Companies', desc: 'Independent verification services that back assessment and review work.' },
]

const PROCESS_STEPS = [
  { num: '01', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>, title: 'Requirement Assessment', desc: 'Learning the review goals, limits, and daily needs.' },
  { num: '02', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>, title: 'Case Assignment', desc: 'Sending out cases through structured daily workflows.' },
  { num: '03', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>, title: 'Verification & Investigation', desc: 'Running verification activities, field investigations, and information validation processes.' },
  { num: '04', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Quality Review', desc: 'Going over gathered details with end to end quality review steps.' },
  { num: '05', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>, title: 'Assessment & Documentation', desc: 'Putting together notes, back-up details, and investigation results.' },
  { num: '06', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>, title: 'Reporting', desc: 'Giving organized reports for the client to review and judge.' },
]

const FAQS = [
  { q: 'What is Risk Containment Unit (RCU) Support?', a: 'RCU Support covers structured verification, investigation, and information validation activities that support groups during risk review and assessment.' },
  { q: 'Which organizations use RCU Support Services?', a: 'Banks, NBFCs, housing finance companies, fintech groups, and other finance organizations often use RCU support services.' },
  { q: 'What services are included in RCU Support?', a: 'RCU Support can cover field investigations, residence verification, office verification, business verification, document review support, information validation, and reporting services.' },
  { q: 'Does Brighto India provide field investigation services?', a: 'Yes. Brighto India gives field investigation and verification support services built to help organizations in the review and assessment steps.' },
  { q: 'How does RCU Support help financial institutions?', a: 'RCU Support provides independently verified information and documented observations to help organizations with their own review and assessment work.' },
  { q: 'Does Brighto India offer pan-India RCU Support?', a: 'Yes. Brighto India fulfills support verification and investigation requirements across multiple locations through its operational network.' },
  { q: "How can I get started with Brighto India's RCU Support Services?", a: 'Reach out to our team to discuss your verification requirements, assessment goals, and daily needs. We will suggest the right help plan based on your limits and needs.' },
]

export default function RCUSupportPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="RCU Support Since 2015"
        title="Risk Containment Unit"
        titleAccent="(RCU) Support Services"
        subtitle="for Stronger Risk Assessment Processes"
        description="Lending teams sometimes face unclear details, missing checks, and special situations that need extra attention. Brighto India offers Risk Containment Unit (RCU) Support Services to help banks and lenders with structured verification, investigation, information validation, and reporting support."
        primaryCta="Request Consultation"
        secondaryCta="Contact Our Team"
        accentColor="#dc2626"
        accentLight="#fef2f2"
        accentBorder="#fecaca"
        gridStroke="#FECACA"
        blob1="#fca5a5"
        blob2="#fed7aa"
        blob3="#c7d2fe"
        breadcrumb="RCU Support Services"
        breadcrumbHref="/services/rcu-support"
        stats={[
          { val: '2015',      label: 'Serving Since',   sub: 'Decade of RCU expertise',   color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
          { val: '500K+',     label: 'Cases Supported', sub: 'Across India',               color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
          { val: 'Pan-India', label: 'Field Coverage',  sub: 'Multi-geography network',    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
          { val: '3 Certs',   label: 'ISO + SOC 2',     sub: 'Internationally audited',    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      {/* ABOUT */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Trusted RCU Support Partner Since 2015
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-base">
                <p>Since 2015, Brighto India has worked with banks, NBFCs, housing finance companies, fintech companies, and similar groups by providing structured Risk Containment Unit (RCU) Support Services that improve risk review and assessment processes.</p>
                <p>Our team has extensive experience in due diligence, loan application verification, contact point verification, field investigation, and information validation, helping organizations build consistent verification and assessment frameworks.</p>
                <p className="sm:col-span-2">As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, Brighto India follows established standards for information security, quality management, and data protection while delivering structured verification, investigation, and assessment support services.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
                <Image
                  src="/contract-signing-biz.jpg"
                  alt="Brighto India RCU support team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-red-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-red-900">
                    ISO 27001 · ISO 9001 · SOC 2 Audited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHEN / WHAT IS RCU */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Strengthen Risk Frameworks</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Strengthen Risk Review Frameworks Through RCU Support Services
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Banks and lenders work in a world where information accuracy and structured review processes really matter. Some situations call for additional verification, investigation, or assessment support before they move ahead in company systems.</p>
                  <p>Brighto India&apos;s Risk Containment Unit (RCU) Support Services give organizations help through structured verification activities, field investigations, information validation, and assessment-driven reporting. These services help financial lenders to go over the submitted details, evaluate the reports, and build stronger internal verification processes with independent investigation support.</p>
                  <p>No matter if we help banks, NBFCs, housing finance companies, fintech lenders, or other finance groups, our team provides process-oriented RCU support that fits exactly what the daily operations need.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-16/7">
                <Image
                  src="/field-visit-residential.jpg"
                  alt="Brighto India RCU field investigation"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-red-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team · Pan-India Coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">The Basics</p>
              <h3 className="text-2xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                What is Risk Containment Unit (RCU) Support?
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                <p>Risk Containment Unit (RCU) Support refers to structured verification, investigation, and information validation activities that assist financial groups through the risk review and assessment steps.</p>
                <p>Companies often turn to RCU support services for additional validation, field investigations, document reviews, or assessment support for specific files. The goal is to provide clear, verified details and written information that feed into company review systems.</p>
                <p>These steps help groups strengthen their review methods and back up decisions with solid data.</p>
              </div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">RCU Support may include:</p>
              <ul className="space-y-2.5">
                {RCU_INCLUDES.map((item) => (
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

      {/* OUR RCU SERVICES */}
      <ServiceOfferings
        heading="Our Risk Containment Unit (RCU) Support Services"
        services={RCU_SERVICES}
        accentColor="#dc2626"
        ctaText="Need a custom RCU support plan?"
        ctaDesc="Our experts will assess your requirements and recommend the right verification and investigation approach for your organization."
      />

      {/* WHY RCU MATTERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Why RCU Support Matters</h2>
              <p className="text-slate-600 leading-relaxed">Steps included in risk reviews often need independent verification, additional detail, and investigative support to strengthen internal assessment systems.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MATTERS.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === WHY_MATTERS.length - 1 ? 'sm:col-span-2' : ''}`}
                  style={{ background: 'color-mix(in srgb, #fef2f2 55%, white 45%)', borderColor: '#fecaca', boxShadow: '0 2px 16px 0 #fecaca88, inset 0 1px 0 rgba(255,255,255,0.8)' }}
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center text-xs font-black mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BRIGHTO */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Why Choose Brighto India for RCU Support Services?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border p-7 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'color-mix(in srgb, #fef2f2 50%, white 50%)', borderColor: '#fecaca', boxShadow: '0 4px 24px -4px #fecaca99, inset 0 1px 0 rgba(255,255,255,0.9)' }}
              >
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

      {/* INDUSTRIES */}
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
            <p className="text-slate-400 mt-4 text-base">Brighto India provides RCU Support Services across financial sectors where risk review and verification are critical.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex gap-4 items-start hover:border-blue-700 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-900/50 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:border-blue-900 transition-all text-blue-300 group-hover:text-white">{ind.svg}</div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{ind.label}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{ind.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Our RCU Support Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-sm shrink-0">{step.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900">{step.svg}</div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK DISCLAIMER */}
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
              <p className="text-sm text-amber-900 leading-relaxed">Brighto India&apos;s Risk Containment Unit (RCU) Support Services are conducted based on the information available at the time of assessment and within the agreed scope of work. Verification findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside internal risk policies, assessment criteria, and decision-making frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Questions Answered</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* FINAL CTA */}
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
            Let&apos;s Discuss Your Verification &amp; Investigation Requirements
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Whether you need field investigation support, residence verification, office verification, business verification, exception case reviews, or information validation services, our team can suggest a good plan that fits your daily work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Request a Consultation
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
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
