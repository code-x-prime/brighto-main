import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadToR2 } from '@/lib/r2'
import { sendJobApplicationEmails } from '@/lib/email'
import { jobApplicationSchema } from '@/lib/validation'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    const rl = rateLimit(`apply:${ip}`, 3, 60_000)
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many applications. Please try again later.' },
        { status: 429 }
      )
    }

    const formData = await request.formData()
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: (formData.get('message') as string) || '',
      jobId: formData.get('jobId') as string,
      consent: formData.get('consent') as string,
    }

    const parsed = jobApplicationSchema.safeParse(rawData)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      )
    }

    const { name, email, phone, message, jobId } = parsed.data

    const resume = formData.get('resume') as File | null
    if (!resume || !(resume instanceof File)) {
      return NextResponse.json({ error: 'Resume is required' }, { status: 400 })
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(resume.type)) {
      return NextResponse.json({ error: 'Only PDF or DOCX files are allowed' }, { status: 400 })
    }

    const job = await prisma.job.findUnique({ where: { id: jobId } })
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    const folder = process.env.UPLOAD_FOLDER || 'resumes'
    const safeName = name.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50)
    const ext = resume.name.split('.').pop() || 'pdf'
    const fileName = `${folder}/${jobId}/${Date.now()}-${safeName}.${ext}`
    const { url, key } = await uploadToR2(resume, fileName)

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
  } catch {
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
