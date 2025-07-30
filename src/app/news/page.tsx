import PostList from "@/components/PostList/PostList";

export default function NewsPage() {
  return (
    <>
    <div>
      <h1>Here&apos;s some news</h1>
      <PostList postType="news" />
    </div>
    </>
  )
}