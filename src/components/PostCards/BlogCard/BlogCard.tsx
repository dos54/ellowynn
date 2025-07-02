import { Post } from '@/generated/prisma'

import sharedStyles from '../PostCard.module.css'
import styles from './BlogCard.module.css'

export default function BlogCard
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