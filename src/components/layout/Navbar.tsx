import { Link, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavMenu from '../core/navbar/NavMenu';
import NavThemeToggle from '../core/navbar/NavThemeToggle';
import NavLink from '../core/navbar/NavLink';
import { useRouter } from 'next/router';
import { linkHoverStyles } from '@/styles/styles';
import { useColorMode } from '../ui/color-mode';

export default function Navbar() {
  const { colorMode } = useColorMode();
  const { pathname } = useRouter();

  return (
    <>
      <Box
        m={'auto'}
        position={'sticky'}
        mt={[0, 0, '8']}
        top={['0', '0', '2']}
        zIndex={'20'}
        px={['0', '0', '4']}
        maxW={`4xl`}>
        <Flex
          h={'16'}
          align='center'
          justify='space-between'
          px={['4', '4', '10']}
          borderRadius={[0, 0, '8px']}
          transition='all 0.2s ease-out'
          css={
            colorMode === 'dark'
              ? {
                  background: 'rgba(46, 61, 71, 0.808)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(8.4px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }
              : {
                  background: 'rgba(218, 218, 218, 0.808)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(8.4px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }
          }>
          <Flex
            h='20'
            align='center'
            gap='10'>
            <Link
              as={NextLink}
              fontSize='2xl'
              href='/'
              fontWeight='bold'
              lineHeight={`1.5`}
              css={linkHoverStyles(pathname, `/`, colorMode!)}>
              williamk19
            </Link>
            <NavLink />
          </Flex>
          <Flex gap='2'>
            <NavThemeToggle />
            <NavMenu />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
