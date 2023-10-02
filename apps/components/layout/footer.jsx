import { siteTitle } from '@/apps/config/setting';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright {year} {siteTitle}
      </p>
    </footer>
  );
}
