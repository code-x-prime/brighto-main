"use client";

import ContactCTA from "@/src/components/home/ContactCTA";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


type TabKey = "Banking" | "NBFC" | "Fintech" | "Insurance";

const clientsByCategory: Record<TabKey, string[]> = {
  Banking: ["HDFC Bank", "ICICI Bank", "Kotak Mahindra Bank", "Canara Bank", "Axis Bank", "Yes Bank", "Federal Bank", "IndusInd Bank", "South Indian Bank", "Karnataka Bank", "City Union Bank", "DCB Bank"],
  NBFC: ["Muthoot Finance", "Manappuram Finance", "Shriram Finance", "TVS Credit", "Bajaj Finserv", "IIFL Finance", "Home Credit India", "Hero FinCorp", "Mahindra Finance", "Tata Capital", "Aditya Birla Finance", "L&T Finance"],
  Fintech: ["Lendingkart", "KreditBee", "Slice", "Cashe", "Faircent", "RupeeLend", "MoneyTap", "PaySense", "StashFin", "EarlySalary", "Navi", "Fibe"],
  Insurance: ["HDFC Life", "SBI Life", "Max Life", "IndiaFirst Life", "Bajaj Allianz", "ICICI Prudential", "Tata AIG", "New India Assurance", "Oriental Insurance", "National Insurance", "Star Health", "Niva Bupa"],
};

const metrics = [
  { value: "500+", label: "Enterprise Clients", desc: "Across banking, NBFC, fintech & insurance" },
  { value: "50M+", label: "Verifications Completed", desc: "Cumulative across all client engagements" },
  { value: "99.9%", label: "Accuracy Rate", desc: "AI-augmented verification precision" },
  { value: "24 hrs", label: "Standard TAT", desc: "Average turnaround on most checks" },
];

const caseStudies = [
  {
    sector: "Private Sector Bank", industry: "Banking", metric: "70%",
    metricLabel: "Reduction in verification TAT",
    impact: "Eliminated 3-month onboarding backlog across 12 regional offices. Moved to AI-augmented screening with zero compliance gaps.",
    numbers: [{ v: "8,400", l: "Employees screened" }, { v: "₹2.4Cr", l: "Annual savings" }, { v: "Zero", l: "Post-hire fraud" }],
  },
  {
    sector: "Leading NBFC", industry: "NBFC", metric: "40%",
    metricLabel: "Improvement in CPV accuracy",
    impact: "Replaced unreliable manual CPV with geo-tagged field network. Borrower verification reduced from 3 days to 6 hours.",
    numbers: [{ v: "22,000+", l: "Monthly checks" }, { v: "3×", l: "Faster CPV" }, { v: "95%", l: "Client satisfaction" }],
  },
  {
    sector: "Digital Lending Fintech", industry: "Fintech", metric: "8%",
    metricLabel: "KYC drop-off rate (down from 45%)",
    impact: "API-first KYC integration reduced onboarding friction dramatically. Full RBI compliance maintained throughout.",
    numbers: [{ v: "5 min", l: "Avg KYC time" }, { v: "100%", l: "RBI compliant" }, { v: "4.8/5", l: "CSAT score" }],
  },
];

const tabs: TabKey[] = ["Banking", "NBFC", "Fintech", "Insurance"];

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("Banking");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("banking")) setActiveTab("Banking");
      else if (hash.includes("nbfc")) setActiveTab("NBFC");
      else if (hash.includes("fintech")) setActiveTab("Fintech");
      else if (hash.includes("insurance")) setActiveTab("Insurance");
      else if (hash.includes("enterprise")) setActiveTab("Banking"); // fallback or map appropriately
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        <div className="absolute top-0 right-0 w-96 h-96 border border-white/5 rotate-12 translate-x-24 -translate-y-24" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316] mb-4">Our Clients</div>
              <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
              <h1 className="text-[52px] md:text-[68px] font-black text-white leading-none tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Trusted By
                <br />
                India&apos;s Leading
                <br />
                <span className="text-[#F97316]">Institutions</span>
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <p className="text-[17px] text-white/60 leading-relaxed max-w-md mb-6">
                500+ financial institutions across banking, NBFC, fintech, and insurance trust Brighto India for their most critical verification requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="border border-white/10 p-4 rounded-xl">
                    <div className="text-2xl font-black text-white mb-0.5" style={{ fontFamily: "Manrope, sans-serif" }}>{m.value}</div>
                    <div className="text-[11px] text-white/40 uppercase tracking-wide font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client logo wall with tabs */}
      <section className="py-20 bg-white relative" id="directory">
        <div id="banking" className="absolute top-0" />
        <div id="nbfc" className="absolute top-0" />
        <div id="fintech" className="absolute top-0" />
        <div id="insurance" className="absolute top-0" />
        <div id="enterprise" className="absolute top-0" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="eyebrow mb-4">Client Directory</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
            {/* Tabs */}
            <div className="flex gap-0 border border-[#E2E8F0] w-fit rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-[13px] font-semibold transition-colors ${activeTab === tab
                      ? "bg-[#0B1F66] text-white"
                      : "bg-white text-[#475569] hover:bg-[#F8F9FB]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Logo grid — B&W hover color */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#E2E8F0]"
          >
            {clientsByCategory[activeTab].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white h-16 flex items-center justify-center px-4 hover:bg-[#F8F9FB] group transition-colors cursor-default"
              >
                <span className="text-[12px] font-black text-[#CBD5E1] group-hover:text-[#0B1F66] transition-colors text-center leading-tight uppercase tracking-wide"
                  style={{ fontFamily: "Manrope, sans-serif" }}>
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success metrics */}
      <section className="py-16 bg-[#F8F9FB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2E8F0]">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 hover:bg-[#F8F9FB] transition-colors"
              >
                <div className="text-[44px] font-black text-[#0B1F66] stat-number mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{m.value}</div>
                <div className="text-[14px] font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{m.label}</div>
                <div className="text-[12px] text-[#94A3B8]">{m.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="eyebrow mb-4">Case Studies</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-5" />
            <h2 className="text-[40px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Measurable Outcomes
            </h2>
          </div>
          <div className="space-y-5">
            {caseStudies.map((c, i) => (
              <motion.div
                key={c.sector}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-[#E2E8F0] hover:border-[#0B1F66] transition-colors group rounded-xl"
              >
                <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
                  <div className="p-8 bg-[#F8F9FB] group-hover:bg-[#0B1F66] transition-colors">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] group-hover:text-white/40 mb-2 transition-colors">{c.industry}</div>
                    <div className="text-[52px] font-black text-[#0B1F66] group-hover:text-[#F97316] leading-none mb-1 transition-colors stat-number" style={{ fontFamily: "Manrope, sans-serif" }}>{c.metric}</div>
                    <div className="text-[12px] font-semibold text-[#475569] group-hover:text-white/60 transition-colors">{c.metricLabel}</div>
                  </div>
                  <div className="p-8 md:col-span-2">
                    <div className="text-[12px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">{c.sector}</div>
                    <p className="text-[15px] text-[#0F172A] leading-relaxed font-medium">{c.impact}</p>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      {c.numbers.map((n) => (
                        <div key={n.l}>
                          <div className="text-[22px] font-black text-[#0B1F66] leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>{n.v}</div>
                          <div className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{n.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
