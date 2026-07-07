"use client";

import { DicedHeroSection } from "../ui/diced-hero-section";




export default function AboutSection() {
  const slides = [
    {
      title: "Enterprise Verification Hub",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Secure Data Center",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Compliance Operations",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Risk Analysis & Audits",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <DicedHeroSection
          topText="About the Company"
          mainText="India's Foremost Verification Firm"
          subMainText="Brighto India is a leading verification intelligence and risk assessment firm. For over a decade, we have served India's most demanding financial institutions with precision, speed, and absolute reliability. From employee screening to KYC compliance, background checks to fraud risk intelligence — our services are engineered for the exacting standards of Indian banking and enterprise regulation."
          buttonText="Learn More"
          slides={slides}
          onMainButtonClick={() => window.location.href = "/about"}
          topTextStyle={{ color: "var(--diced-hero-section-top-text)" }}
          mainTextStyle={{
            fontSize: "2.8rem",
            gradient: "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
          }}
          subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
          buttonStyle={{
            backgroundColor: "var(--diced-hero-section-button-bg)",
            color: "var(--diced-hero-section-button-fg)",
            borderRadius: "2rem",
            hoverColor: "var(--diced-hero-section-button-hover-bg)",
            hoverForeground: "var(--diced-hero-section-button-hover-fg)",
          }}
          separatorColor="var(--diced-hero-section-separator)"
          mobileBreakpoint={1000}
        />
      </div>
    </section>
  );
}
