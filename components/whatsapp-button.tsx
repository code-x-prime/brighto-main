'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function WhatsAppButton() {
  const pathname = usePathname()
  if (pathname.startsWith('/admin')) return null

  const phone = '919311463901'
  const message = encodeURIComponent('Hello Brighto India! I would like to know more about your verification and due diligence services. Could you please share the details?')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <span className="relative flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
      </span>
    </a>
  )
}
