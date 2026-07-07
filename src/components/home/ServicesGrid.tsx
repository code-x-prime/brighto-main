"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserCheck, Shield, MapPin, ScanFace, AlertTriangle, Lock,
  FileCheck, Phone, ArrowRight
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";


const services = [
  {
    icon: UserCheck,
    name: "Employee Verification",
    desc: "End-to-end pre-employment screening with AI-powered accuracy.",
    href: "/services/employee-verification",
    color: "#0B1F66",
    bg: "#EFF6FF",
    span: 2,
  },
  {
    icon: Shield,
    name: "Background Verification",
    desc: "Criminal, education, and employment history checks.",
    href: "/services/background-verification",
    color: "#F97316",
    bg: "#FFF7ED",
    span: 1,
  },
  {
    icon: MapPin,
    name: "CPV Services",
    desc: "Contact Point Verification at the doorstep.",
    href: "/services/cpv-services",
    color: "#22C55E",
    bg: "#F0FDF4",
    span: 1,
  },
  {
    icon: ScanFace,
    name: "KYC Verification",
    desc: "AI-powered identity and document verification workflows.",
    href: "/services/kyc-verification",
    color: "#38BDF8",
    bg: "#F0F9FF",
    span: 1,
  },
  {
    icon: AlertTriangle,
    name: "Risk Intelligence",
    desc: "Real-time fraud risk scoring and alert systems.",
    href: "/services/risk-intelligence",
    color: "#EF4444",
    bg: "#FEF2F2",
    span: 2,
  },
  {
    icon: Lock,
    name: "Fraud Risk Control",
    desc: "Dedicated FRCU team for complex fraud investigations.",
    href: "/services/fraud-risk-control",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    span: 1,
  },
  {
    icon: FileCheck,
    name: "Document Collection",
    desc: "Secure document collection and review at scale.",
    href: "/services/document-collection",
    color: "#0B1F66",
    bg: "#EFF6FF",
    span: 1,
  },
  {
    icon: Phone,
    name: "Call Center Services",
    desc: "Dedicated verification call center support.",
    href: "/services/call-center",
    color: "#F97316",
    bg: "#FFF7ED",
    span: 1,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeader
            badge="Our Services"
            title="Verification Solutions Built for "
            highlight="Enterprise Scale"
            subtitle="From KYC to fraud detection — every service powered by AI and delivered with banking-grade security."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`${service.span === 2 ? "md:col-span-2" : "col-span-1"}`}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full bg-white rounded-2xl border border-[#E2E8F0] p-6 overflow-hidden hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.bg }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">{service.desc}</p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1F66] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>

                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F66] hover:text-[#F97316] transition-colors"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
