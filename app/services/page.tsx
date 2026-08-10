'use client'

import Link from 'next/link'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoFooter } from '@/components/brighto-cta-footer'
import { ServiceOfferings } from '@/components/service-offerings'
import {
  FileSearch, Building2, Search, MapPin, Shield, FileCheck, AlertTriangle, CreditCard,
  ArrowRight, CheckCircle2
} from 'lucide-react'

const ALL_SERVICES = [
  {
    icon: 'FileSearch',
    title: 'Due Diligence Services',
    desc: 'Comprehensive verification of facts, business information, and potential risks before significant business decisions. Our structured approach helps clients make confident assessments.',
    color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe',
    href: '/services/due-diligence',
    features: ['Business Verification', 'Risk Assessment', 'Financial Analysis', 'Compliance Checks'],
  },
  {
    icon: 'Building2',
    title: 'Loan Application Verification',
    desc: 'End-to-end verification support for lenders, banks, NBFCs, and fintech firms — verifying applicant details through systematic checks to improve loan processing.',
    color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd',
    href: '/services/loan-application-verification',
    features: ['Income Verification', 'Employment Check', 'Address Verification', 'Document Validation'],
  },
  {
    icon: 'Search',
    title: 'Field Investigation (FI)',
    desc: 'On-ground verification providing independent checks that confirm details in loan files and business requirements for lenders and financial institutions.',
    color: '#c2410c', bg: '#fff7ed', border: '#fed7aa',
    href: '/services/field-investigation',
    features: ['Physical Verification', 'Site Visits', 'Asset Inspection', 'Ground Truth Check'],
  },
  {
    icon: 'MapPin',
    title: 'Contact Point Verification (CPV)',
    desc: 'Verify home addresses, office locations, and business premises through structured field checks — a critical component in lending verification.',
    color: '#059669', bg: '#f0fdf4', border: '#a7f3d0',
    href: '/services/contact-point-verification',
    features: ['Address Verification', 'Office Confirmation', 'Residence Check', 'GPS Tracking'],
  },
  {
    icon: 'Shield',
    title: 'RCU Support',
    desc: 'Strengthen your internal risk checks with investigative support, verification, and fact-checking — helping clients manage lending and operational risks.',
    color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc',
    href: '/services/rcu-support',
    features: ['Risk Intelligence', 'Fraud Investigation', 'Data Analysis', 'Compliance Support'],
  },
  {
    icon: 'FileCheck',
    title: 'Document Verification',
    desc: 'Verify identity documents, financial records, business files, and other critical documents — following structured steps that support internal reviews.',
    color: '#b45309', bg: '#fffbeb', border: '#fde68a',
    href: '/services/document-verification',
    features: ['ID Verification', 'Financial Docs', 'Business Papers', 'Digital Validation'],
  },
  {
    icon: 'AlertTriangle',
    title: 'Fraud Risk Assessment',
    desc: 'Identify potential risks through systematic checks and investigations. Our clear methodology strengthens risk review systems and control frameworks.',
    color: '#dc2626', bg: '#fef2f2', border: '#fecaca',
    href: '/services/fraud-risk-assessment',
    features: ['Fraud Detection', 'Risk Scoring', 'Investigation', 'Preventive Controls'],
  },
  {
    icon: 'CreditCard',
    title: 'Credit Appraisal Support',
    desc: 'Support financial institutions in information collection, verification execution, and providing inputs that strengthen the credit review process.',
    color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe',
    href: '/services/credit-appraisal-support',
    features: ['Credit Assessment', 'Financial Analysis', 'Risk Evaluation', 'Report Generation'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader dark />

      {/* Hero Section - matches service-hero.tsx style */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-300/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">All Services</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Comprehensive <span className="text-orange-400">Verification</span> &<br />Risk Intelligence Solutions
          </h1>

          <p className="text-lg text-blue-200/80 max-w-3xl leading-relaxed mb-10">
            From due diligence to field investigations, we deliver accurate, compliant, and technology-driven verification services for banks, NBFCs, fintechs, and enterprises across India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { val: '10+', label: 'Years of Experience', color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
              { val: '2015', label: 'Serving Since', color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
              { val: 'PAN India', label: 'Coverage', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
              { val: '2 Certs', label: 'ISO 27001 + 9001', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 border" style={{ backgroundColor: stat.bg, borderColor: stat.border }}>
                <div className="text-2xl font-black" style={{ color: stat.color, fontFamily: 'var(--font-manrope)' }}>{stat.val}</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Custom Cards matching service page style */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Our Core Services
            </h2>
            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
              End-to-end verification and risk intelligence services designed for the Indian financial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ALL_SERVICES.map((service, idx) => {
              const IconComp = {
                FileSearch, Building2, Search, MapPin, Shield, FileCheck, AlertTriangle, CreditCard,
              }[service.icon]

              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="group rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    backgroundColor: service.bg,
                    borderColor: service.border,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: service.bg, border: `1px solid ${service.border}` }}
                  >
                    {IconComp && <IconComp className="w-6 h-6" style={{ color: service.color }} />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors" style={{ fontFamily: 'var(--font-manrope)' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color }} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: service.color }}>
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-[128px]" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            Not sure which service you need?
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Our experts will assess your requirements and recommend the right verification approach for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-bold text-base transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <BrightoFooter />
    </div>
  )
}
