import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getPost() {
  const res = await fetch(`https://api.npoint.io/35120f653cfdc5070800`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const post = await res.json();

  return post;
}

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
          <Link href={`/post/${post?.slug}`} key={post?.id}>
            <div className="card">
              <img src={post?.image} alt={post?.title} />
              <h3>{post?.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
