import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@brightoindia.com'
  const password = await bcrypt.hash('admin123', 10)

  const existing = await prisma.admin.findUnique({ where: { email } })
  if (existing) {
    console.log('Admin already exists')
    return
  }

  await prisma.admin.create({
    data: { email, password, name: 'Admin' },
  })

  console.log('Admin created successfully!')
  console.log('Email: admin@brightoindia.com')
  console.log('Password: admin123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
