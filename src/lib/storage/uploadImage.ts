import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const s3 = new S3Client({
    region: 'us-east-1',
    endpoint: process.env.DO_SPACES_ENDPOINT,
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY!,
      secretAccessKey: process.env.DO_SPACES_SECRET!,
    },
  })

export async function uploadImage({
  buffer,
  key,
  contentType,
}: {
  buffer: Buffer;
  key: string;
  contentType: string;
}) {
  const command = new PutObjectCommand({
    Bucket: process.env.DO_SPACES_BUCKET!,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    ACL: 'public-read',
  })

  await s3.send(command)
  
  return `https://${process.env.DO_SPACES_BUCKET}.sfo3.cdn.digitaloceanspaces.com/${key}`;
}