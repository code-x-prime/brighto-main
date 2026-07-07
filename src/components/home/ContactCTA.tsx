"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HandWrittenTitle } from "../ui/hand-writing-text";


export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#0B1F66] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[12%] bottom-0 w-px bg-white/5 hidden xl:block" />
      <div className="absolute top-0 right-[12%] bottom-0 w-px bg-white/5 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316] mb-4">
              Start the Conversation
            </div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
            <h2 className="text-[44px] md:text-[56px] font-black text-white leading-tight mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
              Ready to Elevate
              <br />
              Your Verification
              <br />
              Standards?
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed max-w-lg mb-8">
              Schedule a consultation with our enterprise team. We will assess your verification requirements and design a solution aligned with your compliance obligations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#C2590A] text-white text-[14px] font-semibold px-7 py-3.5 transition-colors group rounded-xl"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white text-[14px] font-semibold px-7 py-3.5 transition-colors rounded-xl"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>

          {/* Right — Single big HandWrittenTitle covering the entire area */}
          <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[450px] w-full overflow-visible">
            <HandWrittenTitle
              title="Let's Talk!"
              className="py-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
