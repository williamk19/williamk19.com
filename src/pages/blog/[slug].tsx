import BlogLayout from '@/components/pages/blogs/BlogLayout';
import pb from '@/lib/pocketbase';
import { Blog } from '@/types/blogs.type';
import { GetServerSidePropsContext, GetStaticPaths } from 'next';
import { NextSeo } from 'next-seo';
import { getServerSideProps as chakraGetServerSideProps } from '@/lib/chakra/Chakra';

type BlogPageProps = {
  blog: Blog;
};

type ParamsType = {
  slug: string;
};

export default function Page({ blog }: BlogPageProps) {
  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.blog_text.split(' ').slice(0, 20).join(' ')}
        canonical={`williamk19.my.id/blog/${blog.slug}`}
        openGraph={{
          title: blog.title,
          description: blog.blog_text.split(' ').slice(0, 20).join(' '),
          type: 'article',
          url: `williamk19.my.id/blog/${blog.slug}`,
          article: {
            publishedTime: blog.published.toString(),
            modifiedTime: blog.updated.toString(),
            authors: ['https://williamk19.my.id'],
            tags: [...blog.tags],
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`,
              width: 1200,
              height: 630,
              alt: `${blog.slug}-picture`,
            },
          ],
        }}
      />
      {/* <BlogLayout blog={blog} /> */}
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { slug } = context.params as ParamsType;
  const chakraProps = await chakraGetServerSideProps(context);

  const blog = await pb
    .collection<Blog>('blogs')
    .getFirstListItem(`slug="${slug}"`);

  return {
    props: {
      ...chakraProps.props,
      blog,
    },
  };
};
