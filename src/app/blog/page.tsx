import PostList from "@/components/PostList/PostList"

export default async function BlogPage() {


  return (
    <div>
      <h1>Blog</h1>
      <PostList postType="blog" />
    </div>
  )
}