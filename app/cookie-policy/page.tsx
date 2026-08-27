'use client'

import Link from 'next/link'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <BrightoHeader />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">What Are Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, and provide analytics data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Cookie</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 text-slate-600">admin-token</td>
                      <td className="px-4 py-3 text-slate-600">Strictly Necessary</td>
                      <td className="px-4 py-3 text-slate-600">Admin authentication session</td>
                      <td className="px-4 py-3 text-slate-600">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">cookie_consent</td>
                      <td className="px-4 py-3 text-slate-600">Strictly Necessary</td>
                      <td className="px-4 py-3 text-slate-600">Stores your cookie preferences</td>
                      <td className="px-4 py-3 text-slate-600">365 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">_vercel_analytics</td>
                      <td className="px-4 py-3 text-slate-600">Analytics (Opt-in only)</td>
                      <td className="px-4 py-3 text-slate-600">Website analytics via Vercel</td>
                      <td className="px-4 py-3 text-slate-600">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Third-Party Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the following third-party services that may set cookies:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 mt-3">
                <li><strong>Vercel Analytics:</strong> Privacy-focused website analytics. Only activated if you consent to analytics cookies. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Managing Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                You can control and manage cookies through:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 mt-3">
                <li>Our cookie consent banner (shown on first visit)</li>
                <li>Your browser settings</li>
                <li>By contacting us at <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a></li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Note: Disabling strictly necessary cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
              <p className="text-slate-600 leading-relaxed">
                For questions about this Cookie Policy, contact us at:
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Brighto Credit Information Pvt. Ltd.</strong><br />
                Email: <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a><br />
                Phone: <a href="tel:+911204539428" className="text-blue-600 hover:underline">+91 120 453 9428</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
