import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


export const metadata: Metadata = {
  title: "Brighto India — Verification Intelligence Platform",
  description: "India's most trusted verification intelligence platform. AI-powered employee verification, KYC, background checks, and risk intelligence for banks, fintechs and enterprises.",
  keywords: "employee verification, background verification, KYC, risk intelligence, CPV services, fraud detection, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F97316]/10 selection:text-[#0B1F66] overflow-x-hidden">
        {/* Modern SaaS background gradients and glowing blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Base radial gradient */}
          <div className="absolute inset-0 bg-radial-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] opacity-80" />

          {/* Top Left Indigo/Blue Glow */}
          <div className="absolute -top-[10%] -left-[10%] w-[60%] aspect-square rounded-full bg-gradient-to-tr from-[#6366F1]/12 to-[#3B82F6]/6 blur-[130px] opacity-75" />

          {/* Top Right Orange/Rose Glow */}
          <div className="absolute top-[5%] -right-[10%] w-[55%] aspect-square rounded-full bg-gradient-to-br from-[#F97316]/9 to-[#F43F5E]/4 blur-[130px] opacity-70" />

          {/* Mid Left Sky/Teal Glow */}
          <div className="absolute top-[40%] -left-[20%] w-[70%] aspect-square rounded-full bg-gradient-to-tr from-[#06B6D4]/6 to-[#3B82F6]/6 blur-[150px] opacity-65" />

          {/* Mid Right Violet Glow */}
          <div className="absolute top-[65%] -right-[15%] w-[60%] aspect-square rounded-full bg-gradient-to-bl from-[#8B5CF6]/6 to-[#EC4899]/4 blur-[140px] opacity-60" />

          {/* Bottom Left Amber Glow */}
          <div className="absolute -bottom-[10%] -left-[10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-[#F59E0B]/6 to-[#F97316]/4 blur-[130px] opacity-70" />
        </div>

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
