import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/storage/uploadImage";
import { prisma } from '@/lib/prisma'
import { cp } from "fs";

export async function GET() {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(books)
}

export async function POST(req: Request) {
  const form = await req.formData()

  const title = form.get('title')?.toString()
  const description = form.get('description')?.toString()
  const publishDate = form.get('publishDate')?.toString()
  const completed = form.get('completed') === 'on'
  const file = form.get('image') as File | null

  if (!title || !description || !publishDate || !file) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const key = `books/${Date.now()}-${file.name}`
  const coverImageUrl = await uploadImage({
    buffer,
    key,
    contentType: file.type
  })
  



  const book = await prisma.book.create({
    data: {
      title,
      description,
      publishDate: new Date(publishDate),
      completed,
      coverImageUrl,
    }
  })

  return NextResponse.json({success: true})
}