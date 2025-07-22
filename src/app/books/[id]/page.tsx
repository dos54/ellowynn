import { prisma } from "@/lib/prisma";

export default async function BookPage({
  params
}: {
  params: Promise<{id: string}>
}) {
  const { id } = await params

  const book = await prisma.book.findUnique({
    where: { id: id }
  })

  if (!book) {
    return <div>That book does not exist</div>
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.publishDate.getDate()}</p>
      <p>{book.completed ? '' : 'Coming soon!'}</p>
    </div>
  )
}