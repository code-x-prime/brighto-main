import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Amiko } from 'next/font/google'
import LenisProvider from '@/components/lenis-provider'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko',
})

export const metadata: Metadata = {
  title: "Brighto India – India's Trusted Risk, Verification & Technology Solutions Partner",
  description:
    'Brighto India (Brighto Credit Information Pvt Ltd) delivers Due Diligence, Loan Application Verification, Field Investigation (FI), CPV, RCU Support, Background Verification, Warehouse Audits, and Verification API solutions for banks, NBFCs, fintechs, housing finance companies, and enterprises across India. ISO 27001 | ISO 9001 | SOC 2 Audited. Trusted since 2015.',
  keywords: [
    'Brighto India',
    'due diligence services India',
    'loan application verification',
    'field investigation services',
    'contact point verification CPV',
    'risk containment unit RCU',
    'background verification India',
    'warehouse audit services',
    'KYC API solutions India',
    'fraud risk assessment',
    'credit appraisal support',
    'verification services banks NBFCs',
    'fintech verification',
    'document verification India',
    'Crediscout',
    'Hubcheck',
    'Credify India',
    'Truering',
    'ISO 27001 verification company India',
    'SOC 2 audited India',
  ],
  authors: [{ name: 'Brighto Credit Information Private Limited' }],
  creator: 'Brighto India',
  publisher: 'Brighto India',
  metadataBase: new URL('https://www.brightoindia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Brighto India – India's Trusted Risk, Verification & Technology Solutions Partner",
    description:
      'Delivering secure, compliant, and technology-driven Due Diligence, Field Investigation, CPV, RCU, Background Verification and API solutions for financial institutions and enterprises since 2015.',
    url: 'https://www.brightoindia.com',
    siteName: 'Brighto India',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/Brighto-Logo.png',
        width: 400,
        height: 120,
        alt: 'Brighto India Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brighto India – India's Trusted Risk & Verification Partner",
    description:
      'ISO 27001 | ISO 9001 | SOC 2 Audited. Due Diligence, FI, CPV, RCU, Background Verification & API solutions for banks, NBFCs, fintechs.',
    images: ['/Brighto-Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Brighto-Logofav.png',
    apple: '/Brighto-Logofav.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#091C8C' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${amiko.variable} light`} style={{ colorScheme: 'light', backgroundColor: '#FFFFFF', color: '#0F172A' }}>
      <body className="font-sans antialiased bg-white text-slate-950">
        <LenisProvider />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
