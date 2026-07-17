'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsentBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">We Value Your Privacy</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              We use strictly necessary cookies to ensure our website functions properly. Analytics cookies are only used with your explicit consent. We do not use advertising or marketing cookies.
            </p>
            <p className="text-slate-400 text-xs">
              Read our{' '}
              <Link href="/cookie-policy" className="text-blue-400 hover:underline" target="_blank">Cookie Policy</Link>
              {' '}and{' '}
              <Link href="/privacy-policy" className="text-blue-400 hover:underline" target="_blank">Privacy Policy</Link>
              {' '}for more information.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-5 py-2.5 border border-slate-600 text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
