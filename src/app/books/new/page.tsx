'use client';

import { useRouter } from 'next/navigation';

export default function NewBookPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch('/api/books', {
      method: 'POST',
      body: formData,
    });

    router.push('/books');
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h1>Add Book</h1>

      <label>
        Title:
        <input type="text" name="title" />
      </label>

      <label>
        Description:
        <textarea name="description" />
      </label>

      <label>
        Publish Date:
        <input type="date" name="publishDate" />
      </label>

      <label>
        <input type="checkbox" name="completed" />
        Completed
      </label>

      <label>
        Book Cover:
        <input type="file" name="image" />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
