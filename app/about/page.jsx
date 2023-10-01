import { siteBaseUrl } from '@/apps/config/setting';

export async function generateMetadata() {
  return {
    title: 'About',
    description: 'About app dir',
    alternates: {
      canonical: '/about',
    },
    openGraph: {
      title: 'About',
      description: 'About app dir',
      url: '/about',
      images: '/favicon.ico',
      type: 'website',
    },
    twitter: {
      card: `${siteBaseUrl}/favicon.ico`,
    },
  };
}

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        ducimus inventore. Beatae nostrum cumque laborum architecto molestias,
        id aspernatur sunt, ad quae ab eum? Et, accusantium accusamus.
        Consectetur enim ab beatae inventore.
      </p>
    </main>
  );
}
