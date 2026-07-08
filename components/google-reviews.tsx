'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string | null
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rajesh Sharma', role: 'CTO', company: 'InfoTech Solutions', content: 'Brighto India delivered exceptional results. Their team understood our requirements perfectly and provided a seamless experience from start to finish.', rating: 5, avatar: null },
  { id: '2', name: 'Priya Mehta', role: 'Operations Head', company: 'GlobalServ', content: 'Professional, reliable, and highly skilled. Brighto has been our trusted partner for over 3 years now. Highly recommended!', rating: 5, avatar: null },
  { id: '3', name: 'Amit Verma', role: 'Founder', company: 'StartupHub', content: 'Outstanding service quality. The team went above and beyond to deliver on time. Will definitely work with them again.', rating: 5, avatar: null },
  { id: '4', name: 'Sunita Kapoor', role: 'VP Engineering', company: 'NexGen Labs', content: 'Brighto India transformed our operations. Their expertise in verification services is unmatched in the industry.', rating: 4, avatar: null },
  { id: '5', name: 'Vikram Singh', role: 'Director', company: 'Pinnacle Corp', content: 'Excellent customer support and attention to detail. Brighto made the entire process smooth and hassle-free.', rating: 5, avatar: null },
  { id: '6', name: 'Neha Gupta', role: 'HR Manager', company: 'TalentFirst', content: 'We have partnered with Brighto for background verification. Their accuracy and turnaround time is impressive.', rating: 5, avatar: null },
  { id: '7', name: 'Mohd. Salman', role: 'CEO', company: 'BlueWave Tech', content: 'Highly professional team. Brighto India consistently delivers quality results. A trusted partner for our verification needs.', rating: 4, avatar: null },
  { id: '8', name: 'Anita Desai', role: 'COO', company: 'CloudSync', content: 'Brighto India is a game-changer. Their verification platform is fast, accurate, and easy to use. Five stars!', rating: 5, avatar: null },
  { id: '9', name: 'Deepak Joshi', role: 'Manager', company: 'Vertex Industries', content: 'Great experience working with Brighto. Their team is responsive, knowledgeable, and delivers on promises.', rating: 5, avatar: null },
  { id: '10', name: 'Kavita Reddy', role: 'Head of Compliance', company: 'SecureNet', content: 'Brighto India has been instrumental in streamlining our verification process. Excellent service and support.', rating: 4, avatar: null },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="testimonial-card flex-shrink-0 w-[340px] bg-white border border-slate-200/80 rounded-2xl p-6 whitespace-normal transition-all duration-500 ease-out cursor-default shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            {initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-semibold text-slate-900 truncate">{testimonial.name}</h4>
            <svg className="w-4 h-4 flex-shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
          </p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
        ))}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
    </div>
  )
}

export function GoogleReviews() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS)

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.testimonials?.length > 0) {
          setTestimonials(data.testimonials)
        }
      })
      .catch(() => {})
  }, [])

  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2))
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2))

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          See what our clients have to say about working with Brighto India
        </p>
      </div>

      <div className="space-y-5 max-w-[100vw] relative group/container">
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-5 animate-marquee whitespace-nowrap py-4 group/row">
            {[...row1, ...row1].map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-5 animate-marquee-reverse whitespace-nowrap py-4 group/row">
            {[...row2, ...row2].map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
        }

        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
        }

        .animate-marquee-reverse {
          display: inline-flex;
          width: max-content;
          animation: scroll-right 50s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .group\\/container:hover .animate-marquee,
        .group\\/container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }

        .group\\/container:hover .testimonial-card {
          filter: blur(2px);
          opacity: 0.4;
          transform: scale(0.97);
        }

        .group\\/container .testimonial-card:hover {
          filter: blur(0px) !important;
          opacity: 1 !important;
          transform: scale(1.03) translateY(-6px) !important;
          border-color: #93C5FD !important;
          box-shadow: 0 20px 40px -8px rgb(0 0 0 / 0.12), 0 8px 16px -6px rgb(0 0 0 / 0.08) !important;
        }
      `}</style>
    </section>
  )
}
