"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeamShowcase from "@/src/components/ui/team-showcase";
import ContactCTA from "@/src/components/home/ContactCTA";


const values = [
  { title: "Integrity", desc: "We operate with complete transparency in every verification we conduct â€” no shortcuts, no compromises.", num: "01" },
  { title: "Accuracy", desc: "99.9% accuracy is not a statistic â€” it is a contractual commitment to every client we serve.", num: "02" },
  { title: "Trust", desc: "Every relationship we build is founded on mutual trust â€” with clients, candidates, and regulators.", num: "03" },
  { title: "Security", desc: "Banking-grade data security infrastructure protecting every record we process.", num: "04" },
  { title: "Compliance", desc: "Built around RBI, SEBI, IRDAI, and DPDP Act 2023 from day one â€” not retrofitted.", num: "05" },
  { title: "Innovation", desc: "AI-augmented verification that continuously improves accuracy and reduces turnaround times.", num: "06" },
];


const milestones = [
  { year: "2012", event: "Founded in Mumbai with focus on employee background verification for banking sector." },
  { year: "2015", event: "Expanded to pan-India operations. First 100 enterprise clients including major NBFCs." },
  { year: "2018", event: "Launched proprietary AI verification engine. TAT reduced by 60%." },
  { year: "2020", event: "ISO 27001 certification achieved. Operations across all 28 Indian states." },
  { year: "2022", event: "Crossed 25 million verifications milestone. KYC and digital onboarding services launched." },
  { year: "2024", event: "50 million verifications. 500+ enterprise clients. Ranked among India's top verification firms." },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero â€” full width editorial */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        {/* Abstract geometry */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] border border-white/5 rotate-12 translate-x-32 -translate-y-20" />
        <div className="absolute top-20 right-40 w-64 h-64 border border-white/5 rotate-45" />
        <div className="absolute bottom-0 left-[30%] w-px h-40 bg-[#F97316]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316] mb-4">About Brighto India</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
              <h1 className="text-[52px] md:text-[68px] font-black text-white leading-[1.0] tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Building Trust
                <br />
                Through
                <br />
                Verification
                <br />
                <span className="text-[#F97316]">Intelligence</span>
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-[17px] text-white/60 leading-relaxed mb-6 max-w-md">
                Since 2012, Brighto India has been the verification partner of choice for India&apos;s most demanding financial institutions â€” delivering accuracy, speed, and compliance at enterprise scale.
              </p>
              <div className="flex gap-8">
                {[{ v: "12+", l: "Years" }, { v: "500+", l: "Clients" }, { v: "50M+", l: "Verifications" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black text-white mb-0.5" style={{ fontFamily: "Manrope, sans-serif" }}>{s.v}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/40 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company story â€” 2-col with timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image left */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[3/4] bg-[#F8F9FB] border border-[#E2E8F0] overflow-hidden">
                {/* Professional office imagery */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0B1F66]/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-24 h-24 border-2 border-[#E2E8F0] flex items-center justify-center mx-auto mb-6">
                      <div className="w-10 h-10 bg-[#0B1F66]" />
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-[#94A3B8]">
                      Brighto India Headquarters
                    </div>
                    <div className="text-[13px] text-[#CBD5E1] mt-1">Mumbai, Maharashtra</div>
                  </div>
                </div>
                {/* Bottom strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B1F66] px-6 py-5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">Established</div>
                  <div className="text-white font-black text-lg" style={{ fontFamily: "Manrope, sans-serif" }}>2012 â€” Mumbai</div>
                </div>
              </div>
            </motion.div>

            {/* Content + timeline right */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="eyebrow mb-4">Our Story</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
              <h2 className="text-[38px] font-black text-[#0B1F66] leading-tight mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                A Decade of
                <br />
                Building India&apos;s
                <br />
                Verification Standard
              </h2>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-4">
                Brighto India was founded with a singular conviction â€” that India&apos;s financial institutions deserved a verification partner with the rigour of a global firm and the speed of a technology company.
              </p>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-8">
                Over twelve years, we have built pan-India operations, proprietary AI infrastructure, and a compliance framework that meets the exacting standards of RBI, SEBI, and IRDAI simultaneously.
              </p>

              {/* Timeline */}
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-white border-2 border-[#E2E8F0] group-hover:border-[#0B1F66] flex items-center justify-center shrink-0 transition-colors z-10">
                        <div className="w-2 h-2 bg-[#0B1F66]" />
                      </div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] my-1" />}
                    </div>
                    <div className="pb-5">
                      <div className="text-[11px] font-black text-[#F97316] uppercase tracking-widest mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{m.year}</div>
                      <p className="text-[13px] text-[#475569] leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-[#F8F9FB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="eyebrow mb-4">Mission &amp; Vision</div>
          <div className="w-12 h-0.5 bg-[#F97316] mb-10" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Our Mission",
                heading: "Verification Intelligence at Enterprise Scale",
                body: "To provide India&apos;s financial institutions with the most accurate, secure, and regulatory-compliant verification services â€” enabling confident decisions at every stage of the credit and employment lifecycle.",
                accent: "#0B1F66",
              },
              {
                label: "Our Vision",
                heading: "The Standard of Trust in Indian Finance",
                body: "To become the definitive verification infrastructure underpinning India&apos;s financial ecosystem â€” a world where every identity is verifiable, every risk is assessable, and every institution can operate with absolute confidence.",
                accent: "#F97316",
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E2E8F0] p-10 hover:border-[#0B1F66] transition-colors rounded-xl"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">{card.label}</div>
                <div className="w-10 h-0.5 mb-5" style={{ background: card.accent }} />
                <h3 className="text-[24px] font-black text-[#0B1F66] mb-4 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {card.heading}
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-10 mb-14">
            <div className="lg:col-span-1">
              <div className="eyebrow mb-4">Core Values</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
              <h2 className="text-[36px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                The
                <br />
                Principles
                <br />
                We Work By
              </h2>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white border border-[#E2E8F0] p-6 hover:border-[#0B1F66] hover:shadow-md transition-all group rounded-xl"
                >
                  <div className="text-[10px] font-black text-[#F97316] uppercase tracking-widest mb-3">{v.num}</div>
                  <h3 className="text-[17px] font-black text-[#0F172A] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{v.title}</h3>
                  <p className="text-[13px] text-[#475569] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-xl mx-auto">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316] mb-4">
              Leadership Team
            </div>
            <div className="w-12 h-0.5 bg-[#F97316] mx-auto mb-5" />
            <h2 className="text-[40px] md:text-[48px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Experienced Leaders.
              <br />
              Deep Domain Expertise.
            </h2>
          </div>

          <div className="w-full flex items-center justify-center">
            <TeamShowcase
              members={[
                {
                  id: "1",
                  name: "Faiz Alam",
                  role: "Founder & Director",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
                  social: { linkedin: "#" }
                },
                {
                  id: "2",
                  name: "Risk & Compliance Head",
                  role: "Chief Risk Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
                  social: { linkedin: "#" }
                },
                {
                  id: "3",
                  name: "Operations Director",
                  role: "Chief Operating Officer",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
                  social: { linkedin: "#" }
                },
                {
                  id: "4",
                  name: "Technology Lead",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
                  social: { linkedin: "#" }
                }
              ]}
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

