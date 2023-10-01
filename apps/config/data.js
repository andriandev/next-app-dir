const postList = [
  {
    id: 1,
    title: 'Post Kesatu',
    slug: 'post-kesatu',
    image: 'https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2',
    content: 'Post kesatu terbaru cuy.',
  },
  {
    id: 2,
    title: 'Post Kedua',
    slug: 'post-kedua',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    content: 'Post kedua terbaru cuy.',
  },
  {
    id: 3,
    title: 'Post Ketiga',
    slug: 'post-ketiga',
    image: 'https://images.unsplash.com/photo-1606327054536-e37e655d4f4a',
    content: 'Post ketiga terbaru cuy.',
  },
  {
    id: 4,
    title: 'Post Keempat',
    slug: 'post-keempat',
    image: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679',
    content: 'Post keempat terbaru cuy.',
  },
];

export function getPostBySllug(slug) {
  return postList.filter((post) => post.slug == slug);
}
