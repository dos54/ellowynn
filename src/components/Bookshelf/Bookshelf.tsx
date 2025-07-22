import { prisma } from "@/lib/prisma";
import BookCard from "@/components/Bookshelf/BookCard/BookCard";

import styles from './Bookshelf.module.css'

export default async function Bookshelf() {
  const books = await prisma.book.findMany({
    orderBy: {title: 'desc'}
  }) 

  return (
    <div className={styles.wrapper}>
      {books.map((book) => {
        return <BookCard key={book.title} book={book} />
      })}
    </div>
  )
}