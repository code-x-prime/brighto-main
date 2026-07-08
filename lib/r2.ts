import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
})

const BUCKET = process.env.R2_BUCKET_NAME || ''

export async function uploadToR2(file: File, key: string): Promise<{ url: string; key: string }> {
  const bytes = await file.arrayBuffer()

  await r2.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: Buffer.from(bytes),
    ContentType: file.type,
    ContentDisposition: `inline; filename="${file.name}"`,
  }))

  const url = `${process.env.R2_PUBLIC_URL}/${key}`
  return { url, key }
}

export async function deleteFromR2(key: string): Promise<boolean> {
  try {
    await r2.send(new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    }))
    return true
  } catch {
    return false
  }
}

export async function getPresignedUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  })
  return getSignedUrl(r2, command, { expiresIn: 3600 })
}
