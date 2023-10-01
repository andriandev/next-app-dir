'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navLink from '@/apps/config/nav-link';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {navLink.map((item, i) => (
          <li key={i}>
            <Link
              href={item?.slug}
              className={`${pathname === item?.slug ? 'active' : ''}`}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
