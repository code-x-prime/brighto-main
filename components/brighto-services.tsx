'use client'

import Image from 'next/image'
import Link from 'next/link'

export function BrightoServices() {
  const services = [
    {
      title: 'Due Diligence Services',
      description: 'Verify facts and key information, determine potential risks prior to significant business moves. Clear verification steps help clients make better assessments with greater confidence.',
      icon: '/icons/due-diligence-services.svg',
      href: '/services/due-diligence',
      size: 'large',
      gradient: 'from-blue-50 to-blue-100',
      featured: true,
    },
    {
      title: 'Loan Application Verification',
      description: 'Strong verification support to lenders, banks, NBFCs, and fintech firms â€” checking applicant details through proper steps to improve loan checks and risk reviews.',
      icon: '/icons/loan-application-verification.svg',
      href: '/services/loan-application-verification',
      size: 'medium',
      gradient: 'from-slate-50 to-slate-100',
    },
    {
      title: 'Field Investigation (FI)',
      description: 'On-ground verification services providing independent checks that confirm details in loan files and other business needs for lenders and financial institutions.',
      icon: '/icons/field-investigation.svg',
      href: '#services',
      size: 'medium',
      gradient: 'from-orange-50 to-orange-100',
    },
    {
      title: 'Contact Point Verification (CPV)',
      description: 'Verify home addresses, office locations, and business locations through structured checks â€” a key role in strengthening lending and financial verification.',
      icon: '/icons/contact-point-verification.svg',
      href: '/services/contact-point-verification',
      size: 'medium',
      gradient: 'from-blue-50 to-blue-100',
    },
    {
      title: 'RCU Support',
      description: 'Build better internal risk checks and reviews with investigative support, verification, and fact-checking so clients can manage lending and operational risks more effectively.',
      icon: '/icons/rcu-support.svg',
      href: '/services/rcu-support',
      size: 'medium',
      gradient: 'from-emerald-50 to-emerald-100',
    },
    {
      title: 'Document Verification',
      description: 'Handle verification for ID papers, financial records, business files, and other important documents â€” following pre-defined steps that support internal reviews.',
      icon: '/icons/document-verification.svg',
      href: '/services/document-verification',
      size: 'medium',
      gradient: 'from-amber-50 to-amber-100',
    },
    {
      title: 'Fraud Risk Assessment',
      description: 'Spot potential risks through checks and investigations. Our clear method strengthens risk review systems and supports better control setups for businesses.',
      icon: '/icons/fraud-risk-assessment.svg',
      href: '/services/fraud-risk-assessment',
      size: 'medium',
      gradient: 'from-red-50 to-red-100',
    },
    {
      title: 'Credit Appraisal Support',
      description: 'Help financial institutions collect information, run verifications, and provide inputs that feed into their own credit review work.',
      icon: '/icons/credit-appraisal-support.svg',
      href: '/services/credit-appraisal-support',
      size: 'large',
      gradient: 'from-indigo-50 to-indigo-100',
      featured: true,
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-blue-900 mb-2 tracking-wide">CORE SERVICES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl">
            Brighto India works as a reliable partner for verification and risk intelligence â€” on-the-ground checks, document reviews, investigative support, and structured reporting.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-max">
          {services.map((service, idx) => {
            const isLarge = service.size === 'large'

            return (
              <Link
                key={idx}
                href={service.href}
                className={`group rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer bg-gradient-to-br ${service.gradient} ${isLarge ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1'
                  }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-md transition-shadow ${service.featured ? 'ring-2 ring-blue-900' : ''
                      }`}>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={26}
                        height={26}
                        style={{ filter: 'invert(22%) sepia(90%) saturate(600%) hue-rotate(200deg) brightness(0.85)' }}
                      />
                    </div>
                    <h3 className={`font-bold text-slate-900 mb-2 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'}`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {isLarge && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/30">
                      <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Learn More â†’</div>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}



