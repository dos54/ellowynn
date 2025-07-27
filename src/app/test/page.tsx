'use client'
import { useState } from 'react';

export default function UploadForm() {
  const [url, setUrl] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" required />
      <button type="submit">Upload</button>
      {url && <p>Image URL: {url}</p>}
    </form>
  );
}
