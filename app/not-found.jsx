export async function generateMetadata() {
  return {
    title: '404 Page Not Found',
    description: '404 Page Not Found',
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function NotFound() {
  return (
    <main>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
    </main>
  );
}
