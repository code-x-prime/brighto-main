'use client'

import Link from 'next/link'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <BrightoHeader />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026 | Effective Date: 17 July 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Brighto Credit Information Pvt. Ltd. (&ldquo;Brighto India&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, store, share, and protect your personal information in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act), Information Technology Act, 2000, and other applicable Indian data protection laws.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                By using our website (<Link href="/" className="text-blue-600 hover:underline">www.brightoindia.com</Link>) and services, you consent to the collection and use of your personal data as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data Fiduciary</h2>
              <p className="text-slate-600 leading-relaxed">
                For the purposes of the DPDP Act, 2023, Brighto Credit Information Pvt. Ltd. is the Data Fiduciary responsible for processing your personal data.
              </p>
              <p className="text-slate-600 leading-relaxed mt-2">
                <strong>Registered Address:</strong> C-83, 1st Floor, Sector-2, Noida, India<br />
                <strong>Email:</strong> <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a><br />
                <strong>Phone:</strong> <a href="tel:9311463901" className="text-blue-600 hover:underline">9311463901</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Personal Data We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We collect the following categories of personal data based on your interaction with us:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Data Category</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Specific Data Points</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 text-slate-600">Contact Information</td>
                      <td className="px-4 py-3 text-slate-600">Name, Email, Phone Number</td>
                      <td className="px-4 py-3 text-slate-600">Respond to enquiries, provide services</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">Professional Information</td>
                      <td className="px-4 py-3 text-slate-600">Company Name, Job Title</td>
                      <td className="px-4 py-3 text-slate-600">Service delivery, business communications</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">Job Application Data</td>
                      <td className="px-4 py-3 text-slate-600">Resume, Cover Letter, Employment History</td>
                      <td className="px-4 py-3 text-slate-600">Recruitment and hiring process</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">Usage Data</td>
                      <td className="px-4 py-3 text-slate-600">IP Address, Browser Type, Pages Visited</td>
                      <td className="px-4 py-3 text-slate-600">Website analytics, security, improvement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Purpose and Lawful Basis for Processing</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We process your personal data only for specific, explicit, and legitimate purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li><strong>Service Delivery:</strong> To respond to your enquiries and provide requested verification and risk management services.</li>
                <li><strong>Contractual Necessity:</strong> To perform our obligations under any contract or agreement with you.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations under Indian law.</li>
                <li><strong>Legitimate Interest:</strong> To improve our website, services, and customer experience (with appropriate safeguards).</li>
                <li><strong>Recruitment:</strong> To process job applications and manage the hiring process (for applicants).</li>
                <li><strong>Consent:</strong> For any marketing communications or non-essential cookies (obtained via explicit opt-in).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Consent and Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Under the DPDP Act, 2023, you have the following rights as a Data Principal:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li><strong>Right to Access:</strong> You may request a summary of the personal data we process about you.</li>
                <li><strong>Right to Correction:</strong> You may request correction or updating of inaccurate personal data.</li>
                <li><strong>Right to Erasure:</strong> You may request deletion of your personal data where processing is no longer necessary or consent is withdrawn.</li>
                <li><strong>Right to Grievance Redressal:</strong> You may file a complaint regarding the processing of your personal data.</li>
                <li><strong>Right to Nominate:</strong> You may nominate another individual to exercise your rights in the event of your death or incapacity.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a>. We will respond within 72 hours as required under the DPDP Act.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Data Retention</h2>
              <p className="text-slate-600 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 mt-3">
                <li><strong>Contact Form Submissions:</strong> Retained for 24 months from the date of submission, then securely deleted.</li>
                <li><strong>Job Applications:</strong> Retained for 12 months from the date of application, then securely deleted unless you are hired.</li>
                <li><strong>Resume Files:</strong> Stored securely in encrypted cloud storage (AWS R2) and deleted after the retention period.</li>
                <li><strong>Usage/Analytics Data:</strong> Anonymized after 12 months and retained in aggregate form only.</li>
                <li><strong>Security Logs:</strong> Retained for 12 months for security auditing purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Data Security Measures</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We implement industry-standard technical and organisational security measures to protect your personal data, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 encryption for data in transit</li>
                <li>ISO 27001 certified information security management</li>
                <li>SOC 2 Type II audited controls</li>
                <li>Role-based access controls with least-privilege principle</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure file upload with type and size validation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Data Sharing and Third Parties</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li><strong>Authorised Team Members:</strong> Data is shared only with authorised employees who need it to respond to your enquiry or process your application.</li>
                <li><strong>Service Providers:</strong> We use trusted third-party service providers who are contractually bound to protect your data:</li>
              </ul>
              <div className="ml-6 mt-3 space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 text-sm">Email Service Provider</p>
                  <p className="text-slate-500 text-sm">Brevo (Transactional email delivery)</p>
                  <p className="text-slate-400 text-xs mt-1">Data processed: Name, Email | Stored in: EU/India</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 text-sm">Cloud Storage</p>
                  <p className="text-slate-500 text-sm">Cloudflare R2 (Resume/document storage)</p>
                  <p className="text-slate-400 text-xs mt-1">Data processed: Resume files | Stored in: India region</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 text-sm">Hosting Provider</p>
                  <p className="text-slate-500 text-sm">Vercel (Website hosting and analytics)</p>
                  <p className="text-slate-400 text-xs mt-1">Data processed: Usage data, IP addresses | Stored in: Global CDN</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-3">
                <strong>Legal Requirement:</strong> We may disclose personal data if required by law, court order, or governmental authority under applicable Indian law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Cross-Border Data Transfer</h2>
              <p className="text-slate-600 leading-relaxed">
                Some of our service providers may process data outside India. In such cases, we ensure that appropriate safeguards are in place as required under Section 16 of the DPDP Act, 2023, including contractual obligations ensuring equivalent data protection standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Cookies and Tracking</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Our website uses cookies in the following categories:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                <li><strong>Strictly Necessary Cookies:</strong> Essential for website functionality (session management, security). These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website. These are only enabled with your explicit consent.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                We do <strong>not</strong> use advertising or marketing cookies. You can manage your cookie preferences at any time through our cookie consent banner.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Children&apos;s Data</h2>
              <p className="text-slate-600 leading-relaxed">
                Our services are not directed at children under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on our website. The &ldquo;Last Updated&rdquo; date at the top indicates the most recent revision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Grievance Redressal</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                In accordance with the DPDP Act, 2023 and the Information Technology Act, 2000, the name and contact details of our Grievance Officer are provided below:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-3">
                <p className="font-semibold text-slate-900">Grievance Officer</p>
                <p className="text-slate-600 text-sm mt-1">Brighto Credit Information Pvt. Ltd.</p>
                <p className="text-slate-600 text-sm">Email: <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a></p>
                <p className="text-slate-600 text-sm">Phone: <a href="tel:9311463901" className="text-blue-600 hover:underline">9311463901</a></p>
                <p className="text-slate-600 text-sm mt-2">We will acknowledge your complaint within 72 hours and aim to resolve it within 30 days.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">14. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data processing practices, please contact us at:
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Brighto Credit Information Pvt. Ltd.</strong><br />
                C-83, 1st Floor, Sector-2, Noida, India<br />
                Email: <a href="mailto:Support@brightoindia.com" className="text-blue-600 hover:underline">Support@brightoindia.com</a><br />
                Phone: <a href="tel:9311463901" className="text-blue-600 hover:underline">9311463901</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </main>
  )
}
