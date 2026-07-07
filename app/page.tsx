import { BrightoHeader } from '@/components/brighto-header'
import { BrightoHero } from '@/components/brighto-hero'
import { BrightoAbout } from '@/components/brighto-about'
import { BrightoTrustNetwork } from '@/components/brighto-trust-network'
import { BrightoServices } from '@/components/brighto-services'
import { BrightoEcosystem } from '@/components/brighto-ecosystem'
import { BrightoIndustries } from '@/components/brighto-industries'
import { BrightoProcess } from '@/components/brighto-process'
import { GoogleReviews } from '@/components/google-reviews'
import { BrightoFAQ } from '@/components/brighto-faq'
import { BrightoCTAFooter } from '@/components/brighto-cta-footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <BrightoHeader />
      <BrightoHero />
      <BrightoAbout />
      <BrightoTrustNetwork />
      <BrightoServices />
      <BrightoEcosystem />
      <BrightoIndustries />
      <BrightoProcess />
      <GoogleReviews />
      <BrightoFAQ />
      <BrightoCTAFooter />
    </main>
  )
}
