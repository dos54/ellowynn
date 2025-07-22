import { Post } from '@/generated/prisma'

import sharedStyles from '../PostCard.module.css'
import styles from './EventCard.module.css'
import Link from 'next/link'

export default function EventCard
(
  { post }:
  { post: Post }
) {
  return (
    <div className={`${sharedStyles.card} ${styles.card}`}>
      <Link href={`/events/${post.slug}`}>
        <h1 className={sharedStyles.title}>{post.title}</h1>
      </Link>
      <p>{post.content}</p>
    </div>
  )
}