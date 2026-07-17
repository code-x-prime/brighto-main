import { z } from 'zod'

const sanitize = (s: string) => s.trim()

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100).transform(sanitize),
  email: z.string().email('Invalid email address').max(255).transform(sanitize),
  phone: z.string().max(20).optional().default('').transform(sanitize),
  subject: z.string().min(1, 'Subject is required').max(200).transform(sanitize),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000).transform(sanitize),
  consent: z.string().refine((val) => val === 'true', {
    message: 'You must consent to the privacy policy to submit this form',
  }),
  website: z.string().max(0, 'Bot detected').optional().default(''),
})

export const jobApplicationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100).transform(sanitize),
  email: z.string().email('Invalid email address').max(255).transform(sanitize),
  phone: z.string().min(1, 'Phone is required').max(20).transform(sanitize),
  message: z.string().max(5000).optional().default('').transform(sanitize),
  jobId: z.string().min(1, 'Job ID is required'),
  consent: z.string().refine((val) => val === 'true', {
    message: 'You must consent to the privacy policy to submit this form',
  }),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type JobApplicationData = z.infer<typeof jobApplicationSchema>
