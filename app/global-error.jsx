'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error?.message);
  }, [error]);

  return (
    <html>
      <body>
        <p>Something went wrong! Please try again later.</p>;
      </body>
    </html>
  );
}
