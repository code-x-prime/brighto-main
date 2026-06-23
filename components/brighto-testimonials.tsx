'use client'

import { useState } from 'react'

interface Testimonial {
  name: string
  role: string
  company: string
  logoText: string
  content: string
}

const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    name: 'Amit Sharma',
    role: 'Head of Operations',
    company: 'Fintech India',
    logoText: 'FI',
    content: 'We automated our vendor onboarding using Brighto Verify. The turnaround time dropped from 7 days to under 24 hours. Phenomenal accuracy!',
  },
  {
    name: 'Priya Patel',
    role: 'Compliance Director',
    company: 'Capital Lenders',
    logoText: 'CL',
    content: 'Brighto Risk helped us flag high-risk portfolios instantly. Their fraud detection checks are extremely detailed and reliable.',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'VP of Engineering',
    company: 'PayQuick',
    logoText: 'PQ',
    content: 'The verification APIs are lightning-fast with 99.9% uptime. Integrating their KYC pipeline took us less than a day.',
  },
  {
    name: 'Ananya Sen',
    role: 'HR Lead',
    company: 'NextGen Tech',
    logoText: 'NT',
    content: 'Their background verification dashboard is incredibly intuitive. Our HR team adopted it instantly with zero learning curve.',
  },
]

const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    name: 'Vikram Malhotra',
    role: 'Chief Risk Officer',
    company: 'Apex Bank',
    logoText: 'AB',
    content: 'For physical address and due diligence checks, Brighto is our most trusted partner. The reports are comprehensive and legally solid.',
  },
  {
    name: 'Meera Nair',
    role: 'Founder',
    company: 'Stellar Microfinance',
    logoText: 'SM',
    content: 'Verified over 50k customers in remote locations. Their field agents and digital tools work in perfect harmony.',
  },
  {
    name: 'Siddharth Roy',
    role: 'Product Manager',
    company: 'SecureCred',
    logoText: 'SC',
    content: 'Beautiful interface, powerful analytics, and automated compliance. Brighto has completely changed how we handle risk.',
  },
  {
    name: 'Kavita Joshi',
    role: 'Director of Security',
    company: 'Logistics Pro',
    logoText: 'LP',
    content: 'Employee verification is critical in logistics. Brighto has helped us maintain a safe and highly trusted workforce.',
  },
]

export function BrightoTestimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
          70,000+ Verifications & Counting
        </p>
        <h2 
          className="text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight" 
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          We've got the receipts.
        </h2>
      </div>

      {/* Testimonials Group with Hover-Blur effect */}
      <div className="space-y-6 max-w-[100vw] relative group/container">
        
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-6 animate-marquee whitespace-nowrap py-4 group/row">
            {/* Double the array for seamless marquee */}
            {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap py-4 group/row">
            {/* Double the array for seamless marquee */}
            {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>

      </div>

      {/* Custom Styles for Smooth Scrolling & Blur Effect */}
      <style>{`
        /* Mask effect on sides of marquee */
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }

        /* Marquee Animation Row 1 */
        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }

        /* Marquee Animation Row 2 */
        .animate-marquee-reverse {
          display: inline-flex;
          width: max-content;
          animation: scroll-right 35s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause marquee on container hover */
        .group\\/container:hover .animate-marquee,
        .group\\/container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }

        /* Blur/opacity effect on hover: 
           When hovering the container, make all cards blur slightly.
           But when hovering a specific card, make that card clear and scale it up. */
        .group\\/container:hover .testimonial-card {
          filter: blur(2px);
          opacity: 0.4;
          transform: scale(0.98);
        }

        .group\\/container .testimonial-card:hover {
          filter: blur(0px) !important;
          opacity: 1 !important;
          transform: scale(1.03) translateY(-4px) !important;
          border-color: #93C5FD !important; /* light blue border on hover */
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
        }
      `}</style>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card flex-shrink-0 w-[380px] bg-white border border-slate-200 rounded-2xl p-6 whitespace-normal transition-all duration-500 ease-out cursor-pointer shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        {/* User Brand Initials */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-900 text-xs">
          {testimonial.logoText}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-none">
            {testimonial.name}
          </h4>
          <span className="text-[11px] text-slate-500 leading-none mt-1 inline-block">
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  )
}
