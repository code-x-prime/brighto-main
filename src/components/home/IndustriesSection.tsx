"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Tabler SVGs
const IconBank = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l18 0" />
    <path d="M4 21v-11l7 -5l7 5v11" />
    <path d="M8 14l0 3" />
    <path d="M12 14l0 3" />
    <path d="M16 14l0 3" />
  </svg>
);

const IconCoins = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
    <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
    <path d="M3 6c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
    <path d="M3 6v10c0 1.657 2.686 3 6 3c2.181 0 4.097 -.58 5.09 -1.431" />
  </svg>
);

const IconMobilePay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v5" />
    <path d="M11 5h2" />
    <path d="M12 17v.01" />
    <path d="M16 16l3 3l3 -3" />
    <path d="M19 19v-6" />
  </svg>
);

const IconShieldCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 12l2 2l4 -4" />
    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  </svg>
);

const IconBriefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    <path d="M12 12l0 .01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>
);

const industries = [
  {
    name: "Banking",
    icon: IconBank,
    desc: "Serving commercial and private sector banks with KYC, employee screening, and fraud risk solutions that meet RBI regulatory standards.",
    services: ["Employee Verification", "KYC Compliance", "Fraud Risk Intelligence"],
    href: "/clients#banking",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "NBFC",
    icon: IconCoins,
    desc: "Tailored verification workflows for non-banking finance companies — borrower screening, field CPV, and ongoing monitoring.",
    services: ["Borrower Verification", "CPV Services", "Risk Scoring"],
    href: "/clients#nbfc",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Fintech",
    icon: IconMobilePay,
    desc: "High-velocity, API-first verification for digital lenders and payment platforms requiring fast onboarding without compliance compromise.",
    services: ["Instant KYC", "Document Verification", "AML Screening"],
    href: "/clients#fintech",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Insurance",
    icon: IconShieldCheck,
    desc: "Agent onboarding, policyholder verification, and fraud detection for life and general insurance companies across India.",
    services: ["Agent Screening", "Policyholder KYC", "Fraud Detection"],
    href: "/clients#insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Enterprise",
    icon: IconBriefcase,
    desc: "Large-scale employee screening and due diligence programs for India's corporate sector — tailored to workforce size and risk profile.",
    services: ["Bulk Screening", "Due Diligence", "Vendor Verification"],
    href: "/clients#enterprise",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
];

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto scroll logic
  const stopTimer = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = React.useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % industries.length);
    }, 2800); // changes every 2.8 seconds
  }, [stopTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const handleCardInteraction = (idx: number) => {
    stopTimer();
    setActiveIdx(idx);
    startTimer();
  };

  return (
    <section className="py-16 bg-[#0B1F66] relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

      {/* Decorative radial glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Heading + Image */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316] mb-3">
                Industries Served
              </div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-4" />
              <h2 className="text-[36px] md:text-[44px] font-black text-white leading-tight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Built for
                <br />
                Financial India
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
                Verification requirements differ significantly across sectors. Our teams understand the regulatory and operational nuances of each industry we serve.
              </p>
            </div>

            {/* Dynamic Image Container with smooth transitions */}
            <div className="relative p-0.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl shadow-black/35 max-w-[340px] aspect-[4/3]">
              <div className="absolute inset-0 border border-[#F97316]/10 rounded-xl pointer-events-none z-10" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={industries[activeIdx].image}
                  alt={industries[activeIdx].name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover rounded-lg opacity-90"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive Industry Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isActive = activeIdx === i;

              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => handleCardInteraction(i)}
                  onMouseEnter={() => handleCardInteraction(i)}
                  className={cn(
                    "border backdrop-blur-md p-5 rounded-xl group transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-[#071444]/90 border-[#F97316]/60 shadow-lg shadow-[#F97316]/5 scale-[1.01] opacity-100"
                      : "bg-white/5 border-white/10 opacity-50 hover:opacity-85"
                  )}
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Tabler Icon Container */}
                    <div className={cn(
                      "p-2.5 rounded-lg transition-colors duration-300 border border-white/5",
                      isActive
                        ? "bg-[#F97316] text-white"
                        : "bg-white/5 text-[#F97316] group-hover:bg-[#F97316]/10"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-[19px] font-black text-white" style={{ fontFamily: "Manrope, sans-serif" }}>
                          {ind.name}
                        </h3>
                        <span className={cn(
                          "text-[11px] font-bold font-mono transition-colors",
                          isActive ? "text-[#F97316]" : "text-[#F97316]/40"
                        )}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="text-[13px] text-white/60 leading-relaxed">{ind.desc}</p>

                      {/* Services list with premium dash bullets */}
                      <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
                        {ind.services.map((s) => (
                          <div key={s} className="flex items-center gap-1.5">
                            <div className={cn(
                              "w-1.5 h-1.5 rounded-full transition-colors",
                              isActive ? "bg-[#F97316]" : "bg-white/30"
                            )} />
                            <span className={cn(
                              "text-[11.5px] font-medium transition-colors",
                              isActive ? "text-white/80" : "text-white/40"
                            )}>{s}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <a
                          href={ind.href}
                          className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#F97316] hover:underline"
                        >
                          Learn solutions <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
