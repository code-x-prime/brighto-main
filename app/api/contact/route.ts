import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail, contactThankYouTemplate, adminNotificationTemplate } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: { name, email, phone, subject, message },
    })

    // Send thank you email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: `Thank you for contacting Brighto India - ${subject}`,
      html: contactThankYouTemplate(name),
    })

    // Send notification to admin
    const adminEmailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@brightoindia.com',
      subject: `New Contact: ${subject}`,
      html: adminNotificationTemplate(name, email, subject, message),
    })

    // Update email status
    await prisma.contactSubmission.update({
      where: { id: submission.id },
      data: { emailSent: userEmailResult.success },
    })

    return NextResponse.json({
      success: true,
      id: submission.id,
      emailSent: userEmailResult.success,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
