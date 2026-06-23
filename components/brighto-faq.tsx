'use client'

import { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: 'What are Due Diligence Services?',
    answer: 'Due diligence services are the process of gathering, verifying, analyzing, and examining data to support business decisions, loan determinations, compliance and risk management.',
    tag: 'Due Diligence',
  },
  {
    question: 'What is Field Investigation (FI)?',
    answer: 'Field Investigation means conducting on-ground verification to confirm details through proper investigation steps and clear reports.',
    tag: 'Field Work',
  },
  {
    question: 'What is Contact Point Verification (CPV)?',
    answer: 'CPV is the process used to confirm home, office, or business addresses as part of lending, new customer setup, and risk review flows.',
    tag: 'CPV',
  },
  {
    question: 'What is the role of RCU support services?',
    answer: 'RCU support services help companies improve their risk review work through verification, investigative support, and information validation.',
    tag: 'Risk',
  },
  {
    question: 'Which industries use verification and due diligence services?',
    answer: 'Banks, NBFCs, fintech companies, insurance firms, staffing agencies, commodity finance groups, logistics companies, and manufacturing businesses regularly use these verification and due diligence services.',
    tag: 'Industries',
  },
  {
    question: 'Does Brighto India provide warehouse audit solutions?',
    answer: 'Yes. Through our partner network, Brighto India gives access to warehouse audits and commodity finance checks via Hubcheck.',
    tag: 'Warehouse',
  },
  {
    question: 'Can Brighto India support digital verification requirements?',
    answer: "Yes. Companies that want automated checks and fast onboarding can use Credify India's API solutions.",
    tag: 'API',
  },
]

export function BrightoFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-100">

      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.3] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faq-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.2" fill="#cbd5e1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-grid)" />
      </svg>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-125 h-125 rounded-full blur-[120px] opacity-[0.04] bg-blue-600 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full blur-[100px] opacity-[0.04] bg-orange-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
              <span className="text-xs font-bold text-blue-900 tracking-widest uppercase">Help Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Frequently Asked<br className="hidden sm:block" /> Questions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Common questions about our due diligence, verification, and risk management solutions.
            </p>
          </div>

          {/* Support card */}
          <div className="shrink-0 w-full lg:w-72 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
              <Image
                src="/icons/faq.svg"
                alt="FAQ"
                width={22}
                height={22}
                style={{ filter: 'invert(22%) sepia(90%) saturate(600%) hue-rotate(200deg) brightness(0.85)' }}
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">Can't find your answer?</p>
              <p className="text-xs text-slate-500 leading-relaxed">Our team is ready to discuss your specific verification and compliance needs.</p>
            </div>
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white text-sm font-semibold rounded-xl transition-colors">
              Contact Support <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx
            return (
              <div
                key={idx}
                className="group rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isOpen ? 'rgba(59,130,246,0.4)' : 'rgba(226,232,240,1)',
                  background: isOpen ? 'rgba(239,246,255,0.6)' : 'rgba(255,255,255,0.9)',
                  boxShadow: isOpen ? '0 4px 24px rgba(59,130,246,0.06)' : undefined,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  {/* Number */}
                  <span className="text-xs font-bold text-slate-300 shrink-0 w-6 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Tag */}
                  <span
                    className="hidden sm:block text-[10px] font-bold uppercase tracking-widest shrink-0 px-2.5 py-1 rounded-full border transition-colors duration-300"
                    style={{
                      color: isOpen ? '#1e40af' : '#64748b',
                      background: isOpen ? 'rgba(59,130,246,0.08)' : 'rgba(241,245,249,1)',
                      borderColor: isOpen ? 'rgba(59,130,246,0.25)' : 'rgba(226,232,240,1)',
                    }}
                  >
                    {faq.tag}
                  </span>

                  {/* Question */}
                  <span
                    className="flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-300"
                    style={{ color: isOpen ? '#0f172a' : '#334155' }}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <div
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(59,130,246,0.1)' : 'rgba(241,245,249,1)',
                      border: `1px solid ${isOpen ? 'rgba(59,130,246,0.3)' : 'rgba(226,232,240,1)'}`,
                    }}
                  >
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5 text-blue-700" />
                      : <Plus className="w-3.5 h-3.5 text-slate-400" />
                    }
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-5 sm:px-7 pb-6 pl-[calc(1.25rem+1.5rem+1rem)] sm:pl-[calc(1.75rem+1.5rem+5.5rem)]">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-l-2 border-blue-200 pl-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
