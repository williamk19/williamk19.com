import { useColorMode } from '@/components/ui/color-mode';
import { IoMoon, IoSunny } from 'react-icons/io5';
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
      {colorMode === 'light' ? <IoMoon /> : <IoSunny />}
    </IconButton>
  );
}
