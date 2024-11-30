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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.blog_text.split(' ').slice(0, 20).join(' ')}
        canonical={`${baseUrl}/blog/${blog.slug}`}
        openGraph={{
          title: blog.title,
          description: blog.blog_text.split(' ').slice(0, 20).join(' '),
          type: 'article',
          url: `${baseUrl}/blog/${blog.slug}`,
          article: {
            publishedTime: blog.published.toString(),
            modifiedTime: blog.updated.toString(),
            authors: ['williamk19', 'william kurniawan'],
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
      <BlogLayout blog={blog} />
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
