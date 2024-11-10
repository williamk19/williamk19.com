import { Blog } from '@/types/blogs.type';
import NextLink from 'next/link';
import {
  Box,
  Button,
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
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <>
      <Card
        mb={2}
        bg={'transparent'}
        border={`3px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.800'}`}
        borderRadius={'lg'}
        boxShadow='md'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Box
          height={{ base: '28vw', sm: 'unset' }}
          width={{ base: '100%', sm: '100%' }}
          maxWidth={{ base: 'unset', sm: '200px' }}
          position={'relative'}>
          <Image
            style={{
              objectFit: 'cover',
            }}
            fill
            sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
            src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`}
            alt={`${blog.slug}-heading-image`}
          />
        </Box>
        <Stack>
          <CardBody>
            <Heading size='md'>{blog.title}</Heading>
            <Text py='1'>{getPublishedDate(blog.published)}</Text>
            <Text py='2'>{getPreviewText(blog.blog_text)}</Text>
          </CardBody>
          <CardFooter pt={0}>
            <Button
              as={NextLink}
              href={`blog/${blog.slug}`}
              variant='link'
              colorScheme='blue'>
              Read More
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
