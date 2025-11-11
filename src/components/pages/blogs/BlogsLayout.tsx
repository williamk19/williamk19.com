import BlogsCard from '@/components/core/blogsCard/BlogsCard';
import { Blog } from '@/types/blogs.type';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

type BlogsLayoutProps = {
  blogs: Blog[];
};

export default function BlogsLayout({ blogs }: BlogsLayoutProps) {
  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Flex
          mb='2'
          direction='column'
          alignItems='center'>
          <Heading
            mb={'2'}
            size={['2xl', '2xl', '3xl']}>
            Blogs
          </Heading>
          <Text mb={'6'}>{`Share my thoughts and ideas`}</Text>
        </Flex>
        <Box
          py={3}
          w='100%'
          color='white'
					spaceY={8}>
          {blogs.map((b) => (
            <BlogsCard
              key={b.id}
              blog={b}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}
