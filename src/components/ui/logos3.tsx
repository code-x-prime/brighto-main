// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

interface Logo {
  id: string;
  description?: string;
  image?: string; // Optional: if image is not provided, we render a stylized corporate badge
  name?: string;  // Optional: for stylized text logotype
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
  className = "",
}: Logos3Props) => {
  return (
    <section className={`py-16 bg-transparent overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8] mb-3">
          Our Network
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#0B1F66] tracking-tight mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
          {heading}
        </h2>
      </div>
      <div className="relative w-full py-4">
        <div className="relative mx-auto flex items-center justify-center max-w-[95vw] lg:max-w-7xl">
          <Carousel
            opts={{ loop: true, dragFree: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: false })]}
            className="w-full"
          >
            <CarouselContent className="ml-0 flex items-center">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 justify-center pl-0"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-105">
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.description || logo.name || "Client Logo"}
                        className={logo.className || "h-7 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"}
                      />
                    ) : (
                      <div className="px-5 py-2.5 bg-white border border-[#E2E8F0] shadow-xs rounded-full flex items-center justify-center min-w-[140px] select-none">
                        <span 
                          className="text-[13px] font-bold text-[#64748B] hover:text-[#0B1F66] transition-colors tracking-wide text-center leading-none uppercase"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {logo.name || logo.description}
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Edge gradients for smooth fading */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
