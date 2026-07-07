import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadToR2 } from '@/lib/r2'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string
    const jobId = formData.get('jobId') as string
    const resume = formData.get('resume') as File

    if (!name || !email || !phone || !jobId || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    const allowedTypes = ['application/pdf']
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 })
    }

    // Upload to R2
    const fileName = `resumes/${jobId}/${Date.now()}-${resume.name}`
    const { url, key } = await uploadToR2(resume, fileName)

    // Save to database
    const application = await prisma.jobApplication.create({
      data: {
        name,
        email,
        phone,
        message: message || '',
        resumeUrl: url,
        resumeKey: key,
        jobId,
      },
    })

    return NextResponse.json({ success: true, application })
  } catch (error) {
    console.error('Application error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
