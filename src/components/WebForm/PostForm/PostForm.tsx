'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';


import styles from '../WebForm.module.css'
import postFormStyle from './PostForm.module.css'


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

  const [publishNow, setPublishNow] = useState(true);

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

      <label className={postFormStyle.contentEditorLabel}>
      Content
      </label>
      <SimpleEditor onChange={setContent} />

      <label className={styles.label}>
        Publish now
        <input type="checkbox"
          checked={publishNow}
          onChange={() => setPublishNow(!publishNow)}
         />
      </label>

      {!publishNow && (
        <label className={styles.label}>
        Publish Date
        <input type="date"
          value={publishDate}
          onChange={e => setPublishDate(e.target.value)}
        />
        </label>
      )}

      {type === 'event' && (
        <>
        <label className={styles.label}>
          Event Start Date
          <input
            type="datetime-local"
            value={eventStart}
            onChange={e => setEventStart(e.target.value)}
            placeholder="Event Start"
          />
        </label>

        <label className={styles.label}>
          Event End Date
          <input
            type="datetime-local"
            value={eventEnd}
            onChange={e => setEventEnd(e.target.value)}
            placeholder="Event End"
          />
        </label>

        <label className={styles.label}>
          Event Location
          <input
            type="text"
            placeholder="Location"
            value={eventLocation}
            onChange={e => setEventLocation(e.target.value)}
          />
        </label>
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
