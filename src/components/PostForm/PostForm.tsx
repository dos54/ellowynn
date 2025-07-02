'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './PostForm.module.css'

type PostType = 'blog' | 'news' | 'event';

export default function PostForm({
  type,
  redirect,
}: {
  type: PostType,
  redirect: string,
}) {
  const router = useRouter()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState('')
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        title,
        content,
        publishDate,
        eventStart,
        eventEnd,
        eventLocation,
      }),
    });

    console.log('status:', res.status)

    if (res.ok) {
      console.log('redirecting')
      router.push(redirect)
    } else {
      // error handling to be added
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      <label className={styles.label}>
      Title
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      </label>

      <label className={styles.label}>
      Content
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      </label>

      <label className={styles.label}>
        Publish now
        <input type="checkbox"
          defaultChecked

         />
      </label>

      <label className={styles.label}>
      Publish Date
      <input type="date"
        value={publishDate}
        onChange={e => setPublishDate(e.target.value)}
        className='block w-200 border p-2'
      />
      </label>

      {type === 'event' && (
        <>
          <input
            type="datetime-local"
            value={eventStart}
            onChange={e => setEventStart(e.target.value)}
            className="block w-full border p-2"
            placeholder="Event Start"
          />

          <input
            type="datetime-local"
            value={eventEnd}
            onChange={e => setEventEnd(e.target.value)}
            className="block w-full border p-2"
            placeholder="Event End"
          />

          <input
            type="text"
            placeholder="Location"
            value={eventLocation}
            onChange={e => setEventLocation(e.target.value)}
            className="block w-full border p-2"
          />
        </>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
}
