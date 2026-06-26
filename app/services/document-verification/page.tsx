import type { Metadata } from 'next'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/faq-accordion'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOfferings } from '@/components/service-offerings'

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
  { icon: 'BadgeCheck',    title: 'Identity Document Verification',   desc: 'Support information validation through structured review of identity-related documentation and supporting records.',           color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
  { icon: 'FileSearch',    title: 'Address Document Verification',    desc: 'Validate address-related information through defined document review and verification procedures.',                           color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { icon: 'Briefcase',     title: 'Employment Document Verification', desc: 'Review employment-related documents to support onboarding, lending, and assessment processes.',                                color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
  { icon: 'FileText',      title: 'Financial Document Verification',  desc: 'Support financial assessment activities through structured review of submitted financial documentation.',                     color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { icon: 'Building2',     title: 'Business Document Verification',   desc: 'Validate business-related information through review of organizational and operational documents.',                           color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
  { icon: 'ClipboardList', title: 'Supporting Document Review',       desc: 'Assess supporting documentation through established verification methodologies and reporting practices.',                     color: '#0891b2', bg: '#f0fdfa', border: '#a5f3fc' },
  { icon: 'ListChecks',    title: 'Information Validation Support',   desc: 'Strengthen review frameworks through structured document verification and assessment support services.',                      color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { icon: 'FileCheck',     title: 'Verification Reporting',           desc: 'Receive organized reporting that documents verification observations and supporting information for evaluation purposes.',    color: '#65a30d', bg: '#f7fee7', border: '#d9f99d' },
]

const BENEFITS = [
  { title: 'Improve Information Validation',  desc: 'Structured document verification supports the validation of information submitted during operational and assessment processes.' },
  { title: 'Strengthen Review Frameworks',    desc: 'Independent review activities contribute to more consistent document assessment procedures.' },
  { title: 'Enhance Information Visibility',  desc: 'Document verification provides additional visibility into submitted information and supporting records.' },
  { title: 'Support Assessment Processes',    desc: 'Verification findings may assist organizations during onboarding, lending, and operational review activities.' },
  { title: 'Improve Process Consistency',     desc: 'Defined methodologies help organizations maintain consistency across document review and verification workflows.' },
]

const WHY_BRIGHTO = [
  { svgPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', title: 'Process-Driven Verification Methodology', desc: 'Our document verification services follow structured review procedures designed to support consistency and reporting quality.' },
  { svgPath: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21', title: 'Industry-Focused Expertise', desc: 'Brighto India supports banks, NBFCs, housing finance companies, fintech organizations, insurance providers, and enterprises.' },
  { svgPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Secure & Compliance-Oriented Operations', desc: 'Our verification processes are supported by established information security, quality management, and operational controls.' },
  { svgPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', title: 'Structured Reporting Framework', desc: 'Verification observations are documented through organized reporting formats that support client review processes.' },
  { svgPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', title: 'Experienced Verification Team', desc: 'Our team follows defined verification procedures designed to support information validation requirements across industries.' },
  { svgPath: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z', title: 'Pan-India Operational Reach', desc: 'Brighto India supports document verification requirements across multiple locations and operational environments.' },
]

const INDUSTRIES = [
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>, title: 'Banking', desc: 'Document verification support for onboarding, lending, and customer review processes.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, title: 'NBFCs', desc: 'Structured document review services aligned with lending and assessment requirements.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>, title: 'Housing Finance Companies', desc: 'Verification support for mortgage and housing finance assessment workflows.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>, title: 'Fintech Companies', desc: 'Document verification services supporting digital onboarding and customer validation requirements.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>, title: 'Insurance Companies', desc: 'Information validation support for policyholder and customer documentation reviews.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>, title: 'Microfinance Institutions', desc: 'Document verification and assessment support tailored to operational requirements.' },
  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>, title: 'Enterprises', desc: 'Verification solutions designed to support onboarding, compliance, and operational review processes.' },
]

const PROCESS = [
  { num: '01', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>, title: 'Requirement Assessment', desc: 'Understanding review objectives, scope, and verification requirements.' },
  { num: '02', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Document Collection & Review', desc: 'Reviewing submitted documents and supporting information.' },
  { num: '03', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>, title: 'Verification Activities', desc: 'Conducting validation procedures in accordance with the agreed scope of work.' },
  { num: '04', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Quality Review', desc: 'Reviewing collected information through defined quality control procedures.' },
  { num: '05', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>, title: 'Assessment & Documentation', desc: 'Compiling observations and supporting information for review purposes.' },
  { num: '06', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>, title: 'Reporting', desc: 'Providing structured reports to support client evaluation and decision-making processes.' },
]

const FAQS = [
  { q: 'What is Document Verification?', a: 'Document Verification is the process of reviewing and validating information contained within submitted documents through structured verification and assessment procedures.' },
  { q: 'Who uses Document Verification Services?', a: 'Banks, NBFCs, housing finance companies, fintech organizations, insurance providers, enterprises, and other organizations commonly use document verification services.' },
  { q: 'What types of documents can be reviewed?', a: 'Depending on organizational requirements, document verification services may include identity documents, proof of address, employment records, financial documents, business records, and supporting documentation submitted during onboarding, assessment, or review processes.' },
  { q: 'Why is Document Verification important?', a: 'Document Verification supports information validation, strengthens review processes, and helps organizations improve visibility into submitted information.' },
  { q: 'Does Brighto India provide document review support for financial institutions?', a: 'Yes. Brighto India supports financial institutions through structured document verification and information validation services.' },
]

export default function DocumentVerificationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />

      <ServiceHero
        badge="Document Verification Since 2015"
        title="India's Trusted Partner for"
        titleAccent="Document Verification Services"
        description="Incomplete, inconsistent, or unverifiable documentation can impact onboarding, lending, and assessment processes. Since 2015, Brighto India has provided Document Verification Services to help organizations with structured document review, information validation, and verification reporting."
        primaryCta="Request Consultation"
        secondaryCta="View Our Services"
        accentColor="#15803d"
        accentLight="#f0fdf4"
        accentBorder="#bbf7d0"
        gridStroke="#86EFAC"
        blob1="#4ade80"
        blob2="#86efac"
        blob3="#34d399"
        breadcrumb="Document Verification"
        breadcrumbHref="/services/document-verification"
        stats={[
          { val: '2015',      label: 'Founded',             sub: 'Trusted since day one',           color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0' },
          { val: '500K+',     label: 'Verifications Done',  sub: 'Across India',                    color: '#0891b2', bg: '#f0fdfa', border: '#a5f3fc' },
          { val: 'Pan-India', label: 'Coverage',            sub: 'Multi-location reach',            color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
          { val: '3 Certs',   label: 'Certifications',      sub: 'ISO 27001 · ISO 9001 · SOC 2',    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
        ]}
      />

      {/* ABOUT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">About Brighto India</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-3xl mb-8">Trusted Verification &amp; Assessment Support</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-600 leading-relaxed text-sm">
                <p>Brighto India works with financial institutions, NBFCs, housing finance companies, fintech companies, insurance providers, and enterprises. We deliver Document Verification Services built to strengthen information validation and review processes.</p>
                <p>Our experience covers due diligence, loan application verification, contact point verification, field investigation, and document review support. This enables organizations to maintain consistent verification practices across their operational workflows.</p>
                <p className="sm:col-span-2">As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited organization, Brighto India follows established standards for information security, quality management, and data protection across its verification and assessment operations.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
                <Image
                  src="/businessman-reading-contract.jpg"
                  alt="Brighto India document verification professional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-green-900">
                    ISO 27001 · ISO 9001 · SOC 2 Audited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHEN + WHAT IS DV */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">Strengthen Information Validation Through Document Verification</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p>Documents play a critical role in onboarding, lending, compliance, and operational review processes. Organizations often need independent validation of submitted information to strengthen internal review frameworks and improve information visibility.</p>
                  <p>Brighto India&apos;s Document Verification Services help review and validate documents through structured verification methodologies, information assessment procedures, and organized reporting frameworks. Our services help organizations maintain consistency across document review processes while supporting informed assessment activities.</p>
                  <p>Whether working with banks, NBFCs, housing finance companies, fintech companies, insurance providers, or enterprises, Brighto India delivers process-driven document verification services tailored to operational requirements.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-16/7">
                <Image
                  src="/corporate-boardroom.jpg"
                  alt="Brighto India document verification team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-green-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold drop-shadow">Expert Team · Pan-India Coverage</span>
                </div>
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
                {['Identity Document Verification', 'Address Document Verification', 'Employment Document Review', 'Financial Document Verification', 'Business Document Verification', 'Supporting Documentation Assessment', 'Information Validation', 'Verification Reporting'].map((item) => (
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

      {/* DV SERVICES */}
      <ServiceOfferings
        heading="Our Document Verification Services"
        services={DV_SERVICES}
        accentColor="#15803d"
        ctaText="Need Document Verification Support?"
        ctaDesc="Our team can help assess your requirements and recommend the right approach."
      />

      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Benefits of Document Verification Services</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Accurate documentation forms the foundation of many onboarding, lending, assessment, and compliance-related processes. Independent document review and validation activities help organizations strengthen information quality and improve operational consistency.</p>
            </div>
            <div className="space-y-4">
              {BENEFITS.map((b, i) => (
                <div key={b.title} className="rounded-2xl border p-6 flex gap-4 backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: 'color-mix(in srgb, #f0fdf4 55%, white 45%)', borderColor: '#bbf7d0', boxShadow: '0 2px 16px 0 #bbf7d088, inset 0 1px 0 rgba(255,255,255,0.8)' }}
                >
                  <span className="w-10 h-10 rounded-xl bg-green-700 text-white text-sm font-extrabold flex items-center justify-center shrink-0">{String(i + 1).padStart(2, '0')}</span>
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

      {/* WHY BRIGHTO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">Why Brighto India</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Why Choose Brighto India for Document Verification Services?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BRIGHTO.map((item) => (
              <div key={item.title} className="group rounded-2xl border p-6 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'color-mix(in srgb, #f0fdf4 50%, white 50%)', borderColor: '#bbf7d0', boxShadow: '0 4px 24px -4px #bbf7d099, inset 0 1px 0 rgba(255,255,255,0.9)' }}
              >
                <span className="w-10 h-10 rounded-xl bg-white border border-green-200 group-hover:bg-green-700 group-hover:border-green-700 flex items-center justify-center mb-4 transition-all text-green-700 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                  </svg>
                </span>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2 block">Sectors We Serve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Industries We Serve</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6 hover:border-green-600 hover:bg-slate-800/80 transition-all text-green-400">
                {ind.svg}
                <h3 className="font-bold text-white text-sm mb-2 mt-3">{ind.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Document Verification Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex gap-4">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-2xl font-extrabold text-green-700/30">{step.num}</span>
                  <span className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center text-white">{step.svg}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-slate-900 mb-1.5 leading-snug">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK DISCLAIMER */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 items-start">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-amber-600 shrink-0 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div>
              <p className="text-sm font-bold text-amber-900 mb-1">Our Verification Framework</p>
              <p className="text-sm text-amber-800 leading-relaxed">Brighto India&apos;s Document Verification Services are conducted based on information available at the time of assessment and within the agreed scope of work. Verification findings, observations, and supporting information are intended to assist client review processes and should be evaluated alongside internal policies, assessment criteria, and decision-making frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Let&apos;s Discuss Your Verification Requirements</h2>
          <p className="text-green-100 text-base leading-relaxed mb-8 max-w-2xl mx-auto">Whether you require identity document verification, address validation, employment document review, financial document verification, or business document assessment support, our team can recommend an approach aligned with your operational requirements.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-white text-green-800 rounded-xl font-bold text-sm hover:bg-green-50 transition-all hover:shadow-lg inline-flex items-center gap-2">
              Request a Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-green-400 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">Contact Our Team</Link>
          </div>
        </div>
      </section>

      <BrightoFooter />
    </div>
  )
}
