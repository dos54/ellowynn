import { Book } from "@/generated/prisma";
import Link from "next/link";
import Image from "next/image";

import styles from './BookCard.module.css'

export default function BookCard(
  { book }:
  { book: Book }
) {
  return (
  <div className={styles.card}>
    <Link href={`books/${book.id}`}>
      <Image src={book.coverImageUrl} width={100} height={100} alt="" className={styles.bookCover} />
      <h1 className={styles.title}>{book.title}</h1>
      <p>{book.description}</p>
    </Link>
    
  </div>
  )
}