import { $Enums } from '@/generated/prisma'
import { prisma } from '@/lib/prisma'
import EventCard from '@/components/PostCards/EventCard/EventCard'
import styles from './PostList.module.css'
import BlogCard from '../PostCards/BlogCard/BlogCard'
import NewsCard from '../PostCards/NewsCard/NewsCard'

export default async function PostList(
  {
    postType,
    limit,
  }:
  {
    postType?: $Enums.PostType,
    limit?: number,
  }
) {
  const posts = await prisma.post.findMany({
    where: {
      ...(postType && {type: postType}),
      publishedAt: { lte: new Date() }
    },
    orderBy: {publishedAt: 'desc'},
    take: limit
  })

  return (

    <div className={styles.postList}>
      {posts.map((post) => {
        switch (post.type) {
          case $Enums.PostType.event:
            return <EventCard post={post} key={post.id} />
          case $Enums.PostType.blog:
            return <BlogCard post={post} key={post.id} />
          case $Enums.PostType.news:
            return <NewsCard post={post} key={post.id} />
          default:
            return <div key={post.id}>{post.title}</div>
        }
      })}
    </div>
  )
}