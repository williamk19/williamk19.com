import { Link, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavMenu from '../core/navbar/NavMenu';
import NavThemeToggle from '../core/navbar/NavThemeToggle';
import NavLink from '../core/navbar/NavLink';
import { useRouter } from 'next/router';
import { useColorMode } from '../ui/color-mode';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { colorMode } = useColorMode();
  const { pathname } = useRouter();
	const [topPosition, setTopPosition] = useState(8);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const initialTop = 8;
      const finalTop = 2;
      const scrollRange = (initialTop - finalTop) * 1;

      if (scrollY <= scrollRange) {
        setTopPosition(initialTop - scrollY / 1);
      } else {
        setTopPosition(finalTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        m={'auto'}
        position={'sticky'}
        top={['0', '0', topPosition]}
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
          bg='navBg'
          css={{
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8.4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
          <Flex
            h='20'
            align='center'
            gap='10'>
            <Link
              as={NextLink}
							color={'text'}
              fontSize='2xl'
              href='/'
              fontWeight='bold'
              lineHeight={`1.5`}
							position={'relative'}
							_after={{
								position: 'absolute',
								bottom: '0',
								left: '0%',
								height: '2px',
								width: pathname === '/' ? '100%' : '0%',
								backgroundColor: colorMode === 'light' ? '#000' : '#fff',
								display: 'block',
								content: '""',
								transition: 'width 0.3s, background-color 0.5s ease-out',
							}}
              _hover={{
                '&:after': {
                  width: '100%',
                  textDecoration: 'none',
                },
              }}>
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
