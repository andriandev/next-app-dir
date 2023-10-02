import { notFound } from 'next/navigation';

// Generate static page on demand request
export function generateStaticParams() {
  return [];
}

async function getPostBySlug(id) {
  const res = await fetch(
    `https://my-json-server.typicode.com/harapanbangsa2023/json-server/posts/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const post = await res.json();

  return post;
}

// Generate metadata seo in head tag
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params?.id);

  if (!post) {
    notFound();
  }

  return {
    title: post?.title,
    description: post?.content,
    alternates: {
      canonical: `/post/${post?.id}`,
    },
    openGraph: {
      title: post?.title,
      description: post?.content,
      url: `/post/${post?.id}`,
      images: post?.image,
      type: 'article',
    },
  };
}

export default async function DetailPost({ params }) {
  const post = await getPostBySlug(params?.id);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <img
        src={post?.image}
        className="img-fluid"
        alt={post?.title}
        width={500}
      />
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
