'use client'

import Image from 'next/image'

const CERTS = [
  { label: 'ISO 27001 Certified', sub: 'Information Security', icon: '/icons/information-security.svg' },
  { label: 'ISO 9001 Certified', sub: 'Quality Management', icon: '/icons/quality-management.svg' },
  { label: 'SOC 2 Audited', sub: 'Data Protection', icon: '/icons/data-protection.svg' },
]

const SERVICES_LIST = [
  'Loan Application Due Diligence',
  'RCU & Field Investigations',
  'Background Verification',
  'Warehouse Audits for Commodity Finance',
  'API Solutions',
  'Third-Party Verification',
  'Telecalling Operations',
  'CRM Solutions',
]

export function BrightoAbout() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — heading + cert badges */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-3 tracking-wide uppercase">About Brighto India</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
                India's Most Reliable Risk, Verification & Technology Solutions Partner
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Since 2015, Brighto Credit Information Private Limited has been empowering banks, NBFCs, fintech companies, financial institutions, and enterprises with reliable risk management, verification, audit, and technology solutions.
              </p>
            </div>

            {/* Cert cards */}
            <div className="space-y-3">
              {CERTS.map((cert) => (
                <div key={cert.label} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center shrink-0">
                    <Image
                      src={cert.icon}
                      alt={cert.label}
                      width={24}
                      height={24}
                      style={{ filter: 'invert(40%) sepia(80%) saturate(400%) hue-rotate(120deg) brightness(0.8)' }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{cert.label}</p>
                    <p className="text-xs text-slate-500">{cert.sub}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — full description + service list */}
          <div className="space-y-8">
            <div className="space-y-5 text-slate-700 leading-relaxed text-base">
              <p>
                Driven by a commitment to accuracy, integrity, and innovation, we help organizations make informed decisions, strengthen compliance, and enhance operational efficiency.
              </p>
              <p>
                As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited organization, Brighto adheres to globally recognized standards for information security, quality management, and data protection. Our unwavering focus on confidentiality, process excellence, and customer satisfaction has earned the trust of leading institutions across the country.
              </p>
              <p>
                By combining experienced professionals with advanced technology and robust operational frameworks, we deliver scalable, secure, and business-focused solutions tailored to the evolving needs of the financial and enterprise ecosystem.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-5 italic text-slate-600 bg-orange-50/50 py-3 pr-4 rounded-r-xl">
                "At Brighto, we don't just verify information — we enable confidence, reduce risk, and build long-term value for our clients through trust, transparency, and excellence."
              </blockquote>
            </div>

            {/* Service list */}
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-4">Our integrated portfolio includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES_LIST.map((svc) => (
                  <div key={svc} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
