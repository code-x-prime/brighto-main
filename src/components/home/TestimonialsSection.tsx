"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { testimonials } from "@/src/lib/utils";



export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <SectionHeader
            badge="Client Stories"
            title="Trusted by Leaders in "
            highlight="Indian Finance"
            subtitle="See how India's top financial institutions use Brighto to reduce fraud and accelerate growth."
          />
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl border border-[#E2E8F0] p-8 md:p-10 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-linear-to-br from-[#EFF6FF] to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#FFF7ED] to-transparent rounded-tl-full" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <Quote className="w-8 h-8 text-[#0B1F66]/20 mb-5" />
                <blockquote className="text-lg md:text-xl text-[#0F172A] leading-relaxed font-medium mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-linear-to-br from-[#0B1F66] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">{testimonials[active].author}</div>
                    <div className="text-xs text-[#64748B]">
                      {testimonials[active].title} · {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-[#0B1F66] w-6" : "bg-[#E2E8F0] w-1.5 hover:bg-[#CBD5E1]"
                    }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0B1F66] hover:bg-[#F8FAFC] transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-[#64748B]" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0B1F66] hover:bg-[#F8FAFC] transition-all"
              >
                <ChevronRight className="w-4 h-4 text-[#64748B]" />
              </button>
            </div>
          </div>
        </div>

        {/* All testimonials mini */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.author}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${i === active
                  ? "border-[#0B1F66] bg-[#F8FAFC] shadow-md"
                  : "border-[#E2E8F0] bg-white hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
                }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 bg-linear-to-br from-[#0B1F66] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0F172A]">{t.author}</div>
                  <div className="text-[9px] text-[#64748B]">{t.company}</div>
                </div>
              </div>
              <p className="text-[10px] text-[#64748B] leading-relaxed line-clamp-2">{t.quote}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

