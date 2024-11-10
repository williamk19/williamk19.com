import { useColorMode } from '@/components/ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export default function NavThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    toggleColorMode();
  };

  return (
    <IconButton
      onClick={handleToggleColorMode}
      aria-label='Toggle Color Mode'
      size='md'>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
