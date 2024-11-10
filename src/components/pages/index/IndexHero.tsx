import { Resume } from '@/types/resume.type';
import { ChatIcon, DownloadIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Tooltip } from '@/components/ui/tooltip';

export default function IndexHero({ resume }: { resume: Resume }) {
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
              fontWeight='black'
              letterSpacing='wide'>
              William Kurniawan
            </Heading>
            <Text
              letterSpacing='wider'
              fontSize={'xl'}
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
            <Button
              width={'32'}
              mt={'5'}
              colorScheme='blue'>
              <Link
                target='_blank'
                href={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${resume.collectionId}/${resume.id}/${resume.document}`}>
                Resume
                <DownloadIcon ml={'2'} />
              </Link>
            </Button>
          </Flex>
          <Flex pr='5'>
            <Avatar
              boxShadow='2xl'
              size='2xl'
              src='/images/profile-pic.png'>
              <Tooltip
                isOpen={isTooltipOpen}
                label='Hello 👋!'
                aria-label='A tooltip'
                placement='left-end'>
                <>d</>
                {/* <AvatarBadge
                  onMouseEnter={() => setIsTooltipOpen(true)}
                  onMouseLeave={() => setIsTooltipOpen(false)}
                  onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                  boxSize='0.7em'
                  border={'2px solid #fff'}
                  bg='gray.700'>
                  <ChatIcon w={'1rem'} />
                </AvatarBadge> */}
              </Tooltip>
            </Avatar>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
