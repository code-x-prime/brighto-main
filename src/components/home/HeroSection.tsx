"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type VariantLabels,
  type Target,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle, AlertTriangle } from "lucide-react";

// ─── RotatingText ─────────────────────────────────────────────────────────────

interface RotatingTextRef {
  next: () => void; previous: () => void;
  jumpTo: (index: number) => void; reset: () => void;
}

interface RotatingTextProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.span>, "children" | "transition" | "initial" | "animate" | "exit"> {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean; auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string; splitLevelClassName?: string; elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((
  { texts, transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 }, animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 }, animatePresenceMode = "wait",
    animatePresenceInitial = false, rotationInterval = 2400,
    staggerDuration = 0.012, staggerFrom = "last",
    loop = true, auto = true, splitBy = "characters",
    onNext, mainClassName, splitLevelClassName, elementLevelClassName, ...rest },
  ref
) => {
  const [idx, setIdx] = useState(0);

  const splitChars = (text: string) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try {
        return Array.from(new Intl.Segmenter("en", { granularity: "grapheme" }).segment(text), s => s.segment);
      } catch { return text.split(""); }
    }
    return text.split("");
  };

  const elements = useMemo(() => {
    const t = texts[idx] ?? "";
    if (splitBy === "characters") {
      let c = 0;
      return t.split(/(\s+)/).filter(p => p.length > 0).map(part => {
        const isSpace = /^\s+$/.test(part);
        const chars = isSpace ? [part] : splitChars(part);
        const si = c; c += chars.length;
        return { characters: chars, isSpace, startIndex: si };
      });
    }
    return t.split(splitBy).map((p, i) => ({ characters: [p], isSpace: false, startIndex: i }));
  }, [texts, idx, splitBy]);

  const total = useMemo(() => elements.reduce((s, e) => s + e.characters.length, 0), [elements]);

  const stagger = useCallback((i: number, tot: number) => {
    if (tot <= 1 || !staggerDuration) return 0;
    const s = staggerDuration;
    if (staggerFrom === "first") return i * s;
    if (staggerFrom === "last") return (tot - 1 - i) * s;
    if (staggerFrom === "center") return Math.abs((tot - 1) / 2 - i) * s;
    if (staggerFrom === "random") return Math.random() * (tot - 1) * s;
    if (typeof staggerFrom === "number") return Math.abs(Math.max(0, Math.min(staggerFrom, tot - 1)) - i) * s;
    return i * s;
  }, [staggerFrom, staggerDuration]);

  const change = useCallback((ni: number) => { setIdx(ni); onNext?.(ni); }, [onNext]);
  const next = useCallback(() => { const ni = idx === texts.length - 1 ? (loop ? 0 : idx) : idx + 1; if (ni !== idx) change(ni); }, [idx, texts.length, loop, change]);
  const previous = useCallback(() => { const pi = idx === 0 ? (loop ? texts.length - 1 : idx) : idx - 1; if (pi !== idx) change(pi); }, [idx, texts.length, loop, change]);
  const jumpTo = useCallback((i: number) => { const v = Math.max(0, Math.min(i, texts.length - 1)); if (v !== idx) change(v); }, [texts.length, idx, change]);
  const reset = useCallback(() => { if (idx !== 0) change(0); }, [idx, change]);

  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);
  useEffect(() => { if (!auto || texts.length <= 1) return; const id = setInterval(next, rotationInterval); return () => clearInterval(id); }, [next, rotationInterval, auto, texts.length]);

  return (
    <motion.span className={["inline-flex flex-wrap whitespace-pre-wrap relative align-bottom", mainClassName].filter(Boolean).join(" ")} {...rest} layout>
      <span className="sr-only">{texts[idx]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div key={idx} className="inline-flex flex-wrap relative flex-row items-baseline" layout aria-hidden initial="initial" animate="animate" exit="exit">
          {elements.map((el, ei) => (
            <span key={ei} className={["inline-flex", splitLevelClassName].filter(Boolean).join(" ")} style={{ whiteSpace: "pre" }}>
              {el.characters.map((char, ci) => (
                <motion.span key={`${char}-${ci}`} initial={initial} animate={animate} exit={exit}
                  transition={{ ...transition, delay: stagger(el.startIndex + ci, total) }}
                  className={["inline-block leading-none tracking-tight", elementLevelClassName].filter(Boolean).join(" ")}>
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
});
RotatingText.displayName = "RotatingText";

// ─── Dot Canvas ───────────────────────────────────────────────────────────────

interface Dot { x: number; y: number; targetOpacity: number; currentOpacity: number; opacitySpeed: number; baseRadius: number; currentRadius: number; }

const DS = 28, BMIN = 0.06, BMAX = 0.16, BR = 1.2, IR = 140, IRSQ = IR * IR, OB = 0.5, RB = 2.8;
const GCS = Math.max(50, Math.floor(IR / 1.5));

function DotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef<Record<string, number[]>>({});
  const sizeRef = useRef({ width: 0, height: 0 });
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const createDots = useCallback(() => {
    const { width: w, height: h } = sizeRef.current;
    if (!w || !h) return;
    const dots: Dot[] = [], grid: Record<string, number[]> = {};
    for (let i = 0; i < Math.ceil(w / DS); i++) {
      for (let j = 0; j < Math.ceil(h / DS); j++) {
        const x = i * DS + DS / 2, y = j * DS + DS / 2;
        const ck = `${Math.floor(x / GCS)}_${Math.floor(y / GCS)}`;
        if (!grid[ck]) grid[ck] = [];
        grid[ck].push(dots.length);
        const base = Math.random() * (BMAX - BMIN) + BMIN;
        dots.push({ x, y, targetOpacity: base, currentOpacity: base, opacitySpeed: Math.random() * 0.004 + 0.001, baseRadius: BR, currentRadius: BR });
      }
    }
    dotsRef.current = dots; gridRef.current = grid;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const w = canvas.parentElement?.clientWidth ?? window.innerWidth;
    const h = canvas.parentElement?.clientHeight ?? window.innerHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      sizeRef.current = { width: w, height: h }; createDots();
    }
  }, [createDots]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current, ctx = canvas?.getContext("2d");
    const dots = dotsRef.current, grid = gridRef.current;
    const { width: w, height: h } = sizeRef.current;
    const { x: mx, y: my } = mouseRef.current;
    if (!ctx || !w || !h) { rafRef.current = requestAnimationFrame(animate); return; }
    ctx.clearRect(0, 0, w, h);
    const active = new Set<number>();
    if (mx !== null && my !== null) {
      const cx = Math.floor(mx / GCS), cy = Math.floor(my / GCS), sr = Math.ceil(IR / GCS);
      for (let i = -sr; i <= sr; i++) for (let j = -sr; j <= sr; j++) { const ck = `${cx + i}_${cy + j}`; grid[ck]?.forEach(di => active.add(di)); }
    }
    dots.forEach((dot, i) => {
      dot.currentOpacity += dot.opacitySpeed;
      if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BMIN) {
        dot.opacitySpeed = -dot.opacitySpeed;
        dot.currentOpacity = Math.max(BMIN, Math.min(dot.currentOpacity, BMAX));
        dot.targetOpacity = Math.random() * (BMAX - BMIN) + BMIN;
      }
      let f = 0; dot.currentRadius = dot.baseRadius;
      if (mx !== null && my !== null && active.has(i)) {
        const dx = dot.x - mx, dy = dot.y - my, dSq = dx * dx + dy * dy;
        if (dSq < IRSQ) f = Math.pow(Math.max(0, 1 - Math.sqrt(dSq) / IR), 2);
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(11,31,102,${Math.min(1, dot.currentOpacity + f * OB).toFixed(3)})`;
      ctx.arc(dot.x, dot.y, dot.baseRadius + f * RB, 0, Math.PI * 2);
      ctx.fill();
    });
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    handleResize();
    const onMove = (e: MouseEvent) => {
      const r = canvasRef.current?.getBoundingClientRect();
      mouseRef.current = r ? { x: e.clientX - r.left, y: e.clientY - r.top } : { x: null, y: null };
    };
    const onLeave = () => { mouseRef.current = { x: null, y: null }; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", handleResize);
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", handleResize);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize, animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden />;
}

// ─── Enterprise Dashboard Visual ─────────────────────────────────────────────

function EnterpriseDashboard({ fullWidth = false }: { fullWidth?: boolean }) {
  const verifications = [
    { name: "Rajesh Kumar — HDFC Bank", status: "completed", score: 94, time: "2m ago" },
    { name: "Priya Sharma — Axis Bank", status: "processing", score: 78, time: "5m ago" },
    { name: "Amit Patel — NBFC Ltd.", status: "completed", score: 97, time: "8m ago" },
    { name: "Sneha Reddy — Kotak", status: "flagged", score: 38, time: "11m ago" },
  ];

  if (fullWidth) {
    return (
      <div className="bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden" style={{ borderRadius: "8px" }}>
        {/* Window chrome */}
        <div className="bg-[#0B1F66] px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white/10 mx-8 py-0.5 px-3 text-[10px] text-white/60 text-center">
            app.brightoindia.com/dashboard
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] text-white/50 font-medium">Live</span>
          </div>
        </div>

        {/* Nav tabs */}
        <div className="bg-[#F8F9FB] border-b border-[#E2E8F0] px-5 flex items-center gap-0">
          {["Overview", "Verifications", "Risk Intelligence", "Reports", "Settings"].map((tab, i) => (
            <div key={tab} className={`px-4 py-2.5 text-[11px] font-semibold cursor-default border-b-2 ${i === 0 ? "border-[#0B1F66] text-[#0B1F66]" : "border-transparent text-[#94A3B8] hover:text-[#475569]"} transition-colors`}>
              {tab}
            </div>
          ))}
          <div className="ml-auto flex items-center gap-2 pr-1">
            <div className="w-5 h-5 bg-[#0B1F66] flex items-center justify-center">
              <Shield className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-[10px] font-black text-[#0B1F66] uppercase tracking-widest hidden sm:inline" style={{ fontFamily: "Manrope, sans-serif" }}>Brighto Verify</span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-5">
          {/* Top stats */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-4">
            {[
              { label: "Today", value: "347", color: "text-[#0B1F66]", bg: "bg-[#EFF6FF]" },
              { label: "Cleared", value: "329", color: "text-green-600", bg: "bg-green-50" },
              { label: "Pending", value: "14", color: "text-[#F97316]", bg: "bg-orange-50" },
              { label: "Flagged", value: "4", color: "text-red-500", bg: "bg-red-50" },
              { label: "This Month", value: "8.4K", color: "text-[#0B1F66]", bg: "bg-[#EFF6FF]" },
              { label: "Avg Score", value: "91", color: "text-green-600", bg: "bg-green-50" },
              { label: "Avg TAT", value: "18h", color: "text-[#475569]", bg: "bg-[#F8F9FB]" },
              { label: "Accuracy", value: "99.9%", color: "text-[#0B1F66]", bg: "bg-[#EFF6FF]" },
            ].map(s => (
              <div key={s.label} className={`${s.bg} p-2.5 text-center rounded-xl`}>
                <div className={`text-[15px] font-black ${s.color}`} style={{ fontFamily: "Manrope, sans-serif" }}>{s.value}</div>
                <div className="text-[8px] font-semibold text-[#94A3B8] uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Verification list — left 2 cols */}
            <div className="md:col-span-2">
              <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Recent Verifications</div>
              <div className="space-y-1.5">
                {[
                  ...verifications,
                  { name: "Kiran Patel — Bajaj Finance", status: "completed", score: 88, time: "18m ago" },
                  { name: "Meera Iyer — Yes Bank", status: "processing", score: 72, time: "22m ago" },
                ].map((vf, i) => (
                  <motion.div
                    key={vf.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.07 }}
                    className="flex items-center gap-2.5 px-3 py-2 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${vf.status === "completed" ? "bg-green-500" : vf.status === "processing" ? "bg-[#F97316] animate-pulse" : "bg-red-500"}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-[#0F172A] truncate">{vf.name}</div>
                    </div>
                    <div className="text-[9px] text-[#94A3B8] shrink-0 hidden sm:block">{vf.time}</div>
                    <div className={`text-[9px] font-black px-2 py-0.5 shrink-0 ${vf.score >= 75 ? "text-green-600 bg-green-50" : vf.score >= 50 ? "text-[#F97316] bg-orange-50" : "text-red-500 bg-red-50"}`}>
                      {vf.score}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="space-y-3">
              {/* Risk score */}
              <div className="bg-[#F8F9FB] border border-[#E2E8F0] p-3 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest">Risk Score</span>
                  <span className="text-[9px] font-black text-green-600 bg-green-50 px-1.5 py-0.5">LOW</span>
                </div>
                <div className="relative h-2 bg-[#E2E8F0]" style={{ borderRadius: "1px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.5, delay: 1.0 }}
                    className="h-full bg-linear-to-r from-green-500 via-[#38BDF8] to-[#0B1F66]"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] text-[#94A3B8]">High</span>
                  <span className="text-[8px] font-bold text-[#0B1F66]">82/100</span>
                  <span className="text-[8px] text-[#94A3B8]">Safe</span>
                </div>
              </div>

              {/* Alert */}
              <div className="bg-red-50 border border-red-100 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertTriangle className="w-3 h-3 text-red-500 shrink-0" />
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-wide">Fraud Alert</span>
                </div>
                <p className="text-[9px] text-[#64748B]">Address mismatch — Pune region</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[8px] font-bold text-red-500">HIGH PRIORITY</span>
                </div>
              </div>

              {/* Verified */}
              <div className="bg-green-50 border border-green-100 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <span className="text-[10px] font-black text-green-600 uppercase tracking-wide">KYC Cleared</span>
                </div>
                <div className="text-[9px] text-[#64748B]">Completed in 11 min · Score: 97</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Compact right-side version (not used anymore but kept) ──
  return (
    <div className="relative w-full">
      <div className="bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden" style={{ borderRadius: "4px" }}>
        <div className="bg-[#0B1F66] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white/10 mx-6 py-0.5 px-2 text-[9px] text-white/50 text-center">app.brightoindia.com</div>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-4 gap-1.5">
            {[{ l: "Today", v: "347", c: "text-[#0B1F66]", bg: "bg-[#EFF6FF]" }, { l: "Cleared", v: "329", c: "text-green-600", bg: "bg-green-50" }, { l: "Pending", v: "14", c: "text-[#F97316]", bg: "bg-orange-50" }, { l: "Flagged", v: "4", c: "text-red-500", bg: "bg-red-50" }].map(s => (
              <div key={s.l} className={`${s.bg} p-2 text-center rounded-xl`}>
                <div className={`text-sm font-black ${s.c}`}>{s.v}</div>
                <div className="text-[8px] text-[#94A3B8] uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
          {verifications.slice(0, 3).map((vf) => (
            <div key={vf.name} className="flex items-center gap-2 px-2.5 py-1.5 bg-[#F8F9FB] border border-[#E2E8F0]">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${vf.status === "completed" ? "bg-green-500" : vf.status === "processing" ? "bg-[#F97316] animate-pulse" : "bg-red-500"}`} />
              <div className="text-[9px] font-medium text-[#0F172A] flex-1 truncate">{vf.name}</div>
              <div className={`text-[8px] font-black px-1.5 py-0.5 ${vf.score >= 75 ? "text-green-600 bg-green-50" : "text-red-500 bg-red-50"}`}>{vf.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main HeroSection ─────────────────────────────────────────────────────────

const rotatingWords = ["Intelligence", "Compliance", "Confidence", "Excellence", "Precision"];
const trustBadges = ["ISO 27001", "RBI Compliant", "Pan-India", "AES-256"];

const v: Record<string, Variants> = {
  badge:    { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } } },
  headline: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.3 } } },
  sub:      { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.42 } } },
  cta:      { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.54 } } },
  trust:    { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4, delay: 0.66 } } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-transparent overflow-hidden">
      <DotCanvas />

      {/* Vignette */}
      <div className="absolute inset-0 z-1 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, transparent 40%, rgba(255,255,255,0.7) 100%)" }} />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[6%] bottom-0 w-px bg-[#E2E8F0] hidden xl:block z-1" />
      <div className="absolute top-0 right-[6%] bottom-0 w-px bg-[#E2E8F0] hidden xl:block z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 lg:pt-28 lg:pb-20">

        {/* ── Top: Centered copy ── */}
        <div className="max-w-3xl mx-auto text-center">


          {/* Headline */}
          <motion.h1
            variants={v.headline} initial="hidden" animate="visible"
            className="text-[46px] sm:text-[56px] lg:text-[68px] font-black text-[#0B1F66] leading-[1.02] tracking-tight mb-5"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Trusted Verification
            <br />
            &amp; Risk{" "}
            <span className="inline-block overflow-hidden align-bottom" style={{ height: "1.08em" }}>
              <RotatingText
                texts={rotatingWords}
                mainClassName="text-[#F97316]"
                staggerFrom="last"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "110%", opacity: 0 }}
                staggerDuration={0.012}
                transition={{ type: "spring", damping: 20, stiffness: 260 }}
                rotationInterval={2400}
                splitBy="characters"
                auto loop
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={v.sub} initial="hidden" animate="visible"
            className="text-[17px] text-[#475569] leading-relaxed max-w-xl mx-auto mb-7 font-normal">
            Helping banks, NBFCs, and enterprises verify identities, screen employees, and make confident decisions — through AI-augmented workflows built for Indian compliance.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={v.cta} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0B1F66] hover:bg-[#071444] text-white text-[14px] font-semibold px-7 py-3.5 transition-colors group rounded-xl">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 border border-[#0B1F66] text-[#0B1F66] hover:bg-[#F8F9FB] text-[14px] font-semibold px-7 py-3.5 transition-colors rounded-xl">
              View Solutions
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={v.trust} initial="hidden" animate="visible"
            className="flex flex-wrap items-center justify-center gap-5 mb-10">
            {trustBadges.map(b => (
              <div key={b} className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#94A3B8]">
                <div className="w-1 h-1 bg-[#F97316]" />
                {b}
              </div>
            ))}
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="border-t border-[#E2E8F0] pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
            {[{ v: "50M+", l: "Verifications" }, { v: "500+", l: "Enterprises" }, { v: "99.9%", l: "Accuracy" }, { v: "24 hrs", l: "Avg TAT" }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-[28px] font-black text-[#0B1F66] leading-none mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{s.v}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8]">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom: Full-width dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto"
        >
          <EnterpriseDashboard fullWidth />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E2E8F0]" />
    </section>
  );
}
