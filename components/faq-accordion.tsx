'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {faqs.map((faq, idx) => {
        const isOpen = open === idx
        return (
          <div
            key={idx}
            className="rounded-2xl border transition-all duration-300 overflow-hidden"
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
              <span className="text-xs font-bold text-slate-300 shrink-0 w-6 tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <span
                className="flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-300"
                style={{ color: isOpen ? '#0f172a' : '#334155' }}
              >
                {faq.q}
              </span>

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

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="px-5 sm:px-7 pb-6 pl-[calc(1.25rem+1.5rem+1rem)] sm:pl-[calc(1.75rem+1.5rem+1rem)]">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-l-2 border-blue-200 pl-4">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
