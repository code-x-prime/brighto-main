import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.brightoindia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/team',
    '/career',
    '/contact',
    '/services',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
  ]

  const serviceRoutes = [
    '/services/due-diligence',
    '/services/loan-application-verification',
    '/services/field-investigation',
    '/services/contact-point-verification',
    '/services/rcu-support',
    '/services/document-verification',
    '/services/fraud-risk-assessment',
    '/services/credit-appraisal-support',
  ]

  const allRoutes = [...staticRoutes, ...serviceRoutes]

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.6,
  }))
}
