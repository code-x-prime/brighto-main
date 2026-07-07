import AboutSection from "../components/home/AboutSection";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import ContactCTA from "../components/home/ContactCTA";
import HeroSection from "../components/home/HeroSection";
import IndustriesSection from "../components/home/IndustriesSection";
import LeadershipSection from "../components/home/LeadershipSection";
import ServicesSection from "../components/home/ServicesSection";
import TrustBar from "../components/home/TrustBar";
import WhyBrighto from "../components/home/WhyBrighto";
import { CinematicHero } from "../components/ui/cinematic-hero";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CinematicHero />
      <AboutSection />
      <TrustBar />
      <ServicesSection />
      <WhyBrighto />
      <IndustriesSection />
      <LeadershipSection />
      <CaseStudiesSection />
      <ContactCTA />
    </>
  );
}
