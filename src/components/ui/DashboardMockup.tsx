"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, AlertTriangle, TrendingUp, FileCheck } from "lucide-react";

const verifications = [
  { name: "Rahul M. â€” HDFC Bank", status: "completed", time: "2m ago", score: 94 },
  { name: "Priya S. â€” Axis Bank", status: "processing", time: "5m ago", score: 78 },
  { name: "Amit K. â€” Fintech Co.", status: "completed", time: "8m ago", score: 89 },
  { name: "Sneha R. â€” Kotak", status: "flagged", time: "12m ago", score: 42 },
  { name: "Vikram T. â€” NBFC Ltd.", status: "completed", time: "15m ago", score: 97 },
];

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
      >
        {/* Header bar */}
        <div className="bg-[#0B1F66] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white/10 rounded-md text-[10px] text-white/70 px-3 py-1 text-center">
            app.brightoindia.com/dashboard
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Quick stats */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Today", value: "247", icon: FileCheck, color: "text-[#0B1F66]", bg: "bg-[#EFF6FF]" },
              { label: "Passed", value: "231", icon: CheckCircle, color: "text-[#22C55E]", bg: "bg-green-50" },
              { label: "Pending", value: "12", icon: Clock, color: "text-[#F97316]", bg: "bg-orange-50" },
              { label: "Flagged", value: "4", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.bg} rounded-xl p-2 text-center`}>
                <stat.icon className={`w-3.5 h-3.5 ${stat.color} mx-auto mb-1`} />
                <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-[9px] text-[#64748B] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Risk score gauge */}
          <div className="bg-[#F8FAFC] rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#0F172A]">Risk Intelligence Score</span>
              <span className="text-xs text-[#22C55E] font-bold bg-green-50 px-2 py-0.5 rounded-full">LOW RISK</span>
            </div>
            <div className="relative h-3 bg-[#E2E8F0] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full rounded-full bg-linear-to-r from-[#22C55E] via-[#38BDF8] to-[#0B1F66]"
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[9px] text-[#64748B]">0 (High Risk)</span>
              <span className="text-[9px] font-bold text-[#0B1F66]">78 / 100</span>
              <span className="text-[9px] text-[#64748B]">100 (Safe)</span>
            </div>
          </div>

          {/* KYC Donut */}
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                <motion.circle
                  cx="18" cy="18" r="15.9" fill="none" stroke="#0B1F66" strokeWidth="3"
                  strokeDasharray="100 100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 22 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-[#0B1F66]">78%</span>
                <span className="text-[7px] text-[#64748B]">KYC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-[#0F172A] mb-1.5">KYC Completion</div>
              <div className="space-y-1">
                {[
                  { label: "Identity Verified", done: true },
                  { label: "Address Confirmed", done: true },
                  { label: "Documents Checked", done: true },
                  { label: "Biometric Pending", done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    {item.done ? (
                      <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                    ) : (
                      <Clock className="w-3 h-3 text-[#F97316]" />
                    )}
                    <span className={`text-[9px] ${item.done ? "text-[#64748B]" : "text-[#F97316]"}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verification list */}
          <div>
            <div className="text-xs font-semibold text-[#0F172A] mb-2">Recent Verifications</div>
            <div className="space-y-1.5">
              {verifications.slice(0, 4).map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    v.status === "completed" ? "bg-[#22C55E]" :
                    v.status === "processing" ? "bg-[#F97316] animate-pulse" :
                    "bg-red-500"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-[#0F172A] truncate">{v.name}</div>
                    <div className="text-[9px] text-[#64748B]">{v.time}</div>
                  </div>
                  <div className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    v.score >= 80 ? "text-[#22C55E] bg-green-50" :
                    v.score >= 60 ? "text-[#F97316] bg-orange-50" :
                    "text-red-500 bg-red-50"
                  }`}>
                    {v.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating alert card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-12 top-1/3 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-3 w-44"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-red-50 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
          </div>
          <span className="text-[10px] font-bold text-[#0F172A]">Fraud Alert</span>
        </div>
        <div className="text-[9px] text-[#64748B] leading-relaxed">
          Suspicious address pattern detected in Mumbai region.
        </div>
        <div className="mt-2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] font-semibold text-red-500">HIGH PRIORITY</span>
        </div>
      </motion.div>

      {/* Floating success card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-8 bottom-20 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-3 w-40"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 bg-green-50 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-[#22C55E]" />
          </div>
          <span className="text-[10px] font-bold text-[#22C55E]">Verified</span>
        </div>
        <div className="text-[9px] text-[#64748B]">KYC completed in 18 minutes</div>
        <div className="text-[8px] text-[#0B1F66] font-semibold mt-1">Score: 97/100</div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-6 top-8 bg-[#0B1F66] rounded-xl shadow-xl p-3 w-36"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[10px] font-bold text-white">Live Stats</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-[8px] text-white/60">Today&apos;s checks</span>
            <span className="text-[8px] font-bold text-[#38BDF8]">2,847</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[8px] text-white/60">Pass rate</span>
            <span className="text-[8px] font-bold text-[#22C55E]">96.2%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

