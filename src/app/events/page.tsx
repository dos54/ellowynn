import PostList from "@/components/PostList/PostList";

export default async function EventsPage() {


  return (
    <>
    <div>
      <h1>Here&apos;s a list of all of the events coming up!</h1>
      <PostList postType="event" />
    </div>
    </>
  )
}