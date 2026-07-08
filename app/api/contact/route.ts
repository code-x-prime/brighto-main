import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactEmails } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
    }

    // Save to database
    let submission
    try {
      submission = await prisma.contactSubmission.create({
        data: { name, email, phone: phone || null, subject, message },
      })
    } catch {
      return NextResponse.json({ error: 'Failed to save your message. Please try again.' }, { status: 500 })
    }

    // Send emails (thank you to user + notification to admin)
    let emailSent = false
    try {
      emailSent = await sendContactEmails({ name, email, subject, message })
    } catch {
      // Email failed but submission saved
    }

    // Update email status
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
