import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num.toString();
}

export const services = [
  { slug: "employee-verification", name: "Employee Verification", icon: "UserCheck" },
  { slug: "background-verification", name: "Background Verification", icon: "Shield" },
  { slug: "cpv-services", name: "CPV Services", icon: "MapPin" },
  { slug: "kyc-verification", name: "KYC Verification", icon: "ScanFace" },
  { slug: "risk-intelligence", name: "Risk Intelligence", icon: "AlertTriangle" },
  { slug: "fraud-risk-control", name: "Fraud Risk Control Unit", icon: "Lock" },
  { slug: "document-collection", name: "Document Collection Review", icon: "FileCheck" },
  { slug: "call-center", name: "Call Center Services", icon: "Phone" },
];

export const industries = [
  { name: "Banking", icon: "Building2", color: "#0B1F66" },
  { name: "NBFC", icon: "Landmark", color: "#0B1F66" },
  { name: "Fintech", icon: "Zap", color: "#F97316" },
  { name: "Insurance", icon: "ShieldCheck", color: "#22C55E" },
  { name: "HR Tech", icon: "Users", color: "#38BDF8" },
  { name: "Telecom", icon: "Radio", color: "#8B5CF6" },
  { name: "Real Estate", icon: "Home", color: "#F59E0B" },
  { name: "E-Commerce", icon: "ShoppingBag", color: "#EC4899" },
];

export const stats = [
  { value: 50, suffix: "M+", label: "Verifications", description: "Processed annually" },
  { value: 500, suffix: "+", label: "Enterprise Clients", description: "Across India" },
  { value: 99.9, suffix: "%", label: "Accuracy Rate", description: "Industry-leading" },
  { value: 24, suffix: "hrs", label: "Average TAT", description: "Turnaround time" },
];

export const testimonials = [
  {
    quote: "Brighto India transformed our onboarding process. We reduced verification time by 70% and fraud incidents dropped to near zero.",
    author: "Rajesh Kumar",
    title: "Chief Risk Officer",
    company: "HDFC Bank",
    avatar: "RK",
  },
  {
    quote: "The AI-powered KYC workflow is exceptional. Real-time risk scoring has completely changed how we evaluate loan applications.",
    author: "Priya Sharma",
    title: "Head of Operations",
    company: "TVS Credit",
    avatar: "PS",
  },
  {
    quote: "Enterprise-grade security with startup-level agility. Brighto's API integration took less than 2 days. Remarkable.",
    author: "Amit Patel",
    title: "CTO",
    company: "Lendingkart",
    avatar: "AP",
  },
  {
    quote: "Nationwide coverage, fast TAT, and dedicated support. Exactly what we needed to scale our verification operations pan-India.",
    author: "Sunita Reddy",
    title: "VP Compliance",
    company: "Muthoot Finance",
    avatar: "SR",
  },
];
