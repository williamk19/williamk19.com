import { useColorMode } from '@/components/ui/color-mode';
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
          position={'relative'}
					_hover={{
						textDecoration: 'none',
						'&:after': {
							width: '100%',
						},
					}}
					_after={{
						position: 'absolute',
						bottom: '0',
						left: '0%',
						height: '2px',
						width: pathname === '/blog' ? '100%' : '0%',
						backgroundColor: 'navLinkUnderline',
						display: 'block',
						content: '""',
						transition: 'width 0.3s, background-color 0.5s ease-out',
					}}>
          Blogs
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/projects'
          position={'relative'}
					_hover={{
						textDecoration: 'none',
						'&:after': {
							width: '100%',
						},
					}}
					_after={{
						position: 'absolute',
						bottom: '0',
						left: '0%',
						height: '2px',
						width: pathname === '/projects' ? '100%' : '0%',
						backgroundColor: 'navLinkUnderline',
						display: 'block',
						content: '""',
						transition: 'width 0.3s, background-color 0.5s ease-out',
					}}>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/message'
          position={'relative'}
					_hover={{
						textDecoration: 'none',
						'&:after': {
							width: '100%',
						},
					}}
					_after={{
						position: 'absolute',
						bottom: '0',
						left: '0%',
						height: '2px',
						width: pathname === '/message' ? '100%' : '0%',
						backgroundColor: 'navLinkUnderline',
						display: 'block',
						content: '""',
						transition: 'width 0.3s, background-color 0.5s ease-out',
					}}>
          Message
        </Link>
      </Flex>
    </>
  );
}
