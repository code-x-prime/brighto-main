"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  dark = false,
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
          dark
            ? "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
            : "bg-[#EFF6FF] text-[#0B1F66] border border-[#BFDBFE]"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-[#38BDF8]" : "bg-[#0B1F66]"}`} />
          {badge}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${dark ? "text-white" : "text-[#0F172A]"}`}
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-[#64748B]" : "text-[#64748B]"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
