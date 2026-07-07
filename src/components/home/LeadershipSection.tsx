"use client";

import TeamShowcase, { TeamMember } from "../ui/team-showcase";


const BRIGHTO_LEADERS: TeamMember[] = [
  {
    id: "1",
    name: "Rakesh Sharma",
    role: "FOUNDER & MANAGING DIRECTOR",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "2",
    name: "Anjali Goel",
    role: "CHIEF RISK & COMPLIANCE OFFICER",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#" },
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    role: "CHIEF OPERATING OFFICER",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "4",
    name: "Dr. Amit Patel",
    role: "HEAD OF AI & RISK INTELLIGENCE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Siddharth Mehta",
    role: "CHIEF TECHNOLOGY OFFICER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "6",
    name: "Priya Iyer",
    role: "VP — ENTERPRISE CLIENT RELATIONS",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    social: { linkedin: "#" },
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden border-y border-[#E2E8F0]/80">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-xl mx-auto">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316] mb-4">
            Leadership
          </div>
          <div className="w-12 h-0.5 bg-[#F97316] mx-auto mb-5" />
          <h2 className="text-[40px] md:text-[48px] font-black text-[#0B1F66] leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
            Experienced Leaders.
            <br />
            Proven Track Record.
          </h2>
          <p className="text-[15px] text-[#475569] leading-relaxed mt-4">
            Meet the enterprise leadership driving innovation, accuracy, and absolute trust in verification intelligence.
          </p>
        </div>

        {/* Team Showcase */}
        <div className="w-full flex items-center justify-center">
          <TeamShowcase members={BRIGHTO_LEADERS} />
        </div>
      </div>
    </section>
  );
}
