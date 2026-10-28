import nodemailer from 'nodemailer'
import { escapeHtml } from './email-escape'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export const SUPPORT_EMAIL = 'Support@brightoindia.com'

interface SendEmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Brighto India" <${process.env.FROM_EMAIL || 'noreply@brightoindia.com'}>`,
      to,
      replyTo: replyTo || SUPPORT_EMAIL,
      subject,
      html,
    })
    console.log('Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export type EnquiryType = 'job' | 'service' | 'general'

const SERVICE_SUBJECTS = [
  'due diligence services',
  'loan application verification',
  'field investigation (fi)',
  'contact point verification (cpv)',
  'rcu support',
  'document verification',
  'fraud risk assessment',
  'credit appraisal support',
]

export function getEnquiryType(subject: string): EnquiryType {
  const s = subject.trim().toLowerCase()
  if (s === 'job enquiry') return 'job'
  if (SERVICE_SUBJECTS.includes(s)) return 'service'
  return 'general'
}

const ENQUIRY_LABELS: Record<EnquiryType, { label: string; team: string }> = {
  job: { label: 'Job Enquiry', team: 'HR / Recruitment' },
  service: { label: 'Service Enquiry', team: 'Business / Services' },
  general: { label: 'General Enquiry', team: 'Support' },
}

export async function sendContactEmails(data: {
  name: string
  email: string
  subject: string
  message: string
  phone?: string | null
  source?: string
}) {
  const { name, email, subject, message, phone, source } = data
  const type = getEnquiryType(subject)

  await sendEmail({
    to: email,
    subject: `Thank you for contacting Brighto India - ${subject}`,
    html: contactThankYouTemplate(name, type, subject),
  })

  const adminResult = await sendEmail({
    to: SUPPORT_EMAIL,
    subject: `New ${ENQUIRY_LABELS[type].label} [${source || 'Brighto India'}]: ${subject}`,
    html: adminNotificationTemplate(name, email, subject, message, phone, source, type),
    replyTo: email,
  })

  return adminResult.success
}

export async function sendJobApplicationEmails(data: {
  name: string
  email: string
  jobTitle: string
  department: string
}) {
  const { name, email, jobTitle, department } = data

  // Thank you email to applicant
  const userResult = await sendEmail({
    to: email,
    subject: `Application Received - ${jobTitle} at Brighto India`,
    html: jobApplicationThankYouTemplate(name, jobTitle),
  })

  // Notification to admin
  await sendEmail({
    to: SUPPORT_EMAIL,
    subject: `New Job Application: ${jobTitle} (${department})`,
    html: jobApplicationAdminTemplate(name, email, jobTitle, department),
    replyTo: email,
  })

  return userResult.success
}

// ==================== TEMPLATES ====================

export function contactThankYouTemplate(name: string, type: EnquiryType = 'general', subject = '') {
  const safeName = escapeHtml(name)
  const safeSubject = escapeHtml(subject)
  const intro =
    type === 'job'
      ? "Thank you for your interest in building a career with Brighto India! We've received your job enquiry and our HR team will review it and get back to you shortly."
      : type === 'service'
        ? `Thank you for your interest in our ${safeSubject} service! We've received your enquiry and our business team will get back to you shortly.`
        : "Thank you for reaching out to us! We've received your message and our team will get back to you shortly."
  const outro =
    type === 'job'
      ? 'To apply for an open position with your resume, please visit the Careers page at www.brightoindia.com/career.'
      : 'In the meantime, feel free to explore our services or reach out to us directly.'
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #091C8C 0%, #1e40af 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; }
        .header p { color: #93c5fd; margin: 8px 0 0; font-size: 14px; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #1e293b; margin-bottom: 20px; }
        .message { color: #475569; line-height: 1.7; font-size: 15px; }
        .highlight { background: #f0f9ff; border-left: 4px solid #091C8C; padding: 15px 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
        .highlight p { margin: 0; color: #1e40af; font-size: 14px; }
        .footer { background: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Brighto India</h1>
          <p>Trusted Risk & Verification Partner</p>
        </div>
        <div class="content">
          <p class="greeting">Hi ${safeName},</p>
          <p class="message">
            ${intro}
          </p>
          <div class="highlight">
            <p>Our team typically responds within 24 working hours.</p>
          </div>
          <p class="message">
            ${outro}
          </p>
          <p class="message">
            Best regards,<br>
            <strong>Brighto India Team</strong>
          </p>
        </div>
        <div class="footer">
          <p>Brighto Credit Information Pvt. Ltd.</p>
          <p>This is an automated email, please do not reply directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function adminNotificationTemplate(
  name: string,
  email: string,
  subject: string,
  message: string,
  phone?: string | null,
  source?: string,
  type: EnquiryType = 'general'
) {
  const { label, team } = ENQUIRY_LABELS[type]
  const headerGradient =
    type === 'job' ? '#7c3aed 0%, #6d28d9 100%' : type === 'service' ? '#091C8C 0%, #1e40af 100%' : '#f97316 0%, #ea580c 100%'
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeSource = escapeHtml(source || 'Brighto India')
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message)
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, ${headerGradient}); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 20px; }
        .content { padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-bottom: 5px; }
        .value { color: #1e293b; font-size: 15px; background: #f8fafc; padding: 12px; border-radius: 8px; word-break: break-word; }
        .message-box { background: #fffbeb; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap; word-break: break-word; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${label}</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${safeName}</div>
          </div>
          <div class="field">
            <div class="label">Enquiry Type / Route To</div>
            <div class="value"><strong>${label}</strong> &rarr; ${team} team</div>
          </div>
          <div class="field">
            <div class="label">Source Website</div>
            <div class="value">${safeSource}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${safeEmail}</div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${safePhone}</div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${safeSubject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${safeMessage}</div>
          </div>
        </div>
        <div class="footer">
          <p>Brighto India Admin Panel</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function jobApplicationThankYouTemplate(name: string, jobTitle: string) {
  const safeName = escapeHtml(name)
  const safeJobTitle = escapeHtml(jobTitle)
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #091C8C 0%, #1e40af 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; }
        .header p { color: #93c5fd; margin: 8px 0 0; font-size: 14px; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #1e293b; margin-bottom: 20px; }
        .message { color: #475569; line-height: 1.7; font-size: 15px; }
        .highlight { background: #f0fdf4; border-left: 4px solid #059669; padding: 15px 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
        .highlight p { margin: 0; color: #059669; font-size: 14px; }
        .job-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .job-card h3 { margin: 0 0 5px; color: #091C8C; font-size: 16px; }
        .job-card p { margin: 0; color: #64748b; font-size: 14px; }
        .footer { background: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Brighto India</h1>
          <p>Application Received</p>
        </div>
        <div class="content">
          <p class="greeting">Hi ${safeName},</p>
          <p class="message">
            Thank you for applying to Brighto India! We've received your application and our HR team will review it shortly.
          </p>
          <div class="job-card">
            <h3>Position Applied</h3>
            <p>${safeJobTitle}</p>
          </div>
          <div class="highlight">
            <p>We typically respond within 5-7 business days. If your profile matches our requirements, we'll reach out to you for the next steps.</p>
          </div>
          <p class="message">
            Best regards,<br>
            <strong>Brighto India HR Team</strong>
          </p>
        </div>
        <div class="footer">
          <p>Brighto Credit Information Pvt. Ltd.</p>
          <p>This is an automated email, please do not reply directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function jobApplicationAdminTemplate(name: string, email: string, jobTitle: string, department: string) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeJobTitle = escapeHtml(jobTitle)
  const safeDepartment = escapeHtml(department)
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 20px; }
        .content { padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-bottom: 5px; }
        .value { color: #1e293b; font-size: 15px; background: #f8fafc; padding: 12px; border-radius: 8px; word-break: break-word; }
        .highlight { background: #faf5ff; border: 1px solid #ddd6fe; padding: 15px; border-radius: 8px; margin-top: 15px; }
        .highlight p { margin: 0; color: #7c3aed; font-size: 14px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Job Application</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Applicant Name</div>
            <div class="value">${safeName}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${safeEmail}</div>
          </div>
          <div class="field">
            <div class="label">Position</div>
            <div class="value">${safeJobTitle}</div>
          </div>
          <div class="field">
            <div class="label">Department</div>
            <div class="value">${safeDepartment}</div>
          </div>
          <div class="highlight">
            <p>Login to admin panel to view resume and full application details.</p>
          </div>
        </div>
        <div class="footer">
          <p>Brighto India Admin Panel</p>
        </div>
      </div>
    </body>
    </html>
  `
}
