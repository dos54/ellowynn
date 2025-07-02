'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBookPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [publishDate, setPublishDate] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        completed,
        publishDate
      })
    });

    router.push('/books');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Book</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="block border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="block border p-2 w-full mb-2"
      />
      <input
        type="date"
        value={publishDate}
        onChange={e => setPublishDate(e.target.value)}
        className="block border p-2 w-full mb-2"
      />
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Completed
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
}
