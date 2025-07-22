import PostList from "@/components/PostList/PostList"
import { $Enums } from "@/generated/prisma"

export default async function BlogPage() {


  return (
    <div>
      <h1>Blog</h1>
      <PostList postType={$Enums.PostType.blog} />
    </div>
  )
}