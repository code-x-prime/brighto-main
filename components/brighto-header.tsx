'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, CheckCircle2, FileText, Search, MapPin, Shield, FileCheck, AlertTriangle, CreditCard } from 'lucide-react'

const SERVICES_DROPDOWN = [
  { label: 'Due Diligence Services', desc: 'Verify facts & key info prior to significant business moves.', href: '/services/due-diligence', icon: CheckCircle2 },
  { label: 'Loan Application Verification', desc: 'Applicant detail checks to improve credit reviews.', href: '/services/loan-application-verification', icon: FileText },
  { label: 'Field Investigation (FI)', desc: 'On-ground independent verifications of profiles.', href: '#services', icon: Search },
  { label: 'Contact Point Verification (CPV)', desc: 'Verify home, office, and business locations.', href: '/services/contact-point-verification', icon: MapPin },
  { label: 'RCU Support', desc: 'Investigative support & internal risk checks.', href: '/services/rcu-support', icon: Shield },
  { label: 'Document Verification', desc: 'Verification of ID papers & financial files.', href: '/services/document-verification', icon: FileCheck },
  { label: 'Fraud Risk Assessment', desc: 'Spot potential risks and control weaknesses.', href: '/services/fraud-risk-assessment', icon: AlertTriangle },
  { label: 'Credit Appraisal Support', desc: 'Information collection for credit review.', href: '/services/credit-appraisal-support', icon: CreditCard },
]

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services', dropdown: true, isServices: true },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '/contact' },
]

export function BrightoHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
        : 'bg-transparent border-b border-transparent'
        }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Brighto-Logo.png"
            alt="Brighto India â€” Trusted Risk, Verification & Technology Solutions Partner"
            width={180}
            height={52}
            className="h-12 object-contain"
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              const isOpen = servicesOpen
              const setIsOpen = setServicesOpen

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <button
                    onClick={() => setIsOpen((p) => !p)}
                    onMouseEnter={() => setIsOpen(true)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isOpen ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Services Megamenu Panel */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[880px]"
                      style={{ zIndex: 9999 }}
                    >
                      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/10 overflow-hidden p-6">
                        <div className="mb-3 px-2">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Our Core Services
                          </p>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          {SERVICES_DROPDOWN.map((svc) => {
                            const Icon = svc.icon
                            return (
                              <Link
                                key={svc.label}
                                href={svc.href}
                                onClick={() => setIsOpen(false)}
                                className="flex gap-3 hover:bg-slate-50 p-2.5 rounded-xl transition-colors group text-left"
                              >
                                <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-700 transition-colors" />
                                </span>
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-sm font-bold text-slate-950 group-hover:text-blue-900 transition-colors leading-tight">
                                    {svc.label}
                                  </span>
                                  <span className="text-[11px] text-slate-500 leading-normal">
                                    {svc.desc}
                                  </span>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-950 transition-all hover:shadow-lg shrink-0">
          Request Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-slate-900" />
          ) : (
            <Menu className="w-5 h-5 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white backdrop-blur-md">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.dropdown) {
                const isMobOpen = mobileServicesOpen
                const setMobOpen = setMobileServicesOpen

                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobOpen((p) => !p)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isMobOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Mobile Services list with descriptions */}
                    {isMobOpen && (
                      <div className="ml-3 mt-1.5 space-y-2 border-l-2 border-blue-100 pl-3 py-1">
                        {SERVICES_DROPDOWN.map((svc) => {
                          const Icon = svc.icon
                          return (
                            <Link
                              key={svc.label}
                              href={svc.href}
                              onClick={() => { setMobileMenuOpen(false); setMobOpen(false) }}
                              className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left"
                            >
                              <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-3.5 h-3.5 text-slate-500" />
                              </span>
                              <div>
                                <p className="text-sm font-bold text-slate-950">{svc.label}</p>
                                <p className="text-xs text-slate-500 leading-normal mt-0.5">{svc.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-2">
              <Link href="/contact" className="block w-full px-5 py-3 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-950 transition-colors text-center">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

