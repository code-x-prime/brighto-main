"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, BarChart3, Shield, FileCode, Plug, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";


const modules = [
  {
    icon: Cpu,
    title: "Verification Engine",
    desc: "Automated multi-source data collection with 99.9% accuracy",
    features: ["Multi-source data fusion", "Real-time status tracking", "Automated escalation"],
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Layer",
    desc: "ML models trained on 50M+ verification data points",
    features: ["Fraud pattern detection", "Risk score generation", "Behavioral analysis"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time insights and compliance reporting",
    features: ["Live verification stats", "Trend analysis", "Custom reports"],
  },
  {
    icon: Shield,
    title: "Risk Engine",
    desc: "360° risk assessment with geographic intelligence",
    features: ["Address validation", "Criminal record checks", "PEP screening"],
  },
  {
    icon: FileCode,
    title: "Reporting System",
    desc: "Automated report generation with digital signatures",
    features: ["Structured PDF reports", "Digital signatures", "Audit trail"],
  },
  {
    icon: Plug,
    title: "API Integrations",
    desc: "RESTful APIs for seamless enterprise integration",
    features: ["Webhook support", "SDK libraries", "99.99% uptime"],
  },
];

export default function TechSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <SectionHeader
            badge="Technology"
            title="Powered by "
            highlight="Intelligent Technology"
            subtitle="Six specialized modules working together to deliver the most accurate verification intelligence in India."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl border border-[#E2E8F0] p-6 overflow-hidden hover:shadow-xl hover:border-[#BFDBFE] transition-all duration-300"
            >
              {/* Gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#0B1F66] to-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-11 h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE] transition-colors">
                <mod.icon className="w-5 h-5 text-[#0B1F66]" />
              </div>

              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-2">
                Module {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                {mod.title}
              </h3>
              <p className="text-sm text-[#64748B] mb-4 leading-relaxed">{mod.desc}</p>

              <div className="space-y-1.5">
                {mod.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span className="text-xs text-[#475569]">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

