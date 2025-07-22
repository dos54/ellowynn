import PostList from "@/components/PostList/PostList";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function NewsPage() {
  return (
    <>
    <div>
      <h1>Here's some news</h1>
      <PostList postType="news" />
    </div>
    </>
  )
}