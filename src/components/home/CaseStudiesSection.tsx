"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    sector: "Private Sector Bank",
    industry: "Banking",
    metric: "70%",
    metricLabel: "Reduction in verification TAT",
    impact: "Eliminated 3-month onboarding backlog. Moved from manual to AI-augmented screening across 12 regional offices.",
    numbers: [
      { v: "8,400", l: "Employees screened" },
      { v: "₹2.4Cr", l: "Annual cost savings" },
      { v: "Zero", l: "Post-hire fraud incidents" },
    ],
  },
  {
    sector: "Leading NBFC",
    industry: "NBFC",
    metric: "40%",
    metricLabel: "Improvement in CPV accuracy",
    impact: "Replaced unreliable manual CPV with Brighto's geo-tagged field network. Borrower verification now takes 6 hours, not 3 days.",
    numbers: [
      { v: "22,000+", l: "Monthly verifications" },
      { v: "3×", l: "Faster field verification" },
      { v: "95%", l: "Candidate satisfaction" },
    ],
  },
  {
    sector: "Digital Lending Fintech",
    industry: "Fintech",
    metric: "8%",
    metricLabel: "KYC drop-off rate (down from 45%)",
    impact: "API-first KYC integration reduced onboarding friction. RBI-compliant digital workflow delivered without operational overhead.",
    numbers: [
      { v: "5 min", l: "Average KYC completion" },
      { v: "100%", l: "RBI compliance maintained" },
      { v: "4.8/5", l: "Customer satisfaction score" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 mb-14">
          <div>
            <div className="eyebrow mb-4">Case Studies</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h2 className="text-[40px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Measurable
              <br />
              Impact
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-xl">
              Every engagement is measured by outcomes. These case studies reflect the operational improvements our clients achieve within 90 days of deployment.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur-xs border border-[#E2E8F0] group hover:border-[#0B1F66] transition-colors rounded-xl"
            >
              <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
                {/* Left — headline metric */}
                <div className="p-8 bg-[#F8F9FB]/70 backdrop-blur-xs group-hover:bg-[#0B1F66] transition-colors">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] group-hover:text-white/40 mb-3 transition-colors">
                    {c.industry}
                  </div>
                  <div
                    className="text-[52px] font-black text-[#0B1F66] group-hover:text-[#F97316] leading-none mb-1 transition-colors"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {c.metric}
                  </div>
                  <div className="text-[12px] font-semibold text-[#475569] group-hover:text-white/60 transition-colors">
                    {c.metricLabel}
                  </div>
                </div>

                {/* Middle — description */}
                <div className="p-8 md:col-span-2">
                  <div className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">{c.sector}</div>
                  <p className="text-[15px] text-[#0F172A] leading-relaxed font-medium">{c.impact}</p>
                </div>

                {/* Right — numbers */}
                <div className="p-8">
                  <div className="space-y-4">
                    {c.numbers.map((n) => (
                      <div key={n.l}>
                        <div
                          className="text-[22px] font-black text-[#0B1F66] leading-none"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {n.v}
                        </div>
                        <div className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B1F66] hover:text-[#F97316] transition-colors group"
          >
            View all case studies <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
