import Messages from '@/components/messages';

import { unstable_noStore } from 'next/cache'; // not yet ready for production

// This is a reserved constant keyword in Next.js, it will be used for the fetch requests.
// With this, we don't need to set this value in every fetch request.
// export const revalidate = 5; // seconds

// This is another reserved constant keyword in Next.js, used for setting the cache policy.
// export const dynamic = 'auto'; // default
export const dynamic = 'force-dynamic'; // same as setting cache: 'no-store', i.e. don't cache this request
// export const dynamic = 'force-static'; // it will cache the request and serve it from the cache only, never revalidate
// All these constants are used throughout the file.

export default async function MessagesPage() {
  unstable_noStore(); // component-specific setting, behaviour as dynamic = 'force-dynamic'
  const response = await fetch('http://localhost:8080/messages', {
    // These are request-specific settings, they will override the component-specific settings
    // next: {
    //   revalidate: 5 // seconds
    // },
    // cache: 'no-store' // this is telling nextjs not to cache this request
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
