"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const offices = [
  { city: "Mumbai", type: "Headquarters", address: "Nariman Point, Mumbai 400021", phone: "+91 22-XXXX-XXXX", email: "mumbai@brightoindia.com" },
  { city: "Delhi", type: "North India Office", address: "Connaught Place, New Delhi 110001", phone: "+91 11-XXXX-XXXX", email: "delhi@brightoindia.com" },
  { city: "Noida", type: "Operations Centre", address: "Sector 62, Noida 201309", phone: "+91 120-XXX-XXXX", email: "noida@brightoindia.com" },
];

const services = [
  "Employee Verification", "Background Verification", "CPV Services",
  "KYC Verification", "Risk Intelligence", "Fraud Risk Control",
  "Document Collection", "Call Center Services", "Full Platform Demo",
];

import React, { useEffect } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0B1F66] overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" />
        <div className="absolute top-0 right-0 w-80 h-80 border border-white/5 rotate-12 translate-x-20 -translate-y-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316] mb-4">Contact Us</div>
            <div className="w-12 h-0.5 bg-[#F97316] mb-6" />
            <h1 className="text-[52px] md:text-[68px] font-black text-white leading-none tracking-tight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Get In Touch
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed">
              Speak with our enterprise team about your verification requirements. We respond to all enquiries within 24 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main contact split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact details block */}
              <div className="border border-[#E2E8F0] p-7 hover:border-[#0B1F66] transition-colors rounded-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-5">Direct Contact</div>
                <div className="space-y-4">
                  <a href="tel:+911800000000" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-[#F8F9FB] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover:bg-[#0B1F66] group-hover:border-[#0B1F66] transition-all">
                      <Phone className="w-3.5 h-3.5 text-[#475569] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-0.5">Toll Free</div>
                      <div className="text-[14px] font-semibold text-[#0F172A] group-hover:text-[#0B1F66] transition-colors">1800-000-0000</div>
                    </div>
                  </a>
                  <a href="mailto:enterprise@brightoindia.com" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-[#F8F9FB] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover:bg-[#0B1F66] group-hover:border-[#0B1F66] transition-all">
                      <Mail className="w-3.5 h-3.5 text-[#475569] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-0.5">Enterprise Sales</div>
                      <div className="text-[14px] font-semibold text-[#0F172A] group-hover:text-[#0B1F66] transition-colors">enterprise@brightoindia.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#F8F9FB] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#475569]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-0.5">Office Hours</div>
                      <div className="text-[13px] text-[#475569]">Mon–Sat: 9:00 AM – 7:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise note */}
              <div className="bg-[#0B1F66] p-7 relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 dot-grid-dark" />
                <div className="relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#F97316] mb-3">Enterprise Accounts</div>
                  <div className="w-8 h-0.5 bg-[#F97316] mb-4" />
                  <p className="text-[13px] text-white/60 leading-relaxed mb-4">
                    Enterprise clients receive a dedicated relationship manager, custom SLA agreements, and a complimentary 30-day pilot programme.
                  </p>
                  <div className="space-y-2">
                    {["30-day free pilot", "Dedicated account manager", "Custom SLA agreements", "Priority integration support"].map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 border border-[#F97316] flex items-center justify-center shrink-0">
                          <div className="w-1 h-1 bg-[#F97316]" />
                        </div>
                        <span className="text-[12px] text-white/60">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="border border-[#E2E8F0] p-16 text-center rounded-xl">
                  <div className="w-14 h-14 bg-[#0B1F66] flex items-center justify-center mx-auto mb-5">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[24px] font-black text-[#0B1F66] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Enquiry Received</h3>
                  <p className="text-[14px] text-[#475569]">Our enterprise team will respond within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="border border-[#E2E8F0] p-8 space-y-4 rounded-xl">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-4">Send an Enquiry</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { label: "Full Name *", name: "name", placeholder: "Your full name", type: "text", req: true },
                      { label: "Company *", name: "company", placeholder: "Organisation name", type: "text", req: true },
                      { label: "Email Address *", name: "email", placeholder: "you@company.com", type: "email", req: true },
                      { label: "Phone Number", name: "phone", placeholder: "+91 XXXXX XXXXX", type: "tel", req: false },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-1.5">{f.label}</label>
                        <input
                          type={f.type} name={f.name} required={f.req}
                          className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] text-[#0F172A] placeholder:text-[#CBD5E1] focus:outline-none focus:border-[#0B1F66] transition-colors rounded-lg"
                          placeholder={f.placeholder}
                          value={form[f.name as keyof typeof form]}
                          onChange={handle}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-1.5">Service Required</label>
                    <select name="service" className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#0B1F66] transition-colors bg-white rounded-xl" onChange={handle}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#475569] mb-1.5">Message *</label>
                    <textarea name="message" required rows={4} className="w-full border border-[#E2E8F0] px-4 py-2.5 text-[14px] placeholder:text-[#CBD5E1] focus:outline-none focus:border-[#0B1F66] transition-colors resize-none rounded-lg" placeholder="Describe your verification requirements..." onChange={handle} />
                  </div>
                  <button type="submit" className="w-full bg-[#F97316] hover:bg-[#C2590A] text-white font-black py-3.5 text-[14px] transition-colors flex items-center justify-center gap-2 rounded-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                    <Send className="w-4 h-4" /> Send Enquiry
                  </button>
                  <p className="text-[10px] text-[#94A3B8] text-center">By submitting you agree to our Privacy Policy. We respond within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="py-16 bg-[#F8F9FB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="eyebrow mb-4">Office Locations</div>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-6 hover:border-[#0B1F66] hover:shadow-md transition-all rounded-xl"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#F97316] mb-1">{office.type}</div>
                <h3 className="text-[20px] font-black text-[#0B1F66] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{office.city}</h3>
                <div className="space-y-2 text-[13px] text-[#475569]">
                  <div className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0 mt-0.5" />{office.address}</div>
                  <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#94A3B8]" />{office.phone}</div>
                  <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#94A3B8]" />{office.email}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="h-72 bg-[#0B1F66] relative overflow-hidden" style={{ borderRadius: "24px", margin: "0 24px 24px" }}>
        <div className="absolute inset-0 line-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 bg-[#F97316] flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="text-[12px] font-semibold uppercase tracking-widest text-white/40">Interactive Map</div>
            <div className="text-[11px] text-white/20 mt-1">Mumbai · Delhi · Noida</div>
          </div>
        </div>
      </div>
    </>
  );
}
