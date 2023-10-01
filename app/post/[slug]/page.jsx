import { notFound } from 'next/navigation';

async function getPostBySlug(slug) {
  try {
    const res = await fetch(`https://api.npoint.io/${slug}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const post = await res.json();

    return post;
  } catch (err) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params?.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post?.title,
    description: post?.content,
    alternates: {
      canonical: `/post/${post?.slug}`,
    },
    openGraph: {
      title: post?.title,
      description: post?.content,
      url: `/post/${post?.slug}`,
      images: post?.image,
      type: 'article',
    },
    twitter: {
      card: post?.image,
    },
  };
}

export default async function DetailPost({ params }) {
  const post = await getPostBySlug(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <img src={post?.image} alt={post?.title} width={400} height={250} />
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
