import { prisma } from "@/lib/prisma";
import ReadOnlyViewer from "@/components/ReadOnlyViewer/ReadOnlyViewer";

export default async function EventsPostPage({
  params,
}: {
  params: Promise<{slug: string}>
}
) {
  const { slug } = await params

  const post = await prisma.post.findUnique({
    where: { slug: slug }
  })

  if (!post) {
    return <div>Post not found</div>
  }
  
  return (
    <div>
      <h1>{post.title}</h1>
      <ReadOnlyViewer content={JSON.parse(post.content)} />
    </div>
  )
}