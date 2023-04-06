import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

export default function NavMenu() {
  return (
    <>
      <Show below='md'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
            <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
}
