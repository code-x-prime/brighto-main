import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_EMAIL || 'your-brevo-email@smtp.brevo.com',
    pass: process.env.BREVO_SMTP_KEY || 'your-brevo-smtp-key',
  },
})

interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Brighto India" <${process.env.BREVO_EMAIL || 'noreply@brightoindia.com'}>`,
      to,
      subject,
      html,
    })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export function contactThankYouTemplate(name: string) {
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
        .btn { display: inline-block; background: #091C8C; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Brighto India</h1>
          <p>Trusted Risk & Verification Partner</p>
        </div>
        <div class="content">
          <p class="greeting">Hi ${name},</p>
          <p class="message">
            Thank you for reaching out to us! We've received your message and our team will get back to you within 24 hours.
          </p>
          <div class="highlight">
            <p>Our team typically responds within 24-48 business hours.</p>
          </div>
          <p class="message">
            In the meantime, feel free to explore our services or reach out to us directly at <strong>+91-XXXXXXXXXX</strong>.
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

export function adminNotificationTemplate(name: string, email: string, subject: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 20px; }
        .content { padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; margin-bottom: 5px; }
        .value { color: #1e293b; font-size: 15px; background: #f8fafc; padding: 12px; border-radius: 8px; }
        .message-box { background: #fffbeb; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; margin-top: 10px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 5px 0; }
        .btn { display: inline-block; background: #091C8C; color: white; padding: 10px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
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
