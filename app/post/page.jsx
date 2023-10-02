import { notFound } from 'next/navigation';
import Link from '@/apps/components/shared/link';

async function getPost() {
  const res = await fetch(
    `https://my-json-server.typicode.com/harapanbangsa2023/json-server/posts`,
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
export async function generateMetadata() {
  return {
    title: 'All Post',
    description: 'All post list',
    alternates: {
      canonical: '/post',
    },
    openGraph: {
      title: 'All Post',
      description: 'All post list',
      url: '/post',
    },
  };
}

export default async function DetailPost() {
  const postList = await getPost();

  if (!postList) {
    notFound();
  }

  return (
    <main>
      <h1>All Post</h1>
      <div className="post-list">
        {postList.map((post) => (
          <Link href={`/post/${post?.id}`} key={post?.id}>
            <div className="card h-100">
              <img src={post?.image} className="img-fluid" alt={post?.title} />
              <h3>{post?.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
