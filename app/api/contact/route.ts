import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactEmails } from '@/lib/email'
import { contactFormSchema } from '@/lib/validation'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    const rl = rateLimit(`contact:${ip}`, 5, 60_000)
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      )
    }

    const { name, email, phone, subject, message, website, source } = parsed.data

    if (website) {
      return NextResponse.json({ success: true })
    }

    let submission
    try {
      submission = await prisma.contactSubmission.create({
        data: { name, email, phone: phone || null, subject, message, source },
      })
    } catch {
      return NextResponse.json({ error: 'Failed to save your message. Please try again.' }, { status: 500 })
    }

    let emailSent = false
    try {
      emailSent = await sendContactEmails({ name, email, subject, message })
    } catch {
      // Email failed but submission saved
    }

    try {
      await prisma.contactSubmission.update({
        where: { id: submission.id },
        data: { emailSent },
      })
    } catch {
      // Update failed but not critical
    }

    return NextResponse.json({
      success: true,
      id: submission.id,
      emailSent,
    })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 })
  }
}
