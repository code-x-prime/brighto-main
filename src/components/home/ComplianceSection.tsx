"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Clock, CheckCircle } from "lucide-react";

const certifications = [
  { name: "ISO 27001", desc: "Information Security", icon: Shield },
  { name: "ISO 9001", desc: "Quality Management", icon: CheckCircle },
  { name: "SOC 2 Type II", desc: "Security & Availability", icon: Eye },
  { name: "AES-256", desc: "Data Encryption", icon: Lock },
];

const securityFeatures = [
  { icon: Server, text: "Tier-4 Data Centers" },
  { icon: Lock, text: "End-to-End Encryption" },
  { icon: Eye, text: "24x7 SOC Monitoring" },
  { icon: Clock, text: "99.99% Uptime SLA" },
  { icon: Shield, text: "Zero-Trust Architecture" },
  { icon: CheckCircle, text: "RBI & SEBI Compliant" },
];

export default function ComplianceSection() {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern-dark" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#38BDF8]/5 blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0B1F66]/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            Security & Compliance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Banking-Grade Security{" "}
            <span className="text-[#38BDF8]">Infrastructure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] max-w-xl mx-auto"
          >
            Your data is protected by the same security standards used by India&apos;s largest banks.
          </motion.p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative text-center p-6 rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 overflow-hidden group cursor-default"
              style={{
                animation: `borderGlow 3s ease-in-out infinite`,
                animationDelay: `${i * 0.75}s`,
              }}
            >
              {/* Pulsing glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                className="absolute inset-0 bg-linear-to-b from-[#38BDF8]/10 to-transparent rounded-2xl"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#38BDF8]/15 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#38BDF8]/25 transition-colors">
                  <cert.icon className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div className="text-lg font-bold text-white mb-0.5" style={{ fontFamily: "Syne, sans-serif" }}>
                  {cert.name}
                </div>
                <div className="text-xs text-[#64748B]">{cert.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={feat.text}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10"
            >
              <feat.icon className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span className="text-xs text-[#94A3B8]">{feat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

