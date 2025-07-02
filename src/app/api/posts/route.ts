import { NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'
import slugify from "slugify";

export async function POST(req: Request) {
  const data = await req.json()

  const post = await prisma.post.create({
    data: {
      type: data.type,
      title: data.title,
      content: data.content,
      pinned: data.pinned,
      publishedAt: new Date(data.publishDate),
      slug: slugify(data.title)
    }
  })

  return NextResponse.json(post)
}