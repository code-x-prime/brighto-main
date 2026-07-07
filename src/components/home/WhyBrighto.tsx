"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Enterprise Clients", desc: "Banks, NBFCs, insurers & corporates" },
  { value: "50M+", label: "Records Verified", desc: "Cumulative verification database" },
  { value: "Pan India", label: "Nationwide Coverage", desc: "Operations in all 28 states" },
  { value: "24 hrs", label: "Average TAT", desc: "Standard turnaround time" },
  { value: "ISO 27001", label: "Certified Infrastructure", desc: "Banking-grade data security" },
  { value: "99.9%", label: "Accuracy Rate", desc: "AI-augmented verification precision" },
];

const differentiators = [
  {
    title: "Regulatory Alignment",
    desc: "Every workflow is designed around RBI, SEBI, IRDAI, and DPDP Act 2023 compliance requirements. We stay ahead of regulation so you don't have to.",
  },
  {
    title: "Dedicated Account Management",
    desc: "Enterprise accounts receive a named relationship manager, priority SLAs, and custom reporting dashboards built to your specifications.",
  },
  {
    title: "Hybrid Verification Model",
    desc: "AI-powered automation backed by experienced human analysts — combining speed with the judgment that complex cases require.",
  },
  {
    title: "Data Security Architecture",
    desc: "End-to-end AES-256 encryption, zero-trust network design, and ISO 27001-certified data centres with 99.99% uptime guarantees.",
  },
];

export default function WhyBrighto() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4">Why Brighto India</div>
          <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
          <h2 className="text-[40px] md:text-[48px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
            The Standard for Enterprise
            <br />
            Verification in India
          </h2>
        </div>

        {/* Stats bento */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E2E8F0] mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/75 backdrop-blur-xs p-8 group hover:bg-[#F8F9FB]/90 transition-colors"
            >
              <div
                className="text-[42px] md:text-[52px] font-black text-[#0B1F66] stat-number mb-2 group-hover:text-[#F97316] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-[14px] font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                {s.label}
              </div>
              <div className="text-[12px] text-[#94A3B8] uppercase tracking-wide font-medium">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-l-2 border-[#0B1F66] pl-6"
            >
              <h3 className="text-[18px] font-black text-[#0F172A] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                {d.title}
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
