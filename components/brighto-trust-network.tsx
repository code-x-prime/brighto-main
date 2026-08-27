'use client'

import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export function BrightoTrustNetwork() {
  const brands = [
    { name: 'Crediscout', initials: 'CS', desc: 'Background verification — employment, education, address, vendor & contractor screening', logo: '/CrediScout-Logo2.png', url: 'https://crediscout.in' },
    { name: 'Hubcheck', initials: 'HC', desc: 'Warehouse audits, stock verification, collateral reviews for commodity finance', logo: '/Hubcheck-Logo.png', url: 'https://hubcheck.in' },
    { name: 'Credify India', initials: 'CI', desc: 'Verification APIs — KYC, KYB, digital onboarding, banking & compliance APIs', logo: '/Credify-Logo2.png', url: 'https://credifyindia.com' },
    { name: 'Truering', initials: 'TR', desc: 'Telecalling CRM — inbound/outbound calling, cloud phone, lead tracking, auto dialers', logo: '/TrueRing-Logo2.png', url: 'https://www.truering.in/' },
  ]

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-xs font-semibold text-blue-900 tracking-wider uppercase">Trusted Ecosystem</span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Our Technology & Service Ecosystem
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Brighto India's own verification and risk management services are complemented by selected partner platforms for identity, warehouse audits, and telecalling infrastructure.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-950 hover:underline transition-all group"
              >
                Become a Partner
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Grid and Tall Card */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Partner Brand Cards */}
              {brands.map((brand, idx) => {
                const CardContent = (
                  <div
                    className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 overflow-hidden h-full"
                  >
                    <div>
                      {brand.logo ? (
                        <div className="w-24 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-2 mb-4 shadow-sm group-hover:border-blue-200 transition-colors">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={80}
                            height={40}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-900 group-hover:border-blue-900">
                          <span className="text-xs font-bold text-blue-900 transition-colors group-hover:text-white">
                            {brand.initials}
                          </span>
                        </div>
                      )}
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {brand.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconArrowUpRight className="w-4 h-4 text-blue-900" />
                    </div>
                  </div>
                );

                if (brand.url && brand.url !== '#') {
                  return (
                    <Link key={idx} href={brand.url} target="_blank" rel="noopener noreferrer">
                      {CardContent}
                    </Link>
                  );
                }

                return <div key={idx}>{CardContent}</div>;
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
