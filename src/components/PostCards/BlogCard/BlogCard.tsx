import { Post } from '@/generated/prisma'

import sharedStyles from '../PostCard.module.css'
import styles from './BlogCard.module.css'
import Link from 'next/link'

export default function BlogCard
(
  { post }:
  { post: Post }
) {
  return (
    <div className={`${sharedStyles.card} ${styles.card}`}>
      <Link href={`/blog/${post.slug}`}>
        <h1 className={sharedStyles.title}>{post.title}</h1>
      </Link>
      <p>{post.content}</p>
    </div>
  )
}