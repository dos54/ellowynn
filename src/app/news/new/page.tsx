import PostForm from "@/components/WebForm/PostForm/PostForm";

export default function NewNewsForm() {
  return (
    <div>
      <h1>Create a new event</h1>
      <PostForm type="news" redirect="/news" />
    </div>
  )
}