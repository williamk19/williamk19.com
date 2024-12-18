import BlogsLayout from '@/components/pages/blogs/BlogsLayout';
import pb from '@/lib/pocketbase';
import { Blog } from '@/types/blogs.type';
import { NextSeo } from 'next-seo';

type BlogsProps = {
  blogs: Blog[];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <>
      <NextSeo title='Blogs' />
      <BlogsLayout blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  const blogs = await pb.collection<Blog>('blogs').getFullList({
    sort: '-created',
  });

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
}
