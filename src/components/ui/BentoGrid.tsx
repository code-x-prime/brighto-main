"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  gradient?: boolean;
  dark?: boolean;
  delay?: number;
}

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  gradient = false,
  dark = false,
  delay = 0,
}: BentoCardProps) {
  const colClass = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-3",
  }[colSpan];

  const rowClass = {
    1: "row-span-1",
    2: "row-span-1 md:row-span-2",
  }[rowSpan];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`
        ${colClass} ${rowClass}
        relative overflow-hidden rounded-2xl border p-6
        transition-shadow duration-300 hover:shadow-lg
        ${dark
          ? "bg-[#020617] border-[#38BDF8]/20 hover:border-[#38BDF8]/40"
          : gradient
          ? "bg-linear-to-br from-[#0B1F66] to-[#1E3A8A] border-transparent text-white"
          : "bg-white border-[#E2E8F0] hover:border-[#BFDBFE]"
        }
        ${className}
      `}
    >
      {gradient && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2338BDF8%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      )}
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}

export function BentoGrid({ children, cols = 3, className = "" }: BentoGridProps) {
  const colClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <div className={`grid ${colClass} gap-4 auto-rows-auto ${className}`}>
      {children}
    </div>
  );
}

