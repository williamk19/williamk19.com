import { Project } from '@/types/project.type';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { RiGithubFill } from 'react-icons/ri';
import { ImLink } from 'react-icons/im';
import { useColorMode } from '@/components/ui/color-mode';

type ProjectsCardProps = {
  project: Project;
  usingImage: boolean;
};

const ProjectsCard = ({ project, usingImage = true }: ProjectsCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        border={`3px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.800'}`}
        borderRadius={'lg'}
        boxShadow='md'
        overflow={'hidden'}
        transition={'transform 0.4s ease-out'}
        _hover={{
          transform: 'scale(1.045)',
        }}>
        {usingImage && (
          <Box
            height={['40vw', '26vw', '170px']}
            minH={['unset', '152px', 'unset']}
            maxHeight={{ base: 'unset', md: '170px' }}
            width={'full'}
            position={'relative'}>
            <Image
              src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${project.collectionId}/${project.id}/${project.thumbnail}`}
              alt={`${project.title.toLowerCase()}-thumb`}
              priority={true}
              fill
              sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        )}
        <Box
          px={4}
          py={5}>
          <Text
            fontSize='xl'
            fontWeight='bold'
            mb={2}>
            {project.title}
          </Text>
          <Text
            fontSize='sm'
            fontWeight='medium'
            mb={3}>
            {project.description}
          </Text>
          <Flex
            wrap={'wrap'}
            columnGap={3}
            mb={3}>
            {project.tags.map((tag, idx) => (
              <Text
                key={idx}
                fontSize='sm'
                fontWeight='medium'>
                {`#${tag}`}
              </Text>
            ))}
          </Flex>
          <Flex gap={3}>
            {project.github_link && (
              <Link
                aria-label={`link icon to ${project.github_link}`}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                href={project.github_link}
                target='_blank'>
                <RiGithubFill size={'24px'} />
              </Link>
            )}
            {project.url_link && (
              <Link
                aria-label={`link icon to ${project.url_link}`}
                height={'24px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                href={project.url_link}
                target='_blank'>
                <ImLink size={'18px'} />
              </Link>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsCard;
