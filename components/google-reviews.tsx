'use client'

import { Star } from 'lucide-react'

interface GoogleReview {
  name: string
  reviews: string
  timeAgo: string
  content: string
  avatar?: string
}

const REVIEWS_ROW1: GoogleReview[] = [
  {
    name: 'Deep Sahota',
    reviews: '5 reviews',
    timeAgo: '7 years ago',
    content: 'Brighto India is really a good company I highly recommend.',
  },
  {
    name: 'Shalu Mittal',
    reviews: '8 reviews',
    timeAgo: '7 years ago',
    content: 'Supportive staff, great customer services.',
  },
  {
    name: 'Mohd. Akram',
    reviews: '3 reviews',
    timeAgo: '7 years ago',
    content: 'Good company great management',
  },
  {
    name: 'Sandeep Kumar',
    reviews: '2 reviews',
    timeAgo: '7 years ago',
    content: "It's a good company",
  },
  {
    name: 'All India',
    reviews: '3 reviews',
    timeAgo: '7 years ago',
    content: 'Brighto is highly recommended company.',
  },
]

const REVIEWS_ROW2: GoogleReview[] = [
  {
    name: 'raaj mittal',
    reviews: '8 reviews',
    timeAgo: '7 years ago',
    content: 'Great customer support',
  },
  {
    name: 'Md Altaaf',
    reviews: '5 reviews',
    timeAgo: '7 years ago',
    content: 'Supportive staff and great management',
  },
  {
    name: 'Kaneez -e - Fatima',
    reviews: '5 reviews',
    timeAgo: '7 years ago',
    content: 'Great services',
  },
  {
    name: 'Deep Sahota',
    reviews: '5 reviews',
    timeAgo: '7 years ago',
    content: 'Brighto India is really a good company I highly recommend.',
  },
  {
    name: 'Shalu Mittal',
    reviews: '8 reviews',
    timeAgo: '7 years ago',
    content: 'Supportive staff, great customer services.',
  },
]

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="review-card flex-shrink-0 w-[320px] bg-white border border-slate-200 rounded-2xl p-5 whitespace-normal transition-all duration-500 ease-out cursor-pointer shadow-sm hover:shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-semibold text-slate-900 truncate">{review.name}</h4>
            <svg className="w-4 h-4 flex-shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>{review.reviews}</span>
            <span>·</span>
            <span>{review.timeAgo}</span>
          </div>
        </div>
      </div>
      <StarRating />
      <p className="text-sm text-slate-700 leading-relaxed mt-2">{review.content}</p>
      <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-400">
        <span>on</span>
        <GoogleLogo />
      </div>
    </div>
  )
}

export function GoogleReviews() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
      </div>

      {/* Reviews Marquee */}
      <div className="space-y-5 max-w-[100vw] relative group/container">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-5 animate-marquee whitespace-nowrap py-4 group/row">
            {[...REVIEWS_ROW1, ...REVIEWS_ROW1].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden relative w-full mask-gradient">
          <div className="flex gap-5 animate-marquee-reverse whitespace-nowrap py-4 group/row">
            {[...REVIEWS_ROW2, ...REVIEWS_ROW2].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }

        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }

        .animate-marquee-reverse {
          display: inline-flex;
          width: max-content;
          animation: scroll-right 40s linear infinite;
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

        .group\\/container:hover .review-card {
          filter: blur(2px);
          opacity: 0.4;
          transform: scale(0.98);
        }

        .group\\/container .review-card:hover {
          filter: blur(0px) !important;
          opacity: 1 !important;
          transform: scale(1.03) translateY(-4px) !important;
          border-color: #93C5FD !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
        }
      `}</style>
    </section>
  )
}
