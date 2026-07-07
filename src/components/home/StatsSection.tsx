"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TrendingUp, Building2, Target, Clock } from "lucide-react";

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      const unsubscribe = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsubscribe(); };
    }
  }, [isInView, value, count, rounded]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingUp,
    value: 50,
    suffix: "M+",
    label: "Verifications",
    description: "Processed annually across India",
    color: "text-[#0B1F66]",
    bg: "bg-[#EFF6FF]",
    border: "border-[#BFDBFE]",
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Banks, NBFCs, fintechs & enterprises",
    color: "text-[#F97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Target,
    value: 99.9,
    suffix: "%",
    label: "Accuracy Rate",
    description: "Industry-leading verification precision",
    color: "text-[#22C55E]",
    bg: "bg-green-50",
    border: "border-green-100",
    decimals: 1,
  },
  {
    icon: Clock,
    value: 24,
    suffix: "hrs",
    label: "Average TAT",
    description: "Turnaround time for most checks",
    color: "text-[#38BDF8]",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border ${stat.border} p-6 overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div
                className={`text-4xl font-bold ${stat.color} mb-1`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-base font-semibold text-[#0F172A] mb-1">{stat.label}</div>
              <div className="text-xs text-[#64748B]">{stat.description}</div>

              {/* Decorative */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${stat.bg} rounded-full opacity-50`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
