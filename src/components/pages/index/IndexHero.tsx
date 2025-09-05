import { FaRegFilePdf } from 'react-icons/fa';
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Tooltip } from '@/components/ui/tooltip';
import { RiChat1Line } from 'react-icons/ri';

export default function IndexHero() {
	const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

	return (
		<>
			<Container
				maxW='container.md'
				px={0}
				pt={['14', '14', '32']}
				pb={['10', '10', '16']}>
				<Flex
					gap='10'
					direction={['column-reverse', 'column-reverse', 'row']}>
					<Flex direction={'column'}>
						<Heading
							size={['2xl', '3xl', '4xl']}
							fontWeight='black'
							letterSpacing='wide'>
							William Kurniawan
						</Heading>
						<Text
							letterSpacing='wider'
							fontSize={['md', 'lg', 'xl']}
							fontWeight={'semibold'}>
							Software Engineer 💻 | Frontend
						</Text>
						<Text
							mt={'3'}
							fontSize={['sm', 'sm', 'md']}>
							Recently graduated software engineering student at Institut
							Teknologi Telkom Surabaya. Focusing on Web Development
							Technologies. Currently study about Frontend Engineering with
							React.js and Next.js. Want to learned more about other frontend
							technologies in the future and collaborating on open source
							projects.
						</Text>
						<Link
							target='_blank'
							href={`/api/documents/resume`}>
							<Button
								width={'32'}
								mt={'5'}
								colorPalette={'blue'}
								fontWeight={'semibold'}
								fontSize={'md'}
								gap={'1.5'}>
								<Icon>
									<FaRegFilePdf />
								</Icon>
								Resume
							</Button>
						</Link>
					</Flex>
					<Box
						pr={'5'}
						minWidth={'36'}
						minHeight={'36'}
						maxWidth={'3/12'}
						maxHeight={'3/12'}>
						<Box
							position={'relative'}
							borderRadius={'full'}
							boxShadow={'2xl'}>
							<Image
								src='/images/profile-pic.png'
								alt='William Kurniawan emoji'
								borderRadius='full'
							/>
							<Box
								position={'absolute'}
								bottom={-2}
								right={0}>
								<Tooltip
									open={isTooltipOpen}
									content={`Hi, let's connect 👋`}
									aria-label='A tooltip'
									positioning={{
										placement: 'bottom-end',
									}}>
									<IconButton
										aria-label='chat tooltip'
										onMouseEnter={() => setIsTooltipOpen(true)}
										onMouseLeave={() => setIsTooltipOpen(false)}
										borderRadius={'full'}
										variant='outline'
										size='sm'
										border={'2px solid #fff'}
										bg='gray.700'
										color={'white'}>
										<RiChat1Line fontWeight={'800'} />
									</IconButton>
								</Tooltip>
							</Box>
						</Box>
					</Box>
				</Flex>
			</Container>
		</>
	);
}
