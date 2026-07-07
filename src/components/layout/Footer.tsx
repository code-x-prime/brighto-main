"use client";
import React from "react";
import Link from "next/link";

/* ── Social icons ──────────────────────────────────────────────────────────── */
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

/* ── Nav data ────────────────────────────────────────────────────────────── */
type NavLink = { label: string; href: string; soon?: boolean; static?: boolean };
const navColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Background Checks",    href: "/services/background-verification" },
      { label: "KYC Verification",     href: "/services/kyc-verification" },
      { label: "CPV Services",         href: "/services/cpv-services" },
      { label: "Employee Screening",   href: "/services/employee-verification" },
      { label: "Risk Analytics",       href: "/services/risk-intelligence" },
      { label: "FRCU Shield",          href: "#", soon: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",    href: "/about" },
      { label: "Leadership",  href: "/about#leadership" },
      { label: "Careers",     href: "/careers" },
      { label: "Clients",     href: "/clients" },
      { label: "Technology",  href: "/technology" },
      { label: "Ecosystem",   href: "#", soon: true },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { label: "ISO 27001 Certified", href: "#", static: true },
      { label: "SOC 2 Type II",       href: "#", static: true },
      { label: "RBI Guidelines",      href: "#", static: true },
      { label: "DPDP Act 2023",       href: "#", static: true },
      { label: "GDPR Shield",         href: "#", soon: true },
    ],
  },
];

/* ── Footer ─────────────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 pb-8 pt-4 max-w-5xl mx-auto w-full">

      {/* ── Main card ── */}
      <div className="bg-white rounded-2xl border border-[#F2F2F2] shadow-sm px-5 sm:px-8 py-8">

        {/* Top section: logo + columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Logo + tagline */}
          <div className="flex-shrink-0 max-w-xs">
            <Link href="/" className="inline-flex mb-3">
              <img
                src="/Brighto-Logo.png"
                alt="Brighto India"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-[#222222]/50 font-medium leading-relaxed">
              India&apos;s premier verification intelligence and risk assessment platform.
              Trusted by 500+ financial institutions.
            </p>
          </div>

          {/* Nav columns — 2-col on mobile, 3-col on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 flex-1">
            {navColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className="text-[10.5px] uppercase font-bold tracking-widest text-[#222222]/40">
                  {col.heading}
                </h4>
                <div className="flex flex-col gap-2">
                  {col.links.map((link) =>
                    link.static ? (
                      <span
                        key={link.label}
                        className="text-[13px] text-[#222222]/50 font-medium"
                      >
                        {link.label}
                      </span>
                    ) : link.soon ? (
                      <span
                        key={link.label}
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#222222]/40 font-medium"
                      >
                        {link.label}
                        <span className="text-[10px] bg-[#F2F2F2] text-[#0A0A0A] px-2 py-0.5 rounded-full">
                          soon
                        </span>
                      </span>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[13px] text-[#222222]/50 hover:text-[#0B1F66] font-medium transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2F2F2] mt-8 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

          {/* Copyright + policy links */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-1 xs:gap-4 text-[12px] text-[#222222]/50">
            <span>© {year} Brighto Credit Information Pvt. Ltd.</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#0B1F66] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#0B1F66] transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="nofollow noopener"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#F2F2F2] hover:bg-[#0B1F66] flex items-center justify-center transition-colors duration-200 group"
            >
              <Linkedin className="w-3.5 h-3.5 fill-[#222222] group-hover:fill-white transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="nofollow noopener"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-full bg-[#F2F2F2] hover:bg-[#0B1F66] flex items-center justify-center transition-colors duration-200 group"
            >
              <Twitter className="w-3.5 h-3.5 fill-[#222222] group-hover:fill-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
