"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-[#0B1F66] via-[#0F2A7A] to-[#1E3A8A] rounded-3xl p-10 md:p-14 text-center overflow-hidden"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-pattern-dark" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Available for Enterprise Onboarding
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Ready to Verify{" "}
              <span className="text-[#38BDF8]">with Confidence?</span>
            </h2>

            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join 500+ enterprises across India using Brighto&apos;s AI-powered verification platform to reduce fraud and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-900/30 hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4" />
                Schedule Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                Talk to Expert
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <span>✓ Free 30-day pilot</span>
              <span>✓ No setup fees</span>
              <span>✓ Dedicated onboarding</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

