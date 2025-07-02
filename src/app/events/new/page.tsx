import PostForm from "@/components/PostForm/PostForm";

export default function NewEventPage() {
  return (
    <div>
      <h1>Create a new event</h1>
      <PostForm type="event" redirect="/events" />
    </div>
  )
}