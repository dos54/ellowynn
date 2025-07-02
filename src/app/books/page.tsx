
import { Book } from '@/generated/prisma'
import Sidebar from "@/components/Sidebar/Sidebar"
import { prisma } from '@/lib/prisma';

export default async function BooksPage() {
  const books = await prisma.book.findMany({
    orderBy: {title: 'desc'}
  })

  return (
    <>
    <div>
      <h1>Books!</h1>
      {
        books.map((book) => {
          return <p key={book.title}>{book.title}</p>
        })
      }
    </div>
    <Sidebar />
    </>
  );
}