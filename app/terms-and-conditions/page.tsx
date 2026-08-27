'use client'

import Link from 'next/link'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BrightoHeader />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026 | Effective Date: 17 July 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto Credit Information Pvt. Ltd. (&ldquo;Brighto India&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered under the Companies Act, 2013, located at C-83, 1st Floor, Sector-2, Noida, India, governs the use of its website, content, products, services, and other tools and technologies (collectively referred to as &ldquo;Services&rdquo;) offered through the website (<Link href="/" className="text-blue-600 hover:underline">www.brightoindia.com</Link>) (the &ldquo;Site&rdquo;).
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between Brighto India and any individual, organization, company, or entity (&ldquo;you&rdquo;, &ldquo;your&rdquo;, or &ldquo;Client&rdquo;) that intends to utilise our Services. By accessing or using our Site and Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                This page will be updated according to business policies and requirements. Users are advised to review this page periodically and adhere to the latest version.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Our Services</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Brighto India provides verification, due diligence, and risk management solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>Due Diligence Services</li>
                <li>Loan Application Verification</li>
                <li>Field Investigation (FI)</li>
                <li>Contact Point Verification (CPV)</li>
                <li>Risk Containment Unit (RCU) Support</li>
                <li>Document Verification</li>
                <li>Fraud Risk Assessment</li>
                <li>Credit Appraisal Support</li>
                <li>Verification API Solutions</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Service-specific terms, deliverables, timelines, and pricing may be agreed upon separately through formal contracts and statements of work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Ownership of Content</h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto India does not claim ownership of any data submitted by you through our website. Data may include names, contact details, addresses, email IDs, documents, and files. However, we require certain rights to perform verification services, which include the right to save, process, verify, and share content for background research in accordance with our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and with your explicit consent.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Clients cannot claim ownership of our services, software, technologies, or other materials provided during the verification process. Brighto India reserves all rights to its usage and functionality during and after the term of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. User Eligibility</h2>
              <p className="text-slate-600 leading-relaxed">
                You must be at least 18 years of age to access or use our Services. By accepting these Terms, you warrant that you are 18 or older and will comply with all applicable laws, regulations, and policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Rights and Responsibilities</h2>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.1 Your Rights</h3>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>You may request services tailored to your business needs by communicating your requirements via email or our contact form.</li>
                <li>You may withdraw your request before we initiate the process by notifying us via email.</li>
                <li>You may opt out of any promotional communications at any time.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.2 Your Responsibilities</h3>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>You are solely responsible for the accuracy and legality of all data and information submitted through our website or via email.</li>
                <li>You must ensure that all submitted data is free from viruses, malware, or any harmful content.</li>
                <li>If you create login credentials, you must keep them secure and notify us immediately of any suspected security breach. You must not share credentials with any unauthorised third party.</li>
                <li>You agree to use our Services only for lawful purposes and in compliance with these Terms.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.3 You Agree Not To</h3>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>Upload unlawful content that defames, harasses, or threatens others.</li>
                <li>Tamper with, disrupt, or attempt to gain unauthorised access to our systems or services.</li>
                <li>Send spam, unsolicited content, or files containing viruses or malicious code.</li>
                <li>Violate any local, national, or international law or data protection regulation.</li>
                <li>Infringe upon the intellectual property rights of others.</li>
                <li>Use our Services to stalk, harass, or defame any individual or entity.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Our Rights</h2>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>We reserve the right to determine pricing, service packages, and feature offerings.</li>
                <li>We may modify service plans and features at our discretion, with updates published on our Site.</li>
                <li>We reserve the right to limit, suspend, or discontinue Services if we believe a Client is misusing our platform or breaching these Terms.</li>
                <li>We may halt Services if a security concern arises and resume once the concern is resolved.</li>
                <li>We reserve the right to remove or reject files that contain viruses, malware, or harmful content.</li>
                <li>We may terminate sessions and change credentials if a security breach is detected.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Our Responsibilities</h2>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>We maintain the security and integrity of our Site and associated platforms.</li>
                <li>We are committed to delivering our Services with the highest professional standards.</li>
                <li>We ensure regular updates to our systems and communicate maintenance schedules via email or official channels.</li>
                <li>We adhere to our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> in the handling of your personal data.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                All software, content, logos, trademarks, and proprietary materials on this Site are the property of Brighto India and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent. You may use our trademarks solely to identify yourself as a client of our Services, subject to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto India shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our Services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim, if any. While we strive for accuracy in our verification reports, we do not warrant that they are 100% error-free or defect-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Indemnity</h2>
              <p className="text-slate-600 leading-relaxed">
                You agree to indemnify and hold harmless Brighto India, its directors, employees, agents, and affiliates from any claims, losses, damages, liabilities, or expenses arising from your breach of these Terms, violation of any law, or infringement of any third-party rights through your use of our Services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Account Suspension and Termination</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate your access to our Services if we believe you have violated these Terms. You may also terminate your engagement with us at any time by notifying us in writing. Upon termination, your right to access and use our Services ceases immediately. Any outstanding obligations under these Terms survive termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary or sensitive information shared during the course of business engagement, in accordance with applicable confidentiality obligations under Indian law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Force Majeure</h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto India shall not be liable for any failure or delay in performance arising from causes beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, power failures, or internet disruptions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">14. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">15. Changes to These Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update these Terms from time to time. Changes will be effective immediately upon posting on this page with the revised date. Your continued use of our Services after changes constitutes acceptance. If you do not agree to the modified Terms, please discontinue use of our Services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">16. Contact</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions, suggestions, or concerns regarding these Terms, please contact us:
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Brighto Credit Information Pvt. Ltd.</strong><br />
                C-83, 1st Floor, Sector-2, Noida, India<br />
                Email: <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a><br />
                Phone: <a href="tel:9311463901" className="text-blue-600 hover:underline">9311463901</a> / <a href="tel:+911204539428" className="text-blue-600 hover:underline">+91 120 453 9428</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
