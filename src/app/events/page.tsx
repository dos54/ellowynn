import PostList from "@/components/PostList/PostList";
import Sidebar from "@/components/Sidebar/Sidebar";

export default async function EventsPage() {


  return (
    <>
    <div>
      <h1>Here's a list of all of the events coming up!</h1>
      <PostList postType="event" />
    </div>
    </>
  )
}