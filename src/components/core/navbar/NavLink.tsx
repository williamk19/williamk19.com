import { useColorMode } from '@/components/ui/color-mode';
import { linkHoverStyles } from '@/styles/styles';
import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink() {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        hideBelow={'md'}
        gap={6}>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/blog'
          _hover={{
            '&:after': {
              width: '100%',
              textDecoration: 'none',
            },
          }}
          css={linkHoverStyles(pathname, '/blog', colorMode!)}>
          Blogs
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/projects'
          _hover={{
            '&:after': {
              width: '100%',
              textDecoration: 'none',
            },
          }}
          css={linkHoverStyles(pathname, '/projects', colorMode!)}>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/message'
          _hover={{
            '&:after': {
              width: '100%',
              textDecoration: 'none',
            },
          }}
          css={linkHoverStyles(pathname, '/message', colorMode!)}>
          Message
        </Link>
      </Flex>
    </>
  );
}
