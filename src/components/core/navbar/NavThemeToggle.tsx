'use client';

import { useColorMode } from '@/components/ui/color-mode';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { ClientOnly, IconButton } from '@chakra-ui/react';

export default function NavThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	const handleToggleColorMode = () => {
		toggleColorMode();
	};

	return (
		<ClientOnly>
			<IconButton
				onClick={handleToggleColorMode}
				aria-label='Toggle Color Mode'
				size='md'
				bg='buttonBg'
			>
				{colorMode === 'light' ? <IoMoon /> : <IoSunny />}
			</IconButton>
		</ClientOnly>
	);
}
