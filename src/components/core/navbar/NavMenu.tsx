import { IconButton, Link, Box } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';
import { VscBriefcase } from 'react-icons/vsc';
import { SlDocs } from 'react-icons/sl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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

	const bgColor = colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200';

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
						css={{
							width: 200,
							background: pathname === '/blog' ? bgColor : 'none',
							transition: 'all .4s ease-in-out',
							textDecoration: 'none',
						}}
						_hover={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
						_active={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
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
						css={{
							width: 200,
							background: pathname === '/projects' ? bgColor : 'none',
							transition: 'all .4s ease-in-out',
							textDecoration: 'none',
						}}
						_hover={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
						_active={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
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
						css={{
							width: 200,
							background: pathname === '/message' ? bgColor : 'none',
							transition: 'all .4s ease-in-out',
							textDecoration: 'none',
						}}
						_hover={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
						_active={{
							textDecoration: 'none',
							background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
						}}
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
