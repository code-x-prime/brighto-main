"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, use, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import ContactCTA from "@/src/components/home/ContactCTA";


const allServices: Record<string, {
  title: string; tagline: string; desc: string; longDesc: string;
  benefits: string[]; features: string[];
  faqs: { q: string; a: string }[];
  industries: string[];
}> = {
  "employee-verification": {
    title: "Employee Verification",
    tagline: "Comprehensive pre-employment screening for confident hiring",
    desc: "End-to-end background screening covering criminal records, education, employment history, and reference verification across all 28 Indian states.",
    longDesc: "Brighto India's Employee Verification service is built on 12 years of operational experience serving India's most demanding financial institutions. Our AI-augmented screening process combines automated database queries with human analyst review — ensuring every check is accurate, documented, and legally defensible.",
    benefits: ["Reduce post-hire fraud incidents", "Accelerate onboarding timelines", "Maintain RBI and IRDAI compliance", "Protect organisational reputation", "Documented audit trail for regulators"],
    features: ["Criminal & court record check", "Education certificate verification", "Employment history validation", "Reference verification via call centre", "Identity & address confirmation", "Social media & adverse media screening", "PEP & global watchlist check", "Drug screening coordination"],
    faqs: [
      { q: "What is your average turnaround time?", a: "Standard employee verification completes in 24–48 hours. Complex multi-state or international checks may take 3–5 business days. Express SLAs are available for enterprise accounts." },
      { q: "Which databases do you access?", a: "We access district court, high court, and Supreme Court databases across all 28 states, police records, CIBIL and credit bureau databases, NSDL education registries, and employer HR verification systems." },
      { q: "Is candidate consent required?", a: "Yes. We strictly adhere to DPDP Act 2023 requirements and obtain documented candidate consent before initiating any verification check." },
      { q: "Can you handle bulk verification programmes?", a: "Yes. We support bulk onboarding programmes of 5,000+ candidates per month with dedicated project management and real-time dashboard reporting." },
    ],
    industries: ["Banking", "NBFC", "Insurance", "Enterprise", "HR Tech"],
  },
  "background-verification": {
    title: "Background Verification",
    tagline: "Multi-layer screening for accurate, defensible decisions",
    desc: "Comprehensive background checks against pan-India court records, police databases, credit bureaus, and global watchlists with 99.9% accuracy.",
    longDesc: "Our background verification service aggregates data from 200+ sources across India — court records, police databases, financial registries, and international watchlists — delivering a complete risk profile in a single, structured report.",
    benefits: ["Pan-India court record coverage", "Real-time fraud alerts", "Regulatory-formatted reports", "AI-reduced false positives", "Encrypted document delivery"],
    features: ["District, High Court & Supreme Court records", "Criminal history — all 28 states", "Credit bureau & CIBIL check", "PEP & OFAC sanctions screening", "Adverse media monitoring", "Address history validation", "Global database search (40+ countries)", "Structured compliance report"],
    faqs: [
      { q: "What criminal databases do you cover?", a: "We cover District Court, High Court, and Supreme Court records across India, police records, NDPS database, and international Interpol and OFAC records." },
      { q: "How do you ensure accuracy?", a: "AI-driven data aggregation is reviewed by trained analysts before report delivery. We maintain a 99.9% accuracy SLA across all checks." },
      { q: "Are reports formatted for regulatory submission?", a: "Yes. Reports are structured for RBI, SEBI, and IRDAI submission requirements and include complete audit trails." },
    ],
    industries: ["Banking", "NBFC", "Fintech", "Insurance"],
  },
  "cpv-services": {
    title: "CPV Services",
    tagline: "Contact point verification with geo-tagged field agents",
    desc: "Physical address confirmation by trained field agents with geo-tagged photography, real-time updates, and structured reports delivered within 24 hours.",
    longDesc: "Brighto India's CPV network covers all 28 states with over 2,000 trained field agents. Every visit is geo-stamped, photographed, and documented — providing lenders and insurers with legally defensible address confirmation.",
    benefits: ["Pan-India field network — all 28 states", "Geo-tagged, timestamped photography", "24-hour standard turnaround", "Real-time field agent tracking", "Structured, compliant reports"],
    features: ["Residential CPV", "Office & workplace CPV", "Business premise verification", "Geo-tagged photography", "GPS coordinates confirmation", "Occupant interview documentation", "Real-time mobile reporting", "Digital sign-off with timestamps"],
    faqs: [
      { q: "What is your geographic coverage?", a: "We cover all 28 states and 8 Union Territories with a dedicated field agent network in Tier 1, 2, and 3 cities." },
      { q: "How quickly can you confirm an address?", a: "Standard CPV completes within 24 hours in metro cities. Tier 2 and 3 locations typically complete within 48 hours." },
    ],
    industries: ["NBFC", "Insurance", "Fintech", "Banking"],
  },
  "kyc-verification": {
    title: "KYC Verification",
    tagline: "RBI-compliant digital identity verification",
    desc: "AI-powered identity verification, document authentication, and AML/PEP screening — fully compliant with RBI Master Directions on KYC.",
    longDesc: "Our KYC platform integrates directly with UIDAI, NSDL, CIBIL, and the Central KYC Registry — enabling banks and NBFCs to onboard customers digitally in under 10 minutes while maintaining full regulatory compliance.",
    benefits: ["RBI Master Directions compliant", "CKYC Registry integration", "10-minute average completion", "Zero paper — fully digital", "AML/PEP screening included"],
    features: ["Aadhaar OTP & biometric verification", "PAN card validation via NSDL", "Passport & Driving Licence OCR", "Face match & liveness detection", "CKYC upload & retrieval", "AML/PEP watchlist screening", "Video KYC (V-CIP)", "Risk categorisation & scoring"],
    faqs: [
      { q: "Is your KYC RBI compliant?", a: "Yes. Our KYC solution is fully compliant with RBI Master Direction on KYC 2016 and all subsequent amendments through 2024." },
      { q: "What documents do you support?", a: "We support Aadhaar, PAN, Passport, Voter ID, Driving Licence, and 40+ other officially valid documents under RBI guidelines." },
    ],
    industries: ["Banking", "NBFC", "Fintech"],
  },
  "risk-intelligence": {
    title: "Risk Intelligence",
    tagline: "Real-time fraud risk scoring and analytics",
    desc: "Machine learning-powered fraud risk scoring, behavioural analytics, and geographic risk profiling to support credit and lending decisions.",
    longDesc: "Our Risk Intelligence platform combines 200+ data signals with ML models trained on 50M+ verification records to deliver accurate, real-time risk profiles for individuals and businesses.",
    benefits: ["Real-time risk score delivery", "Geographic risk mapping", "Fraud pattern detection", "Regulatory alert generation", "API-native integration"],
    features: ["Risk score 0–100", "Fraud pattern recognition", "Geographic risk analysis", "Behavioural analytics", "Bureau data aggregation", "PEP & watchlist cross-check", "Real-time webhook alerts", "Custom risk rules engine"],
    faqs: [
      { q: "How is the risk score calculated?", a: "Our risk score is generated by ML models trained on 50M+ historical verification records, incorporating criminal history, financial indicators, geographic risk, and behavioural signals." },
      { q: "Can the risk rules be customised?", a: "Yes. Enterprise clients can define custom risk rules, thresholds, and alert triggers aligned with their specific credit and compliance policies." },
    ],
    industries: ["NBFC", "Fintech", "Banking"],
  },
  "fraud-risk-control": {
    title: "Fraud Risk Control Unit",
    tagline: "Dedicated fraud investigation and risk advisory",
    desc: "Specialised FRCU team handling complex fraud investigations, suspicious activity reports, and enterprise risk advisory for financial institutions.",
    longDesc: "Our dedicated Fraud Risk Control Unit combines experienced investigators with digital forensics tools to handle complex fraud cases that automated systems cannot resolve alone.",
    benefits: ["Dedicated FRCU team", "Complex case management", "SAR documentation", "Regulatory escalation support", "Expert witness services"],
    features: ["Fraud case intake & triage", "Field investigation coordination", "Digital forensics support", "Suspicious Activity Report drafting", "Regulatory liaison", "Case management dashboard", "Expert witness documentation", "Post-investigation advisory"],
    faqs: [
      { q: "What types of fraud do you investigate?", a: "We handle identity fraud, employment fraud, address fraud, document forgery, syndicated fraud rings, and insider threat investigations." },
    ],
    industries: ["Banking", "NBFC", "Insurance"],
  },
  "document-collection": {
    title: "Document Collection & Review",
    tagline: "Secure document collection and compliance review",
    desc: "End-to-end document collection, digitisation, and compliance review — ensuring all onboarding and application documents are authentic and regulator-ready.",
    longDesc: "Our document collection service manages the complete lifecycle of onboarding documentation — from secure collection and digitisation through authenticity verification and compliance review.",
    benefits: ["Tamper-proof digital collection", "Authenticity verification", "Compliance format review", "Encrypted secure storage", "Audit-ready documentation"],
    features: ["Secure digital upload portal", "Document OCR & extraction", "Authenticity verification", "Format compliance review", "Encrypted cloud storage", "Access control & permissions", "Retention policy management", "Compliance export formats"],
    faqs: [
      { q: "How is document security maintained?", a: "All documents are encrypted with AES-256 at rest and in transit, stored in ISO 27001-certified data centres, with role-based access controls." },
    ],
    industries: ["Banking", "Insurance", "Enterprise"],
  },
  "call-center": {
    title: "Call Center Services",
    tagline: "Enterprise verification call centre — 24/7",
    desc: "Dedicated verification call centre for reference checks, employer confirmation, and candidate contact — 24/7 operations with multi-language support.",
    longDesc: "Our call centre operates 24/7 from multiple locations across India, handling reference verification, employer confirmation, and candidate outreach with professionally trained agents and quality-monitored recordings.",
    benefits: ["24/7 nationwide operations", "Multi-language support (12 languages)", "Quality-monitored recordings", "Real-time call tracking", "Structured report delivery"],
    features: ["Reference check calls", "Employer verification", "Candidate confirmation", "Multi-language capability", "Call recording & QA", "CRM integration", "Real-time reporting", "Escalation management"],
    faqs: [
      { q: "What languages do you support?", a: "We support 12 Indian languages including Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and more." },
    ],
    industries: ["Banking", "Enterprise", "NBFC"],
  },
};

const fallback = allServices["employee-verification"];

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const svc = allServices[slug] || fallback;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        <div className="absolute top-0 right-0 w-80 h-80 border border-white/5 rotate-12 translate-x-20 -translate-y-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/services" className="text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-6 inline-flex items-center gap-2">
              ← All Services
            </Link>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h1 className="text-[52px] md:text-[68px] font-black text-white leading-[1.0] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              {svc.title}
            </h1>
            <p className="text-[17px] text-white/60 max-w-xl leading-relaxed mb-8">{svc.tagline}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#C2590A] text-white text-[14px] font-semibold px-7 py-3.5 transition-colors group"

            >
              Request This Service <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview + image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] bg-[#0B1F66] relative overflow-hidden">
                <div className="absolute inset-0 dot-grid-dark" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-[80px] font-black text-white/8 leading-none mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                      BGV
                    </div>
                    <div className="w-16 h-0.5 bg-[#F97316] mx-auto mb-3" />
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
                      {svc.title}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 px-6 py-4">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#F97316]">
                    Industries: {svc.industries.join(" · ")}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="eyebrow mb-4">Service Overview</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
              <p className="text-[16px] text-[#475569] leading-relaxed mb-5">{svc.desc}</p>
              <p className="text-[15px] text-[#475569] leading-relaxed">{svc.longDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="py-20 bg-[#F8F9FB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="eyebrow mb-4">What&apos;s Included</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-8" />
              <div className="grid grid-cols-2 gap-px bg-[#E2E8F0]">
                {svc.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-white p-4 hover:bg-[#F8F9FB] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-[#0B1F66] flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white" />
                      </div>
                      <span className="text-[13px] font-medium text-[#0F172A]">{f}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-4">Key Benefits</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-8" />
              <div className="space-y-4">
                {svc.benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-4 border-l-2 border-[#F97316] pl-5 py-2"
                  >
                    <span className="text-[14px] font-semibold text-[#0F172A]">{b}</span>
                  </motion.div>
                ))}
              </div>

              {/* Process flow */}
              <div className="mt-10">
                <div className="eyebrow mb-4">Process Flow</div>
                <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
                <div className="space-y-0">
                  {["Request Submitted", "Verification Initiated", "Data Validation", "Quality Check", "Report Delivered"].map((step, si) => (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 bg-[#0B1F66] flex items-center justify-center">
                          <span className="text-[9px] font-black text-white">{String(si + 1).padStart(2, "0")}</span>
                        </div>
                        {si < 4 && <div className="w-px h-6 bg-[#E2E8F0]" />}
                      </div>
                      <span className="text-[13px] font-medium text-[#475569] py-2">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="eyebrow mb-4">Frequently Asked Questions</div>
          <div className="w-12 h-0.5 bg-[#F97316] mb-10" />
          <div className="space-y-2">
            {svc.faqs.map((faq, i) => (
              <div key={faq.q} className="border border-[#E2E8F0] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F8F9FB] transition-colors"
                >
                  <span className="text-[14px] font-semibold text-[#0F172A] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden border-t border-[#E2E8F0]"
                    >
                      <p className="px-6 py-4 text-[14px] text-[#475569] leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
