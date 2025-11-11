import { Blog } from '@/types/blogs.type';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import he from 'he';
import { useColorMode } from '@/components/ui/color-mode';

type BlogCardProps = {
  blog: Blog;
};

export default function BlogsCard({ blog }: BlogCardProps) {
  const { colorMode } = useColorMode();

  const getPreviewText = (text: string): string => {
    const firstParagraph =
      text
        .replace(/<[^>]+>/g, '')
        .split(' ')
        .slice(0, 21)
        .join(' ') + ' ...';

    return he.decode(firstParagraph);
  };

  const getPublishedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <>
      <Card.Root
        bg={'transparent'}
        border={`3px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.800'}`}
        borderRadius={'lg'}
        boxShadow='md'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Stack direction={['column', 'row']}>
          <Box
            height={{ base: '28vw', sm: 'unset' }}
            width={{ base: '100%', sm: '40%' }}
            maxWidth={{ base: '100%', sm: '200px' }}
            position={'relative'}>
            <Image
              style={{
                objectFit: 'cover',
              }}
              fill
              src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`}
              alt={`${blog.slug}-heading-image`}
            />
          </Box>
          <Box
						width={{ base: '100%', sm: '60%', md: "80%"}}
					>
            <CardBody>
              <Heading size='md'>{blog.title}</Heading>
              <Text py='1'>{getPublishedDate(blog.published)}</Text>
              <Text py='2'>{getPreviewText(blog.blog_text)}</Text>
            </CardBody>
            <CardFooter pt={0}>
              <Link
                asChild
                variant='plain'>
                <NextLink href={`blog/${blog.slug}`}>Read More</NextLink>
              </Link>
            </CardFooter>
          </Box>
        </Stack>
      </Card.Root>
    </>
  );
}
