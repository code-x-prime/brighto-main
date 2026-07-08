import 'dotenv/config'
import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = 'admin@brightoindia.com'
  const password = await bcrypt.hash('admin123', 10)

  const existing = await prisma.admin.findUnique({ where: { email } })
  if (!existing) {
    await prisma.admin.create({
      data: { email, password, name: 'Admin' },
    })
    console.log('Admin created!')
  }

  const count = await prisma.testimonial.count()
  if (count === 0) {
    await prisma.testimonial.createMany({
      data: [
        { name: 'Rajesh Sharma', role: 'CTO', company: 'InfoTech Solutions', content: 'Brighto India delivered exceptional results. Their team understood our requirements perfectly and provided a seamless verification experience from start to finish.', rating: 5, sortOrder: 1 },
        { name: 'Priya Mehta', role: 'Operations Head', company: 'GlobalServ Pvt Ltd', content: 'Professional, reliable, and highly skilled. Brighto has been our trusted partner for background verification for over 3 years now. Highly recommended!', rating: 5, sortOrder: 2 },
        { name: 'Amit Verma', role: 'Founder & CEO', company: 'StartupHub India', content: 'Outstanding service quality. The team went above and beyond to deliver on time. Their RCU support was invaluable for our lending operations.', rating: 5, sortOrder: 3 },
        { name: 'Sunita Kapoor', role: 'VP Engineering', company: 'NexGen Labs', content: 'Brighto India transformed our hiring process. Their document verification and field investigation services are unmatched in the industry.', rating: 4, sortOrder: 4 },
        { name: 'Vikram Singh', role: 'Director', company: 'Pinnacle Financial Corp', content: 'Excellent customer support and attention to detail. Brighto made the entire due diligence process smooth and hassle-free for our NBFC.', rating: 5, sortOrder: 5 },
        { name: 'Neha Gupta', role: 'HR Manager', company: 'TalentFirst Solutions', content: 'We partnered with Brighto for employee background verification. Their accuracy and 48-hour turnaround time is truly impressive.', rating: 5, sortOrder: 6 },
        { name: 'Mohd. Salman', role: 'CEO', company: 'BlueWave Technologies', content: 'Highly professional team. Brighto India consistently delivers quality results in fraud risk assessment. A trusted partner indeed.', rating: 4, sortOrder: 7 },
        { name: 'Anita Desai', role: 'COO', company: 'CloudSync Systems', content: 'Brighto India is a game-changer for NBFC verification needs. Their platform is fast, accurate, and the support team is fantastic.', rating: 5, sortOrder: 8 },
        { name: 'Deepak Joshi', role: 'Branch Manager', company: 'Vertex Industries', content: 'Great experience working with Brighto. Their field investigators are thorough and their reporting is crystal clear. Five stars!', rating: 5, sortOrder: 9 },
        { name: 'Kavita Reddy', role: 'Head of Compliance', company: 'SecureNet Capital', content: 'Brighto India has been instrumental in streamlining our KYC and loan verification process. Their credit appraisal support is top-notch.', rating: 4, sortOrder: 10 },
      ],
    })
    console.log('10 demo testimonials seeded!')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
