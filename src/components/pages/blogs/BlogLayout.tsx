import { Blog } from '@/types/blogs.type';
import { Box, Container, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

type BlogLayoutProps = {
  blog: Blog;
};

export default function BlogLayout({ blog }: BlogLayoutProps) {
  const getPublishedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Flex
          direction={'column'}
          gap={2}>
          <Heading size={['xl', '2xl', '3xl']}>{blog.title}</Heading>
          <Text>{getPublishedDate(blog.published)}</Text>
          <Box
            overflow={'hidden'}
            my={6}
            rounded={'xl'}
            shadow={'xl'}
            height={'48'}
            maxW={{ base: '100%' }}
            position={'relative'}>
            <Image
              style={{
                objectFit: 'cover',
              }}
              placeholder='blur'
              blurDataURL={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`}
              fill
              sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
              src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`}
              alt={`${blog.slug}-img`}
            />
          </Box>
        </Flex>
        <Box
          mt={['4', '6']}
          px={['2', '4']}>
          <ReactMarkdown
            components={{
              hr: ({ node, ...props }) => (
                <Separator
                  my={5}
                  orientation='horizontal'
                  css={{
                    border: '2px solid',
                  }}
                />
              ),
              h4: ({ node, ...props }) => (
                <Heading
                  size={'md'}
                  mt={6}
                  mb={2}
                  {...props}
                />
              ),
              ul: ({ node, children, ...props }) => (
                <Box as="ul" pl={6} listStyleType="disc">
                  {children}
                </Box>
              ),
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}>
            {blog.blog_text}
          </ReactMarkdown>
        </Box>
        <Box
          mt={8}
          px={['2', '4']}>
          <Heading size={'md'}>Related Tags</Heading>
          <Flex
            wrap={'wrap'}
            mt={2}
            gap={3}>
            {blog.tags.map((tag, idx) => (
              <Text key={idx}>#{tag}</Text>
            ))}
          </Flex>
        </Box>
      </Container>
    </>
  );
}
