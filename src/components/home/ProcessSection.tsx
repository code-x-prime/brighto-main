"use client";

import { motion } from "framer-motion";
import { FileText, Search, CheckSquare, Brain, BarChart2, Send } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";


const steps = [
  {
    icon: FileText,
    title: "Request",
    desc: "Submit verification request via API or portal",
    color: "#0B1F66",
    bg: "#EFF6FF",
  },
  {
    icon: Search,
    title: "Verification",
    desc: "AI-powered data collection & field verification",
    color: "#38BDF8",
    bg: "#F0F9FF",
  },
  {
    icon: CheckSquare,
    title: "Validation",
    desc: "Multi-layer cross-verification & validation",
    color: "#F97316",
    bg: "#FFF7ED",
  },
  {
    icon: Brain,
    title: "Analysis",
    desc: "ML-driven risk scoring & anomaly detection",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: BarChart2,
    title: "Report",
    desc: "Detailed compliance report generation",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: Send,
    title: "Delivery",
    desc: "Instant delivery via API, email or portal",
    color: "#F97316",
    bg: "#FFF7ED",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <SectionHeader
            badge="How It Works"
            title="Verification in "
            highlight="6 Simple Steps"
            subtitle="From request to delivery — our streamlined process ensures accuracy and speed at every stage."
          />
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-px bg-linear-to-r from-[#E2E8F0] via-[#0B1F66]/30 to-[#E2E8F0]" />

            {/* Progress line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-[52px] left-[10%] right-[10%] h-px bg-linear-to-r from-[#0B1F66] to-[#38BDF8] origin-left"
            />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center relative z-10 border-2 border-white shadow-md`}
                      style={{ backgroundColor: step.bg }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#E2E8F0] flex items-center justify-center">
                      <span className="text-[9px] font-bold text-[#64748B]">{i + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-[#E2E8F0]"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0`} style={{ backgroundColor: step.bg }}>
                <step.icon className="w-5 h-5" style={{ color: step.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#94A3B8]">Step {i + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-0.5">{step.title}</h3>
                <p className="text-xs text-[#64748B]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

