"use client";

import CTASection from "@/src/components/home/CTASection";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Cpu, BrainCircuit, BarChart3, Shield, FileCode, Plug, CheckCircle, Zap, Lock } from "lucide-react";


const modules = [
  {
    icon: Cpu,
    number: "01",
    title: "Verification Engine",
    desc: "The core processing layer that orchestrates all verification workflows — from data ingestion to final report generation.",
    capabilities: [
      "Multi-source simultaneous data queries",
      "Automated escalation protocols",
      "Real-time status tracking",
      "SLA monitoring and enforcement",
      "Queue management and prioritization",
    ],
    color: "#0B1F66",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Decision Layer",
    desc: "Machine learning models trained on 50M+ verification cases to detect fraud patterns and score risk with unprecedented accuracy.",
    capabilities: [
      "Fraud pattern recognition",
      "Anomaly detection algorithms",
      "Behavioral scoring models",
      "Natural language processing for document analysis",
      "Continuous model improvement",
    ],
    color: "#38BDF8",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics Dashboard",
    desc: "Real-time intelligence center giving enterprises complete visibility into their verification operations.",
    capabilities: [
      "Live verification pipeline view",
      "Risk trend analysis",
      "Team performance metrics",
      "Custom report builder",
      "Export in multiple formats",
    ],
    color: "#22C55E",
  },
  {
    icon: Shield,
    number: "04",
    title: "Risk Engine",
    desc: "Comprehensive risk assessment combining 200+ data signals to generate accurate risk profiles.",
    capabilities: [
      "Criminal & court record aggregation",
      "Address verification networks",
      "PEP and sanctions screening",
      "Credit risk indicators",
      "Geographic risk profiling",
    ],
    color: "#EF4444",
  },
  {
    icon: FileCode,
    number: "05",
    title: "Reporting System",
    desc: "Automated report generation with digital signatures, audit trails, and regulatory compliance formatting.",
    capabilities: [
      "Automated PDF generation",
      "Digital signature integration",
      "Regulatory format compliance",
      "Audit trail management",
      "Multi-language support",
    ],
    color: "#F97316",
  },
  {
    icon: Plug,
    number: "06",
    title: "API Gateway",
    desc: "Enterprise-grade API infrastructure with 99.99% uptime, comprehensive documentation, and SDK support.",
    capabilities: [
      "RESTful API with webhook support",
      "SDK for Python, Java, Node.js",
      "OAuth 2.0 authentication",
      "Rate limiting and usage analytics",
      "Sandbox environment",
    ],
    color: "#8B5CF6",
  },
];

const techStats = [
  { value: "99.99%", label: "API Uptime" },
  { value: "<200ms", label: "Avg API Response" },
  { value: "AES-256", label: "Data Encryption" },
  { value: "99.9%", label: "ML Accuracy" },
];

import React, { useEffect, useState } from "react";

export default function TechnologyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          >
            <Zap className="w-3 h-3" />
            Technology Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Built for{" "}
            <span className="text-[#38BDF8]">Enterprise Scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#64748B] max-w-2xl mx-auto mb-10"
          >
            Six specialized modules. One unified platform. Architected for India&apos;s most demanding financial institutions.
          </motion.p>

          {/* Tech stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {techStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-xl font-bold text-[#38BDF8] mb-0.5" style={{ fontFamily: "Syne, sans-serif" }}>{s.value}</div>
                <div className="text-xs text-[#64748B]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <SectionHeader
              badge="Platform Modules"
              title="Six Modules. "
              highlight="One Platform."
              subtitle="Every module purpose-built and deeply integrated for seamless verification intelligence."
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-xl hover:border-[#BFDBFE] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(to right, ${mod.color}, transparent)` }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${mod.color}15` }}>
                    <mod.icon className="w-5 h-5" style={{ color: mod.color }} />
                  </div>
                  <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Module {mod.number}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{mod.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-5">{mod.desc}</p>
                <div className="space-y-1.5">
                  {mod.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: mod.color }} />
                      <span className="text-xs text-[#475569]">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security architecture */}
      <section className="py-16 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
              <Lock className="w-6 h-6 text-[#38BDF8] inline mr-2" />
              Security Architecture
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm">
              Every layer of our infrastructure is designed to meet and exceed banking-grade security standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Zero-Trust Network", "AES-256 Encryption", "mTLS Authentication",
              "ISO 27001 Certified", "24x7 SOC", "Tier-4 Data Centers",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-[#38BDF8]/20 rounded-xl p-3 text-center"
              >
                <div className="w-2 h-2 bg-[#38BDF8] rounded-full mx-auto mb-2" />
                <span className="text-xs text-[#94A3B8]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
