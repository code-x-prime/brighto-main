"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconUserCheck,
  IconFileSearch,
  IconMapPin,
  IconFingerprint,
  IconTrendingUp,
  IconShieldExclamation,
  IconFolderOpen,
  IconPhone,
  IconArrowRight,
  IconCheck,
} from "@tabler/icons-react";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const services = [
  {
    number: "01",
    icon: IconUserCheck,
    title: "Employee Verification",
    desc: "Pre-employment screening covering criminal records, education & employment history.",
    href: "/services/employee-verification",
  },
  {
    number: "02",
    icon: IconFileSearch,
    title: "Background Verification",
    desc: "Multi-layer checks against court records, police databases & global watchlists.",
    href: "/services/background-verification",
  },
  {
    number: "03",
    icon: IconMapPin,
    title: "CPV Services",
    desc: "Geo-tagged field agents confirming residential, business & office addresses.",
    href: "/services/cpv-services",
  },
  {
    number: "04",
    icon: IconFingerprint,
    title: "KYC Verification",
    desc: "Identity verification, document auth & AML/PEP screening for RBI compliance.",
    href: "/services/kyc-verification",
  },
  {
    number: "07",
    icon: IconFolderOpen,
    title: "Document Collection",
    desc: "Secure collection, digitization & compliance review of onboarding documentation.",
    href: "/services/document-collection",
  },
  {
    number: "08",
    icon: IconPhone,
    title: "Call Center Services",
    desc: "Verification call center for reference checks & employer confirmation across India.",
    href: "/services/call-center",
  },
];

/* Tall cards — services 05 and 06 with richer content */
const tallCards = [
  {
    number: "05",
    icon: IconTrendingUp,
    title: "Risk Intelligence",
    desc: "Real-time fraud risk scoring, behavioral analytics, and geographic risk profiling that helps you make faster and safer credit and lending decisions.",
    href: "/services/risk-intelligence",
    features: [
      "Real-time fraud scoring",
      "Behavioral analytics engine",
      "Geographic risk profiling",
      "Predictive credit models",
      "Live watchlist screening",
    ],
    metric: { value: "99.2%", label: "Fraud Detection Accuracy" },
  },
  {
    number: "06",
    icon: IconShieldExclamation,
    title: "Fraud Risk Control Unit",
    desc: "A dedicated FRCU team that conducts deep-dive fraud investigations, files suspicious activity reports, and delivers enterprise-grade risk advisory across industries.",
    href: "/services/fraud-risk-control",
    features: [
      "Complex fraud investigations",
      "SAR filing & compliance",
      "Enterprise risk advisory",
      "Cross-industry intelligence",
      "Incident response support",
    ],
    metric: { value: "48h", label: "Average Case Resolution" },
  },
];

/* ── Small service cell ───────────────────────────────────────────────────── */
function ServiceCell({
  svc,
  delay = 0,
}: {
  svc: (typeof services)[0];
  delay?: number;
}) {
  const Icon = svc.icon;
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={svc.href}
        className="group flex flex-col h-full p-6 lg:p-7 bg-white border border-[#E2E8F0] hover:border-[#0B1F66]/25 hover:bg-[#F8FAFF] transition-all duration-300"
      >
        {/* Top: number + icon */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#CBD5E1] group-hover:text-[#F97316] transition-colors duration-300">
            {svc.number}
          </span>
          <span className="w-9 h-9 rounded-xl bg-[#EEF2FF] group-hover:bg-[#0B1F66] flex items-center justify-center transition-all duration-300 flex-shrink-0">
            <Icon
              size={18}
              className="text-[#0B1F66] group-hover:text-white transition-colors duration-300"
              stroke={1.6}
            />
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[15px] font-bold text-[#0F172A] group-hover:text-[#0B1F66] mb-2 leading-snug transition-colors duration-300"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {svc.title}
        </h3>

        {/* Desc */}
        <p className="text-[12.5px] text-[#94A3B8] leading-relaxed mb-4 flex-1">
          {svc.desc}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1 text-[12px] font-semibold text-[#0B1F66] group-hover:text-[#F97316] transition-colors duration-300 mt-auto">
          Learn more
          <IconArrowRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            stroke={2}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Tall service cell (row-span-2) ──────────────────────────────────────── */
function TallServiceCell({
  svc,
  delay = 0,
}: {
  svc: (typeof tallCards)[0];
  delay?: number;
}) {
  const Icon = svc.icon;
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={svc.href}
        className="group flex flex-col h-full p-7 lg:p-8 bg-white border border-[#E2E8F0] hover:border-[#0B1F66]/30 hover:bg-[#F8FAFF] transition-all duration-300"
      >
        {/* Number + icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#CBD5E1] group-hover:text-[#F97316] transition-colors duration-300">
            {svc.number}
          </span>
          <span className="w-10 h-10 rounded-xl bg-[#EEF2FF] group-hover:bg-[#0B1F66] flex items-center justify-center transition-all duration-300 flex-shrink-0">
            <Icon
              size={20}
              className="text-[#0B1F66] group-hover:text-white transition-colors duration-300"
              stroke={1.6}
            />
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[18px] font-black text-[#0F172A] group-hover:text-[#0B1F66] mb-3 leading-snug transition-colors duration-300"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {svc.title}
        </h3>

        {/* Desc */}
        <p className="text-[13px] text-[#64748B] leading-relaxed mb-6">
          {svc.desc}
        </p>

        {/* Feature list */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {svc.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-[#EEF2FF] group-hover:bg-[#0B1F66]/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <IconCheck size={10} className="text-[#0B1F66]" stroke={2.5} />
              </span>
              <span className="text-[12.5px] text-[#475569] leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* Metric chip */}
        <div className="mt-auto mb-5 inline-flex items-center gap-3 bg-[#F1F5FF] border border-[#DBEAFE] px-4 py-3 rounded-xl w-full">
          <div>
            <div
              className="text-[22px] font-black text-[#0B1F66] leading-none"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {svc.metric.value}
            </div>
            <div className="text-[10.5px] text-[#64748B] font-medium mt-0.5">
              {svc.metric.label}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#0B1F66] group-hover:text-[#F97316] transition-colors duration-300">
          Learn more
          <IconArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            stroke={2}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="bg-[#F8FAFF] py-2 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Mobile: simple stacked grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E2E8F0] md:hidden">
          {/* All 8 services flattened for mobile */}
          {[services[0], services[1], services[2], services[3]].map((svc, i) => (
            <ServiceCell key={svc.number} svc={svc} delay={i * 0.06} />
          ))}
          {tallCards.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                href={svc.href}
                className="group flex flex-col h-full p-6 bg-white border border-[#E2E8F0]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#CBD5E1]">{svc.number}</span>
                  <span className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                    <svc.icon size={18} className="text-[#0B1F66]" stroke={1.6} />
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{svc.title}</h3>
                <p className="text-[12.5px] text-[#94A3B8] leading-relaxed mb-4 flex-1">{svc.desc}</p>
                <div className="flex items-center gap-1 text-[12px] font-semibold text-[#0B1F66]">
                  Learn more <IconArrowRight size={13} stroke={2} />
                </div>
              </Link>
            </motion.div>
          ))}
          {[services[4], services[5]].map((svc, i) => (
            <ServiceCell key={svc.number} svc={svc} delay={i * 0.06} />
          ))}
        </div>

        {/* ── Desktop: reference image grid ── */}
        <div className="hidden md:grid grid-cols-4 gap-px bg-[#E2E8F0]">

          {/* Row 1: services 01-04 */}
          {services.slice(0, 4).map((svc, i) => (
            <ServiceCell key={svc.number} svc={svc} delay={i * 0.07} />
          ))}

          {/* Row 2-3 col 1: service 05 (tall) */}
          <div className="row-span-2 h-full">
            <TallServiceCell svc={tallCards[0]} delay={0.28} />
          </div>

          {/* CENTER: col-span-2 row-span-2 */}
          <motion.div
            className="col-span-2 row-span-2 bg-[#0B1F66] flex flex-col items-center justify-center text-center px-8 py-16 lg:py-20 border border-[#0B1F66]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#93C5FD] border border-[#1e3a7a] px-4 py-1.5 rounded-full mb-6">
              Our Services
            </span>
            <h2
              className="text-[36px] lg:text-[48px] font-black text-white leading-[1.04] tracking-tight mb-5"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Verification
              <br />
              <span className="text-[#F97316]">Solutions</span>
            </h2>
            <p className="text-[13.5px] text-[#93C5FD] leading-relaxed max-w-[260px] mb-8">
              Eight specialised services for identity verification, background screening &amp; risk intelligence.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6b0f] text-white text-[13px] font-bold px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg shadow-[#F97316]/30"
            >
              Explore All <IconArrowRight size={14} stroke={2.5} />
            </Link>
          </motion.div>

          {/* Row 2-3 col 4: service 06 (tall) */}
          <div className="row-span-2 h-full">
            <TallServiceCell svc={tallCards[1]} delay={0.35} />
          </div>

          {/* Row 4 col 1: service 07 */}
          <ServiceCell svc={services[4]} delay={0.42} />

          {/* Row 4 col 2-3: stat strip */}
          <div className="col-span-2 bg-white border border-[#E2E8F0] flex items-center justify-center gap-8 lg:gap-14 px-8 py-5">
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "10M+", label: "Verifications / Year" },
              { value: "48h",  label: "Avg. Turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-[24px] font-black text-[#0B1F66] leading-none mb-0.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[10.5px] text-[#94A3B8] font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row 4 col 4: service 08 */}
          <ServiceCell svc={services[5]} delay={0.49} />

        </div>
      </div>
    </section>
  );
}
