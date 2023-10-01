import '@/apps/styles/global.css';
import { Quicksand } from 'next/font/google';
import Header from '@/apps/components/layout/header';
import Footer from '@/apps/components/layout/footer';
import {
  siteTitle,
  siteDesc,
  siteBaseUrl,
  siteIndex,
  siteIcon,
  siteGoogleVeriv,
} from '@/apps/config/setting';

const customFonts = Quicksand({ subsets: ['latin'] });

export async function generateMetadata() {
  return {
    title: {
      default: siteTitle,
    },
    description: siteDesc,
    metadataBase: siteBaseUrl,
    alternates: {
      canonical: '/',
    },
    robots: {
      index: siteIndex,
      follow: siteIndex,
    },
    icons: {
      icon: siteIcon,
    },
    verification: {
      google: siteGoogleVeriv,
    },
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      url: '/',
      images: siteIcon,
      type: 'website',
    },
    twitter: {
      card: siteBaseUrl + siteIcon,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={customFonts.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
