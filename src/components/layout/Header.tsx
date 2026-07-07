"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Company",
    key: "company",
    children: [
      { label: "About Brighto", href: "/about", desc: "Our story and leadership" },
      { label: "Mission & Vision", href: "/about#mission", desc: "What drives us" },
      { label: "Leadership", href: "/about#leadership", desc: "Meet the team" },
      { label: "Values", href: "/about#values", desc: "Our principles" },
    ],
  },
  {
    label: "Solutions",
    key: "solutions",
    children: [
      { label: "Employee Verification", href: "/services/employee-verification", desc: "Pre-employment screening" },
      { label: "Background Verification", href: "/services/background-verification", desc: "Criminal & court records" },
      { label: "CPV Services", href: "/services/cpv-services", desc: "Contact point verification" },
      { label: "KYC Verification", href: "/services/kyc-verification", desc: "Identity & document checks" },
      { label: "Risk Intelligence", href: "/services/risk-intelligence", desc: "Fraud risk assessment" },
      { label: "Due Diligence", href: "/services/fraud-risk-control", desc: "Comprehensive screening" },
    ],
  },
  {
    label: "Industries",
    key: "industries",
    children: [
      { label: "Banking", href: "/clients#banking", desc: "Commercial & retail banks" },
      { label: "NBFC", href: "/clients#nbfc", desc: "Non-banking finance companies" },
      { label: "Fintech", href: "/clients#fintech", desc: "Digital lending & payments" },
      { label: "Insurance", href: "/clients#insurance", desc: "Life & general insurers" },
      { label: "Enterprise", href: "/clients#enterprise", desc: "Large corporations" },
    ],
  },
  { label: "Technology", href: "/technology" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExp, setMobileExp] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn(); // run on mount
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const open = (k: string) => { if (timer.current) clearTimeout(timer.current); setActive(k); };
  const close = () => { timer.current = setTimeout(() => setActive(null), 120); };
  const keepOpen = () => { if (timer.current) clearTimeout(timer.current); };

  return (
    <>
      {/* Thin announcement strip — scrolls away naturally */}
      <div className="bg-[#0B1F66] text-white/80 text-[11px] font-medium tracking-wide py-2 text-center">
        ISO 27001 Certified &nbsp;·&nbsp; RBI Compliant &nbsp;·&nbsp; Trusted by 500+ Enterprises &nbsp;·&nbsp;
        <Link href="/contact" className="text-[#F97316] hover:text-white underline underline-offset-2 transition-colors ml-1">
          Request a Demo →
        </Link>
      </div>

      {/* ── Floating header ── */}
      <motion.header
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            top: 40,
            width: "100%",
            borderRadius: 0,
            backgroundColor: "rgba(255,255,255,0)",
            backdropFilter: "blur(0px)",
            borderColor: "rgba(226,232,240,0)",
            boxShadow: "none",
            x: "-0%",
          },
          scrolled: {
            top: 12,
            width: "88%",
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(226,232,240,1)",
            boxShadow: "0 4px 24px rgba(11,31,102,0.07)",
            x: "0%",
          },
        }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="fixed z-50 left-1/2 -translate-x-1/2 border"
        style={{ maxWidth: scrolled ? "72rem" : "100%" }}
      >
        <div className={`transition-all duration-500 ${scrolled ? "px-6 md:px-8" : "px-8 md:px-14"} max-w-7xl mx-auto`}>
          <div className="flex items-center h-[70px] gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 mr-4">
              <img
                src="/Brighto-Logo.png"
                alt="Brighto India"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.key && open(item.key)}
                  onMouseLeave={close}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-3.5 py-2 text-[13px] font-medium text-[#1E293B] hover:text-[#0B1F66] transition-colors rounded"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium text-[#1E293B] hover:text-[#0B1F66] transition-colors rounded">
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${active === item.key ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center ml-auto">
              <Link
                href="/contact"
                className="bg-[#0B1F66] hover:bg-[#071444] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:shadow-[#0B1F66]/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Verification
              </Link>
            </div>

            {/* Mobile */}
            <button className="lg:hidden ml-auto p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 right-0 top-[110%] bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-lg rounded-2xl z-40"
              onMouseEnter={keepOpen}
              onMouseLeave={close}
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {navItems.find(n => n.key === active)?.children && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4">
                    {navItems.find(n => n.key === active)!.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="group py-1"
                        onClick={() => setActive(null)}
                      >
                        <div className="text-[12.5px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-0.5">
                          {child.label}
                        </div>
                        <div className="text-[11px] text-[#94A3B8] leading-tight">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">
                <img
                  src="/Brighto-Logo.png"
                  alt="Brighto India"
                  className="h-7 w-auto object-contain"
                />
                <button onClick={() => setMobileOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="p-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-[#F1F5F9] last:border-0">
                    {item.href ? (
                      <Link href={item.href} className="block py-3 text-sm font-medium text-[#0F172A]" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#0F172A]"
                          onClick={() => setMobileExp(mobileExp === item.key ? null : item.key!)}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileExp === item.key ? "rotate-180" : ""}`} />
                        </button>
                        {mobileExp === item.key && item.children && (
                          <div className="pb-2 space-y-1 pl-3">
                            {item.children.map((c) => (
                              <Link key={c.label} href={c.href} className="block py-1.5 text-sm text-[#475569] hover:text-[#0B1F66]" onClick={() => setMobileOpen(false)}>
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block mt-4 bg-[#0B1F66] hover:bg-[#0B1F66]/90 text-white text-sm font-semibold text-center py-3 rounded-full transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Verification
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
