import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [totalJobs, activeJobs, totalContacts, newContacts, totalApplications, pendingApps, totalTestimonials, activeTestimonials] = await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { isActive: true } }),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { status: 'new' } }),
      prisma.jobApplication.count(),
      prisma.jobApplication.count({ where: { status: 'pending' } }),
      prisma.testimonial.count(),
      prisma.testimonial.count({ where: { isActive: true } }),
    ])

    const recentContacts = await prisma.contactSubmission.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, subject: true, status: true, createdAt: true },
    })

    const recentApplications = await prisma.jobApplication.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, status: true, createdAt: true, job: { select: { title: true } } },
    })

    const recentJobs = await prisma.job.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, department: true, location: true, isActive: true, createdAt: true, _count: { select: { applications: true } } },
    })

    return NextResponse.json({
      success: true,
      stats: {
        jobs: { total: totalJobs, active: activeJobs },
        contacts: { total: totalContacts, new: newContacts },
        applications: { total: totalApplications, pending: pendingApps },
        testimonials: { total: totalTestimonials, active: activeTestimonials },
      },
      recent: {
        contacts: recentContacts,
        applications: recentApplications,
        jobs: recentJobs,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
