'use client'

import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <BrightoHeader />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                When you fill out our contact form, we collect your name, email address, phone number, company name, service interest, and message content. This information is necessary to respond to your enquiry and provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>To respond to your enquiries and provide requested information</li>
                <li>To send service-related communications</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Data Protection</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and stored securely. We are ISO 27001 certified and follow SOC 2 compliance standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or share your personal information with third parties. Your data is only shared with authorized team members who need it to respond to your enquiry.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Retention</h2>
              <p className="text-slate-600 leading-relaxed">
                We retain your information only as long as necessary to fulfil the purposes for which it was collected, or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:hello@brighto.in" className="text-blue-600 hover:underline">hello@brighto.in</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website uses essential cookies to ensure proper functionality. We do not use tracking or advertising cookies without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Contact Us</h2>
              <p className="text-s600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Brighto Credit Information Pvt. Ltd.</strong><br />
                Email: <a href="mailto:hello@brighto.in" className="text-blue-600 hover:underline">hello@brighto.in</a><br />
                Phone: <a href="tel:7838484441" className="text-blue-600 hover:underline">783-848-4441</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
