import { Post } from '@/generated/prisma'

import sharedStyles from '../PostCard.module.css'
import styles from './EventCard.module.css'

export default function EventCard
(
  { post }:
  { post: Post }
) {
  return (
    <div className={`${sharedStyles.card} ${styles.card}`}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}