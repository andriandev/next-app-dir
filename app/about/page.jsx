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
        Next.js is a React framework that enables several extra features,
        including server-side rendering and generating static websites.
      </p>
      <p>
        React is a JavaScript library that is traditionally used to build web
        applications rendered in the client's browser with JavaScript.
      </p>
      <p>
        Developers recognize several problems with this strategy however, such
        as not catering to users who do not have access to JavaScript or have
        disabled it, potential security issues, significantly extended page
        loading times, and harm to the site's overall search engine
        optimization.
      </p>
      <p>
        Frameworks such as Next.js sidestep these problems by allowing some or
        all of the website to be rendered on the server-side before being sent
        to the client.[9][10] Next.js is one of the most popular frameworks for
        React.
      </p>
    </main>
  );
}
