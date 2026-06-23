'use client'

import { ArrowRight, ArrowUpRight } from 'lucide-react'


export function BrightoTrustNetwork() {
  const brands = [
    { name: 'Crediscout', initials: 'CS', desc: 'Background verification — employment, education, address, vendor & contractor screening' },
    { name: 'Hubcheck', initials: 'HC', desc: 'Warehouse audits, stock verification, collateral reviews for commodity finance' },
    { name: 'Credify India', initials: 'CI', desc: 'Verification APIs — KYC, KYB, digital onboarding, banking & compliance APIs' },
    { name: 'Truering', initials: 'TR', desc: 'Telecalling CRM — inbound/outbound calling, cloud phone, lead tracking, auto dialers' },
    { name: 'Brighto Risk', initials: 'BR', desc: 'Deep risk intelligence & fraud identification suite across enterprise networks' },
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
              Our Network of Partners
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We collaborate with India's leading verification, risk intelligence, and identity platforms to deliver fast, secure, and accurate compliance solutions.
            </p>
            <div className="pt-2">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-950 hover:underline transition-all group"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Grid and Tall Card */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {/* Partner Brand Cards */}
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 overflow-hidden"
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-900 group-hover:border-blue-900">
                      <span className="text-xs font-bold text-blue-900 transition-colors group-hover:text-white">
                        {brand.initials}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {brand.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-blue-900" />
                  </div>
                </div>
              ))}

              {/* Tall Featured Card (Brighto Risk) */}
              <div className="sm:col-span-2 md:col-span-1 md:row-span-2 h-full min-h-[280px] md:min-h-0">
                <div className="h-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 border border-blue-950 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">


                  {/* Subtle Background Art */}
                  <div
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-10" />

                  {/* Header / Top Info */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                    </div>
                    <h3 className="text-xl font-bold mt-3">Brighto Risk</h3>
                    <p className="text-xs text-blue-200 mt-2 leading-relaxed">
                      Deep intelligence & fraud identification suite deployed across enterprise networks.
                    </p>
                  </div>

                  {/* Bottom Stats / Action */}
                  <div className="relative z-10 pt-4">
                    <div className="text-4xl font-extrabold text-orange-500 tracking-tight">500K+</div>
                    <div className="text-xs text-slate-300 mt-1">Cases Verified Across India</div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
