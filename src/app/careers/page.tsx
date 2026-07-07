"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, Upload } from "lucide-react";


const whyJoin = [
  { title: "Career Growth", desc: "Structured career paths with clear milestones. 80% of senior roles filled internally." },
  { title: "Learning Culture", desc: "â‚¹50,000 annual learning budget. Weekly knowledge sessions with industry experts." },
  { title: "Work Flexibility", desc: "Hybrid work model with flexible hours. Quarterly all-hands and team offsites." },
  { title: "Meaningful Work", desc: "Build infrastructure that reduces fraud and enables financial inclusion at scale." },
  { title: "Leadership Access", desc: "Direct access to leadership team. Your ideas reach decision-makers quickly." },
  { title: "Competitive Package", desc: "Top-quartile compensation with performance bonuses and ESOPs for senior hires." },
];

const openRoles = [
  { title: "Senior Backend Engineer", dept: "Engineering", location: "Mumbai / Remote", type: "Full-time", desc: "Build and scale the core verification engine processing 50M+ records annually. Node.js, PostgreSQL, AWS required." },
  { title: "AI/ML Engineer", dept: "AI Research", location: "Bangalore", type: "Full-time", desc: "Train and deploy fraud detection models on India's largest verification dataset. Python, PyTorch, AWS Sagemaker." },
  { title: "Product Manager â€” Verification", dept: "Product", location: "Mumbai", type: "Full-time", desc: "Own the verification workflow product used by 500+ enterprise clients. Prior fintech/regtech experience preferred." },
  { title: "Enterprise Sales Manager", dept: "Sales", location: "Delhi / Mumbai", type: "Full-time", desc: "Drive new enterprise accounts across banking and NBFC verticals. 5+ years B2B enterprise sales required." },
  { title: "Verification Executive", dept: "Operations", location: "Multiple Cities", type: "Full-time", desc: "Process and review verification checks with accuracy and speed. Attention to detail and Hindi fluency required." },
];

import React, { useEffect } from "react";
import ContactCTA from "@/src/components/home/ContactCTA";

export default function CareersPage() {
  const [openRole, setOpenRole] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        <div className="absolute bottom-0 left-[20%] w-px h-32 bg-[#F97316]/30" />
        <div className="absolute bottom-0 left-[50%] w-px h-20 bg-white/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316] mb-4">Careers at Brighto India</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
              <h1 className="text-[52px] md:text-[72px] font-black text-white leading-none tracking-tight mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                Build Your
                <br />
                Future With
                <br />
                <span className="text-[#F97316]">Brighto</span>
              </h1>
              <p className="text-[17px] text-white/60 leading-relaxed max-w-lg">
                Join a mission-driven team building India&apos;s most trusted verification infrastructure. We are hiring across engineering, operations, sales, and product.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="eyebrow mb-4">Why Join Us</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h2 className="text-[40px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              A Place to Do Your
              <br />
              Best Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0]">
            {whyJoin.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white p-8 hover:bg-[#F8F9FB] transition-colors group"
              >
                <div className="text-[11px] font-black text-[#F97316] uppercase tracking-widest mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-[18px] font-black text-[#0F172A] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{item.title}</h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Brighto â€” photo gallery simulation */}
      <section className="py-16 bg-[#F8F9FB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="eyebrow mb-4">Life at Brighto</div>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Mumbai HQ", span: "md:col-span-2 md:row-span-2", aspect: "aspect-square" },
              { label: "Bangalore Office", span: "", aspect: "aspect-video" },
              { label: "Team Offsite 2024", span: "", aspect: "aspect-video" },
              { label: "Product Team", span: "", aspect: "aspect-video" },
              { label: "Leadership Meeting", span: "", aspect: "aspect-video" },
            ].map((photo) => (
              <div key={photo.label} className={`${photo.span} ${photo.aspect} bg-[#0B1F66] relative overflow-hidden group cursor-default rounded-xl`}>
                <div className="absolute inset-0 dot-grid-dark" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-t from-black/60 to-transparent">
                  <span className="text-[11px] font-semibold text-white uppercase tracking-widest">{photo.label}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-white">{photo.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="eyebrow mb-4">Open Positions</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h2 className="text-[36px] font-black text-[#0B1F66]" style={{ fontFamily: "Manrope, sans-serif" }}>
              {openRoles.length} Positions Open
            </h2>
          </div>
          <div className="space-y-2">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`border rounded-xl transition-all ${openRole === i ? "border-[#0B1F66]" : "border-[#E2E8F0] hover:border-[#0B1F66]"}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenRole(openRole === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] font-black text-[#F97316] uppercase tracking-widest w-4">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <div className="text-[15px] font-black text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>{role.title}</div>
                      <div className="flex items-center gap-3 mt-0.5 text-[11px] text-[#94A3B8] font-medium">
                        <span>{role.dept}</span>
                        <span className="text-[#E2E8F0]">Â·</span>
                        <span>{role.location}</span>
                        <span className="text-[#E2E8F0]">Â·</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform ${openRole === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openRole === i && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden border-t border-[#E2E8F0]"
                    >
                      <div className="px-6 py-5 flex items-start justify-between gap-8">
                        <p className="text-[14px] text-[#475569] leading-relaxed max-w-2xl">{role.desc}</p>
                        <button
                          onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                          className="shrink-0 inline-flex items-center gap-2 bg-[#0B1F66] hover:bg-[#071444] text-white text-[13px] font-semibold px-5 py-2.5 transition-colors rounded-xl"
                        >
                          Apply <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply-form" className="py-20 bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <div className="eyebrow mb-4">Apply Now</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h2 className="text-[32px] font-black text-[#0B1F66]" style={{ fontFamily: "Manrope, sans-serif" }}>Start Your Application</h2>
          </div>

          {submitted ? (
            <div className="bg-white border border-[#E2E8F0] p-12 text-center rounded-xl">
              <div className="w-12 h-12 bg-[#0B1F66] flex items-center justify-center mx-auto mb-4">
                <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <h3 className="text-[20px] font-black text-[#0F172A] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Application Received</h3>
              <p className="text-[14px] text-[#475569]">Our HR team will review and respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white border border-[#E2E8F0] p-8 space-y-4 rounded-xl">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Full Name *", key: "name", placeholder: "Your full name", type: "text" },
                  { label: "Email Address *", key: "email", placeholder: "you@company.com", type: "email" },
                  { label: "Phone Number", key: "phone", placeholder: "+91 98xxx xxxxx", type: "tel" },
                ].map((field) => (
                  <div key={field.key} className={field.key === "name" ? "" : ""}>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] text-[#0F172A] placeholder:text-[#CBD5E1] focus:outline-none focus:border-[#0B1F66] transition-colors rounded-lg"
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-2">Role</label>
                  <select
                    className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#0B1F66] transition-colors bg-white rounded-xl"
                  >
                    <option value="">Select a role</option>
                    {openRoles.map((r) => <option key={r.title}>{r.title}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-2">Cover Note</label>
                <textarea rows={3} className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] placeholder:text-[#CBD5E1] focus:outline-none focus:border-[#0B1F66] transition-colors resize-none rounded-lg" placeholder="Briefly describe your experience and motivation..." />
              </div>
              {/* Resume upload */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-2">Resume / CV</label>
                <label className="block border-2 border-dashed border-[#E2E8F0] hover:border-[#0B1F66] transition-colors p-6 text-center cursor-pointer rounded-xl">
                  <Upload className="w-5 h-5 text-[#CBD5E1] mx-auto mb-2" />
                  <div className="text-[13px] font-semibold text-[#475569]">Drop file or <span className="text-[#0B1F66]">browse</span></div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">PDF, DOC â€” max 5MB</div>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </div>
              <button type="submit" className="w-full bg-[#0B1F66] hover:bg-[#071444] text-white font-black py-3.5 text-[14px] transition-colors rounded-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

