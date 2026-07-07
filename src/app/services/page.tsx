"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const services = [
  {
    slug: "employee-verification",
    num: "01",
    title: "Employee Verification",
    tagline: "Hire with complete confidence",
    desc: "End-to-end pre-employment screening covering criminal records, education, employment history, and reference checks across all 28 Indian states.",
    industries: ["Banking", "Insurance", "Enterprise"],
  },
  {
    slug: "background-verification",
    num: "02",
    title: "Background Verification",
    tagline: "Know who you are engaging with",
    desc: "Multi-source background checks against court records, police databases, credit bureaus, and global watchlists — accurate, fast, and fully documented.",
    industries: ["NBFC", "Fintech", "Banking"],
  },
  {
    slug: "cpv-services",
    num: "03",
    title: "CPV Services",
    tagline: "Verification at the doorstep",
    desc: "Contact Point Verification with geo-tagged field agents confirming residential, business, and office addresses across India within 24 hours.",
    industries: ["NBFC", "Insurance", "Fintech"],
  },
  {
    slug: "kyc-verification",
    num: "04",
    title: "KYC Verification",
    tagline: "RBI-compliant digital onboarding",
    desc: "AI-powered identity verification, document authentication, and AML/PEP screening — fully compliant with RBI Master Directions on KYC.",
    industries: ["Banking", "Fintech", "NBFC"],
  },
  {
    slug: "fraud-risk-control",
    num: "05",
    title: "Fraud Risk Control Unit",
    tagline: "Dedicated fraud investigation team",
    desc: "Specialised FRCU handling complex fraud investigations, suspicious activity reports, and enterprise risk advisory for financial institutions.",
    industries: ["Banking", "Insurance", "NBFC"],
  },
  {
    slug: "document-collection",
    num: "06",
    title: "Document Collection",
    tagline: "Secure, organised, verified",
    desc: "End-to-end document collection, digitisation, and compliance review — ensuring all submissions are authentic, complete, and regulator-ready.",
    industries: ["Banking", "Insurance", "Enterprise"],
  },
  {
    slug: "risk-intelligence",
    num: "07",
    title: "Risk Intelligence",
    tagline: "360° risk assessment",
    desc: "Real-time fraud risk scoring, behavioural analytics, and geographic risk profiling to support credit decisions and lending operations.",
    industries: ["NBFC", "Fintech", "Banking"],
  },
  {
    slug: "call-center",
    num: "08",
    title: "Call Center Services",
    tagline: "Human-led verification support",
    desc: "Dedicated verification call centre for reference checks, employer confirmation, and candidate contact — 24/7, multi-language, nationwide.",
    industries: ["Enterprise", "Banking", "NBFC"],
  },
];

const industryCards = [
  { name: "Banking", count: "120+ clients" },
  { name: "NBFC", count: "85+ clients" },
  { name: "Insurance", count: "75+ clients" },
  { name: "Fintech", count: "150+ clients" },
  { name: "HR Tech", count: "40+ clients" },
  { name: "Enterprise", count: "30+ clients" },
];

import React, { useEffect, useState } from "react";
import ContactCTA from "@/src/components/home/ContactCTA";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        <div className="absolute top-0 right-0 w-96 h-96 border border-white/5 rotate-12 translate-x-24 -translate-y-24" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316] mb-4">Verification Solutions</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
              <h1 className="text-[52px] md:text-[64px] font-black text-white leading-[1.0] tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Enterprise
                <br />
                Verification
                <br />
                Solutions
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <p className="text-[17px] text-white/60 leading-relaxed max-w-md mb-6">
                Eight specialised services covering every dimension of verification, screening, and risk intelligence — built for banks, NBFCs, and India&apos;s largest enterprises.
              </p>
              <div className="flex flex-wrap gap-4 text-[12px] font-medium uppercase tracking-widest text-white/40">
                <span>ISO 27001 Certified</span>
                <span className="text-[#F97316]">·</span>
                <span>RBI Compliant</span>
                <span className="text-[#F97316]">·</span>
                <span>Pan-India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E8F0]">
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={`/services/${svc.slug}`} className="group block bg-white p-7 h-full hover:bg-[#0B1F66] transition-colors duration-300 min-h-[260px] flex flex-col">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#CBD5E1] group-hover:text-[#F97316] mb-3 transition-colors">
                    {svc.num}
                  </div>
                  <h3 className="text-[17px] font-black text-[#0F172A] group-hover:text-white mb-2 leading-tight transition-colors" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {svc.title}
                  </h3>
                  <div className="text-[11px] font-medium text-[#F97316] mb-3 uppercase tracking-wide">{svc.tagline}</div>
                  <p className="text-[12px] text-[#64748B] group-hover:text-white/60 leading-relaxed mb-4 flex-1 transition-colors">
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {svc.industries.map((ind) => (
                      <span key={ind} className="text-[10px] font-semibold text-[#94A3B8] group-hover:text-white/40 uppercase tracking-wide transition-colors">{ind}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#0B1F66] group-hover:text-[#F97316] transition-colors mt-auto">
                    View service <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual service sections — alternating layout */}
      {services.slice(0, 4).map((svc, i) => (
        <section key={svc.slug} className={`py-20 ${i % 2 === 0 ? "bg-[#F8F9FB]" : "bg-white"} border-t border-[#E2E8F0]`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] bg-[#0B1F66] overflow-hidden">
                  <div className="absolute inset-0 dot-grid-dark" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[80px] font-black text-white/8 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{svc.num}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-white/30">{svc.title}</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-4 bg-black/20">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#F97316]">Industries: {svc.industries.join(", ")}</div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="text-[10px] font-black text-[#F97316] uppercase tracking-widest mb-3">{svc.num}</div>
                <div className="w-10 h-0.5 bg-[#F97316] mb-5" />
                <h2 className="text-[34px] font-black text-[#0B1F66] leading-tight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {svc.title}
                </h2>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-6">{svc.desc}</p>

                {/* Process flow */}
                <div className="mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Verification Process</div>
                  <div className="flex items-start gap-0">
                    {["Request", "Verification", "Validation", "Quality Check", "Report"].map((step, si) => (
                      <div key={step} className="flex items-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-[#0B1F66] flex items-center justify-center mb-1">
                            <span className="text-[9px] font-black text-white">{String(si + 1).padStart(2, "0")}</span>
                          </div>
                          <div className="text-[9px] font-medium text-[#94A3B8] text-center whitespace-nowrap">{step}</div>
                        </div>
                        {si < 4 && <div className="w-6 h-px bg-[#E2E8F0] mx-1 mb-3" />}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 bg-[#0B1F66] hover:bg-[#071444] text-white text-[13px] font-semibold px-6 py-2.5 transition-colors rounded-xl"
                >
                  Full Service Overview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries served */}
      <section className="py-20 bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="eyebrow mb-4">Industries Served</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-2" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E2E8F0]">
            {industryCards.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white p-6 hover:bg-[#0B1F66] group transition-colors cursor-default"
              >
                <div className="text-[18px] font-black text-[#0B1F66] group-hover:text-white mb-1 transition-colors" style={{ fontFamily: "Manrope, sans-serif" }}>{ind.name}</div>
                <div className="text-[11px] text-[#94A3B8] group-hover:text-white/40 transition-colors">{ind.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
