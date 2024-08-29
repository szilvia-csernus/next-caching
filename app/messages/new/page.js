import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);
    // revalidatePath('/messages', 'layout'); // with the 'layout' setting, it will revalidate all the nested pages
    // revalidatePath('/', 'layout'); // this setting would revalidate all pages that are using the layout
    // revalidateTag('my-tag-name'); // the tags are used in the fetch requests body's next object like { next: {tags: ['my-tag-name']} }
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
