import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadToR2 } from '@/lib/r2'
import { sendJobApplicationEmails } from '@/lib/email'

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

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json({ error: 'Only PDF or DOCX files are allowed' }, { status: 400 })
    }

    // Get job details for email
    const job = await prisma.job.findUnique({ where: { id: jobId } })
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    // Upload to R2 with folder
    const folder = process.env.UPLOAD_FOLDER || 'resumes'
    const ext = resume.name.split('.').pop() || 'pdf'
    const fileName = `${folder}/${jobId}/${Date.now()}-${name.replace(/\s+/g, '-')}.${ext}`
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

    // Send emails (thank you to applicant + notification to admin)
    let emailSent = false
    try {
      emailSent = await sendJobApplicationEmails({
        name,
        email,
        jobTitle: job.title,
        department: job.department,
      })
    } catch {
      // Email failed but application saved
    }

    return NextResponse.json({ success: true, application, emailSent })
  } catch (error) {
    console.error('Application error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
