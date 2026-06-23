'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaHeart } from 'react-icons/fa6'
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi'

export function BrightoCTAFooter() {
  return (
    <>
      {/* Premium Call-to-Action Section (cta-with-rectangle style) */}
      <section id="contact" className="bg-slate-50 overflow-hidden relative border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto py-4">
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-8 py-8 text-center sm:gap-8 md:py-12 bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-blue-900/[0.02]">

            {/* Glow Effect */}
            <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-3xl shadow-glow opacity-0 animate-scale-in delay-700" />

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-slate-200 bg-slate-50/50 rounded-full text-xs font-semibold text-slate-650 opacity-0 animate-fade-in-up delay-100 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Get Started
            </div>

            {/* Title */}
            <h2
              className="text-3xl font-bold sm:text-5xl text-slate-950 tracking-tight leading-tight opacity-0 animate-fade-in-up delay-200 max-w-3xl relative z-10"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Get Started With Us Today for Verification & Risk Management Support
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto opacity-0 animate-fade-in-up delay-300 relative z-10">
              Whether you need Due Diligence Services, Loan Application Verification, Field Investigation, CPV, RCU support, or any other specialized checks — our team stands ready to discuss your situation and suggest the right way forward.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up delay-500 relative z-20 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 border border-slate-300 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-all duration-200 text-sm sm:text-base shadow-sm">
                Contact Team
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 group text-sm sm:text-base">
                Request Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* Embedded Styles for Glow, Mask, and Animation Delays */}
        <style>{`
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
          .delay-700 {
            animation-delay: 700ms;
          }
          
          .fade-top-lg {
            mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 6rem);
            -webkit-mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 6rem);
          }

          /* Premium Warm Orange/Gold Glow Inset Shadow from the edges */
          .shadow-glow {
            box-shadow: 
              0 -16px 128px 0 rgba(249, 115, 22, 0.16) inset, 
              0 -16px 32px 0 rgba(253, 186, 116, 0.2) inset;
            border: 1px solid rgba(249, 115, 22, 0.08);
          }

          @keyframes fadeInUp {
            0% { 
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.97);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-scale-in {
            animation: scaleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
      </section>

      {/* Premium Footer (Designali style) */}
      <footer className="bg-white border-t border-slate-200 py-12 relative overflow-hidden text-slate-900">
        {/* Top welcome description & logo area */}
        <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-6 pb-0 md:flex">
          <div className="flex items-center justify-center">
            <Image
              src="/Brighto-Logo.png"
              alt="Brighto India"
              width={130}
              height={38}
              className="h-9 object-contain"
              style={{ width: 'auto' }}
            />
          </div>
          <p className="bg-transparent text-center text-xs leading-5 text-slate-500 max-w-4xl md:text-left">
            Welcome to Brighto India, where compliance meets cutting-edge technology. We are passionate about delivering structured due diligence, verification, and risk management solutions across India. We specialize in physical address checks, automated identity verification, and deep risk intelligence to empower banking, NBFC, fintech, and insurance sectors. Our mission is to secure transactions, prevent fraud, and build trust in a fast-paced market. We believe in absolute accuracy, compliance, and swift turnaround times.
          </p>
        </div>

        {/* Link categories */}
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="border-b border-dotted border-slate-200"></div>
          <div className="py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 leading-6">
              {/* Column 1: Services */}
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-4">Services</h4>
                <ul className="flex flex-col space-y-2">
                  {['Due Diligence', 'Field Investigation', 'CPV Solutions', 'Fraud Detection', 'Compliance Verification'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-500 hover:text-blue-900 md:text-xs transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Industries */}
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-4">Industries</h4>
                <ul className="flex flex-col space-y-2">
                  {['Banking', 'NBFC', 'Housing Finance', 'Fintech', 'Insurance'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-500 hover:text-blue-900 md:text-xs transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Resources */}
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
                <ul className="flex flex-col space-y-2">
                  {['Blog & Insights', 'Case Studies', 'Documentation', 'API Docs', 'Support Center'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-500 hover:text-blue-900 md:text-xs transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-4">Contact</h4>
                <ul className="flex flex-col space-y-2">
                  <li className="text-sm text-slate-500 md:text-xs flex items-center gap-2">
                    <FiMail className="w-3.5 h-3.5" /> hello@brighto.in
                  </li>
                  <li className="text-sm text-slate-500 md:text-xs flex items-center gap-2">
                    <FiPhone className="w-3.5 h-3.5" /> +91-9876-543-210
                  </li>
                  <li className="text-sm text-slate-500 md:text-xs flex items-center gap-2">
                    <FiMapPin className="w-3.5 h-3.5" /> Mumbai, Delhi
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-b border-dotted border-slate-200"></div>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex flex-col items-center justify-center gap-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 px-6">
            {[
              { icon: FiMail, href: 'mailto:hello@brighto.in' },
              { icon: FaXTwitter, href: 'https://x.com' },
              { icon: FaInstagram, href: 'https://instagram.com' },
              { icon: FaFacebookF, href: 'https://facebook.com' },
              { icon: FaLinkedinIn, href: 'https://linkedin.com' },
              { icon: FaYoutube, href: 'https://youtube.com' },
            ].map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-translate-y-1 border border-dotted border-slate-300 rounded-xl p-2.5 transition-transform text-slate-500 hover:text-blue-900 hover:border-blue-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}

            {/* Back to Top */}
            <button
              type="button"
              onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
              className="hover:-translate-y-1 border border-dotted border-slate-300 rounded-xl p-2.5 transition-transform text-slate-500 hover:text-blue-900 hover:border-blue-400 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Copyright and Made By */}
        <div className="mx-auto mb-6 mt-6 flex flex-col justify-between text-center text-xs md:max-w-7xl px-4">
          <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-slate-500">
            <span>© {new Date().getFullYear()}</span>
            <span>Brighto India design and develop by</span>
            <a 
              href="https://groxmedia.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-slate-800 hover:text-blue-900 transition-colors"
            >
              "Grox Media"
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
