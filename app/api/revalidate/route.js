import { revalidateTag, revalidatePath } from 'next/cache';

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&key=<secret-key>`
// e.g a webhook to `your-website.com/api/revalidate?path=/&key=<secret-key>`
export async function GET(request) {
  try {
    const key = request.nextUrl.searchParams.get('key');
    const path = request.nextUrl.searchParams.get('path');
    const tag = request.nextUrl.searchParams.get('tag');

    if (key !== process.env.NEXT_SECRET_KEY) {
      return Response.json(
        { status: 401, message: 'Invalid token' },
        { status: 401 }
      );
    }

    if (!tag && !path) {
      return Response.json(
        { status: 400, message: 'Missing url param' },
        { status: 400 }
      );
    }

    if (path) {
      revalidatePath(path);
    }

    if (tag) {
      revalidateTag(tag);
    }

    return Response.json(
      { status: 200, message: 'Revalidate success', data: { path, tag } },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { status: 500, message: err?.message },
      { status: 500 }
    );
  }
}
