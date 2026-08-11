import Image from 'next/image'

const PARTNERS = [
  { name: 'Aditya Birla Housing Finance', logo: '/logos/aditya-birla-housing-finance.png' },
  { name: 'Ambit Finvest', logo: '/logos/ambit-finvest.png' },
  { name: 'AU Small Finance Bank', logo: '/logos/au-small-finance-bank.png' },
  { name: 'Authum Finance', logo: '/logos/authum-finance.png' },
  { name: 'Electronica Finance', logo: '/logos/electronica-finance.png' },
  { name: 'Equitas Small Finance Bank', logo: '/logos/equitas-small-finance-bank.png' },
  { name: 'ESAF Small Finance Bank', logo: '/logos/esaf-small-finance-bank.png' },
  { name: 'HDFC Bank', logo: '/logos/hdfc-bank.png' },
  { name: 'Hinduja Housing Finance', logo: '/logos/hinduja-housing-finance.png' },
  { name: 'ICICI Bank', logo: '/logos/icici-bank.png' },
  { name: 'IDBI Bank', logo: '/logos/idbi-bank.png' },
  { name: 'IndusInd Bank', logo: '/logos/indusind-bank.png' },
  { name: 'Kotak Mahindra Bank', logo: '/logos/kotak-mahindra-bank.png' },
  { name: 'L&T Finance', logo: '/logos/lt-finance.jpeg' },
  { name: 'Maxemo Capital', logo: '/logos/maxemo-capital.png' },
  { name: 'Poonawalla Fincorp', logo: '/logos/poonawalla-fincorp.png' },
  { name: 'SMFG India Credit', logo: '/logos/smfg-india-credit.png' },
  { name: 'TVS Credit', logo: '/logos/tvs-credit.png' },
  { name: 'Ujjivan Small Finance Bank', logo: '/logos/ujjivan-small-finance-bank.png' },
  { name: 'YES BANK', logo: '/logos/yes-bank.png' },
]

function LogoCard({ partner }: { partner: typeof PARTNERS[number] }) {
  return (
    <div className="flex-shrink-0 w-32 h-16 sm:w-36 sm:h-18 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center p-3 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200 transition-all duration-300 grayscale hover:grayscale-0">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={100}
        height={40}
        className="object-contain w-full h-full"
      />
    </div>
  )
}

export function BrightoPartners() {
  const row1 = PARTNERS.slice(0, Math.ceil(PARTNERS.length / 2))
  const row2 = PARTNERS.slice(Math.ceil(PARTNERS.length / 2))

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
          Our Partnerships
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-950" style={{ fontFamily: 'var(--font-manrope)' }}>
          Trusted by <span className="text-blue-600">Leading Banks &amp; NBFCs</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          Dynamic teams, trusted partnerships, lasting impact — powering verification and risk operations for India&apos;s leading financial institutions.
        </p>
      </div>

      <div className="space-y-4 max-w-[100vw] relative group/container">
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-4 animate-marquee-slow whitespace-nowrap py-2 group/row">
            {[...row1, ...row1].map((partner, idx) => (
              <LogoCard key={idx} partner={partner} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-4 animate-marquee-slow-reverse whitespace-nowrap py-2 group/row">
            {[...row2, ...row2].map((partner, idx) => (
              <LogoCard key={idx} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
        }

        .animate-marquee-slow {
          display: inline-flex;
          width: max-content;
          animation: partners-scroll-left 45s linear infinite;
        }

        .animate-marquee-slow-reverse {
          display: inline-flex;
          width: max-content;
          animation: partners-scroll-right 45s linear infinite;
        }

        @keyframes partners-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes partners-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .group\\/container:hover .animate-marquee-slow,
        .group\\/container:hover .animate-marquee-slow-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
