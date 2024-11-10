import { IconButton, Show, Link, Container } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { TfiBriefcase } from 'react-icons/tfi';
import { SlDocs } from 'react-icons/sl';
import { BiMessageDetail } from 'react-icons/bi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { linkMenuStyles } from '@/styles/styles';
import { useColorMode } from '@/components/ui/color-mode';
import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from '@/components/ui/menu';

export default function NavMenu() {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Container hideFrom={'md'}>
      <MenuRoot>
        <IconButton
          as={MenuTrigger}
          aria-label='page-options'
          variant={'outline'}>
          <HamburgerIcon />
        </IconButton>
        <MenuContent>
          <MenuItem
            icon={<SlDocs />}
            css={linkMenuStyles(pathname, '/blog', colorMode)}
            value=''>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/blog'>
              Blogs
            </Link>
          </MenuItem>
          <MenuItem value='new-file-a'>
            New File... <MenuItemCommand>⌘N</MenuItemCommand>
          </MenuItem>
          <MenuItem value='new-win-a'>
            New Window <MenuItemCommand>⌘⇧N</MenuItemCommand>
          </MenuItem>
          <MenuItem value='open-file-a'>
            Open File... <MenuItemCommand>⌘O</MenuItemCommand>
          </MenuItem>
          <MenuItem value='export-a'>
            Export <MenuItemCommand>⌘S</MenuItemCommand>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Container>
  );
}
