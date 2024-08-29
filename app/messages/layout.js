export default async function MessagesLayout({ children }) {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: {
    //   'X-ID': 'layout', // this ID will be logged in the backend to observe the cache behaviour
    // },
    // next: {
    //   tags: ['my-tag-name'], // this tag is used by the revalidateTag function
    // },
  });
  const messages = await response.json();
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
