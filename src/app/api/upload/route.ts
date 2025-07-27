import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/storage/uploadImage";

export async function POST(req: Request) {
  const form = await req.formData()
  const file = form.get('image') as File

  if (!file) return NextResponse.json({error: 'No image provided'}, {status: 400})
  
  const buffer = Buffer.from(await file.arrayBuffer())
  const key = `books/${Date.now()}-${file.name}`

  const url = await uploadImage({
    buffer,
    key,
    contentType: file.type,
  })

  return NextResponse.json({ url })
}