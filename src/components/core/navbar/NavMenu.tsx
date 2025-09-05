import { IconButton, Link, Box } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';
import { VscBriefcase } from 'react-icons/vsc';
import { SlDocs } from 'react-icons/sl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { linkMenuStyles } from '@/styles/styles';
import { useColorMode } from '@/components/ui/color-mode';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';

export default function NavMenu() {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box hideFrom={'md'}>
      <MenuRoot>
        <IconButton
          padding={'unset'}
          width={'fit-content'}
          as={MenuTrigger}
          aria-label='page-options'
          variant={'outline'}>
          <GiHamburgerMenu />
        </IconButton>
        <MenuContent bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          <MenuItem
            asChild
            css={linkMenuStyles(pathname, '/blog', colorMode!)}
            value='blogs'>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/blog'>
              <SlDocs />
              Blogs
            </Link>
          </MenuItem>
          <MenuItem
            asChild
            css={linkMenuStyles(pathname, '/blog', colorMode!)}
            value='projects'>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/projects'>
              <VscBriefcase />
              Projects
            </Link>
          </MenuItem>
          <MenuItem
            asChild
            css={linkMenuStyles(pathname, '/blog', colorMode!)}
            value='message'>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/message'>
              <MdOutlineMarkUnreadChatAlt />
              Message
            </Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  );
}
