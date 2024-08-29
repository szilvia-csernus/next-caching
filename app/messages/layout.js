import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
  // This fetch function reaches out to the backend API to fetch the messages (async needed for PagesLaayout)
  // const response = await fetch('http://localhost:8080/messages', {
  //   // headers: {
  //   //   'X-ID': 'layout', // this ID will be logged in the backend to observe the cache behaviour
  //   // },
  //   // next: {
  //   //   tags: ['my-tag-name'], // this tag is used by the revalidateTag function
  //   // },
  // });
  // const messages = await response.json();

  // This function fetches the messages directly from the database
  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
