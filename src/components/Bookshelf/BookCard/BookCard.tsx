import { Book } from "@/generated/prisma";
import Link from "next/link";

import styles from './BookCard.module.css'

export default function BookCard(
  { book }:
  { book: Book }
) {
  return (
  <div className={styles.card}>
    <Link href={`books/${book.id}`}>
      <h1 className={styles.title}>{book.title}</h1>
      <p>{book.description}</p>
    </Link>
    
  </div>
  )
}