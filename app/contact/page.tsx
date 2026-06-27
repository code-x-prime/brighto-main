'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2,
  Building2, Shield, FileText, Users, MessageSquare, Send,
} from 'lucide-react'
import { BrightoHeader } from '@/components/brighto-header'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

const SERVICES = [
  'Due Diligence Services',
  'Loan Application Verification',
  'Field Investigation (FI)',
  'Contact Point Verification (CPV)',
  'RCU Support',
  'Document Verification',
  'Fraud Risk Assessment',
  'Credit Appraisal Support',
  'Other / General Enquiry',
]

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@brighto.in',
    sub: 'We respond within 24 hours',
    href: 'mailto:hello@brighto.in',
    color: '#091C8C',
    bg: '#eef2ff',
    border: '#c7d2fe',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '783 - 848 - 4441',
    sub: 'Mon-Sat, 9 AM - 6 PM IST',
    href: 'tel:7838484441',
    color: '#059669',
    bg: '#f0fdf4',
    border: '#a7f3d0',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'C-83, 1st Floor, Sector-2, Noida, India',
    sub: 'Pan-India operations',
    href: '#',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Sat',
    sub: '9:00 AM - 6:00 PM IST',
    href: '#',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
  },
]

const WHY_CONTACT = [
  { icon: Shield, text: 'ISO 27001 | ISO 9001 | SOC 2 Audited' },
  { icon: CheckCircle2, text: 'Trusted by banks, NBFCs, fintechs & enterprises' },
  { icon: Building2, text: 'Pan-India verification & investigation network' },
  { icon: Clock, text: 'Quick turnaround, structured reporting' },
  { icon: Users, text: 'Dedicated account management' },
  { icon: FileText, text: 'Customised solutions for every requirement' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <BrightoHeader />

      {/* ── HERO ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden bg-white">
        {/* bg grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#BFDBFE" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" opacity="0.5" />
        </svg>
        {/* blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: '#93c5fd' }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: '#818cf8' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-900 font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse" />
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.08] mb-5" style={{ fontFamily: 'var(--font-manrope)' }}>
              Let&apos;s Discuss Your{' '}
              <span className="text-blue-900">Verification &amp; Risk</span>{' '}
              Requirements
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Whether you need Due Diligence, CPV, Field Investigation, RCU Support, Document Verification, or any other structured verification service — our team is ready to help you find the right approach.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon
              const isLink = info.href !== '#'
              const inner = (
                <div className="rounded-2xl border p-5 sm:p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all" style={{ background: info.bg, borderColor: info.border }}>
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: info.color + '18' }}>
                    <Icon className="w-5 h-5" style={{ color: info.color }} />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</p>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{info.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{info.sub}</p>
                </div>
              )
              return isLink
                ? <a key={info.label} href={info.href} className="block">{inner}</a>
                : <div key={info.label}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ── MAIN: FORM + SIDEBAR ── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

            {/* ── FORM ── */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div className="mb-8">
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">Contact Form</p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mt-2">Fill in the details below and our team will get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">Thank you for reaching out. Our team will contact you within 24 hours to discuss your requirements.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' }) }}
                    className="mt-2 px-5 py-2.5 border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Service You Need <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your verification or assessment requirements, volumes, geography, timelines..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-900 hover:bg-blue-950 disabled:opacity-60 text-white rounded-xl font-bold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our privacy policy. We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">

              {/* Why Brighto India */}
              <div className="bg-slate-900 rounded-3xl p-7 text-white">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Why Brighto India</p>
                <h3 className="text-xl font-black mb-5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Trusted Verification &amp; Risk Partner Since 2015
                </h3>
                <ul className="space-y-3">
                  {WHY_CONTACT.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.text} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-blue-900/60 border border-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-blue-300" />
                        </span>
                        <span className="text-sm text-slate-300 leading-relaxed">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Services quick-links */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7">
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">Our Services</p>
                <h3 className="text-lg font-black text-slate-900 mb-4 leading-tight">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Due Diligence Services', href: '/services/due-diligence' },
                    { label: 'Contact Point Verification', href: '/services/contact-point-verification' },
                    { label: 'RCU Support', href: '/services/rcu-support' },
                    { label: 'Document Verification', href: '/services/document-verification' },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group"
                    >
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-900 transition-colors">{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cert badges */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-7">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Certifications</p>
                <div className="space-y-2.5">
                  {['ISO 27001 Certified', 'ISO 9001 Certified', 'SOC 2 Audited'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm text-emerald-900 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP / OFFICES STRIP ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">Our Presence</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
              Pan-India Operations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { city: 'Mumbai', type: 'Head Office', desc: 'Primary operations & client servicing hub for Western India.', color: '#091C8C', bg: '#eef2ff', border: '#c7d2fe' },
              { city: 'Delhi NCR', type: 'Regional Office', desc: 'Verification & field investigation support for Northern India.', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
              { city: 'Pan-India Network', type: 'Field Coverage', desc: 'Active verification and investigation network across major cities and tier-2 locations.', color: '#059669', bg: '#f0fdf4', border: '#a7f3d0' },
            ].map((office) => (
              <div key={office.city} className="rounded-2xl border p-6" style={{ background: office.bg, borderColor: office.border }}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: office.color }} />
                  <div>
                    <p className="font-black text-slate-900 text-base">{office.city}</p>
                    <p className="text-xs font-bold uppercase tracking-widest mt-0.5 mb-2" style={{ color: office.color }}>{office.type}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{office.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSE PROMISE ── */}
      <section className="py-16 bg-blue-900 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-g" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-g)" />
        </svg>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: MessageSquare, val: '24 hrs', label: 'Response Time', sub: 'We respond to all queries within 24 hours' },
              { icon: Users, val: 'Dedicated', label: 'Account Manager', sub: 'Your single point of contact for all requirements' },
              { icon: Shield, val: '100%', label: 'Confidential', sub: 'All information handled with strict data security' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">{item.val}</p>
                    <p className="text-sm font-bold text-blue-200 mt-0.5">{item.label}</p>
                    <p className="text-xs text-blue-300 mt-1 max-w-[180px] mx-auto leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <BrightoCTAFooter />
    </>
  )
}

