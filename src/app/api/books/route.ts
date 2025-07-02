import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'

export async function GET() {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(books)
}

export async function POST(req: Request) {
  const data = await req.json()

  const book = await prisma.book.create({
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
      publishDate: new Date(data.publishDate),
    }
  })

  return NextResponse.json(book)
}