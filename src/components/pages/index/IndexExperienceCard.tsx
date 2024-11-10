import { useColorMode } from '@/components/ui/color-mode';
import { Experience } from '@/types/experience.type';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Key } from 'react';

type IndexExperienceCardProps = {
  id: Key;
  experience: Experience;
};

const IndexExperienceCard = ({ id, experience }: IndexExperienceCardProps) => {
  const { colorMode } = useColorMode();

  const dateStart = new Date(experience.started_date);
  const dateEnd = experience.ended_date
    ? new Date(experience.ended_date)
    : 'Present';

  const monthYearStart = `${dateStart.toLocaleString('default', {
    month: 'short',
  })}, ${dateStart.getFullYear()}`;
  const monthYearEnd =
    dateEnd === 'Present'
      ? `Present`
      : `${dateEnd.toLocaleString('default', {
          month: 'short',
        })}, ${dateEnd.getFullYear()}`;

  return (
    <>
      <Box
        border={`3px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.800'}`}
        boxShadow='md'
        borderRadius={'lg'}
        w='100%'
        p={4}
        transition={'transform 0.4s ease-out'}
        css={{
          '&:hover': {
            transform: 'scale(1.025)',
          },
        }}>
        <Flex
          direction={['column', 'row']}
          mb='3'
          alignItems={['start', 'center']}
          justifyContent={'space-between'}>
          <Box>
            <Text
              fontSize='xl'
              fontWeight='bold'>
              {experience.workplace}
            </Text>
            <Text>{experience.position}</Text>
          </Box>
          <Flex
            mt={['2', '0']}
            direction={['row', 'column']}
            gap={['1', '0']}
            fontWeight={['bold', 'bold', 'medium']}
            textAlign={['left', 'right']}
            fontSize={['xs', 'xs', 'sm']}>
            <Text>{`${monthYearStart} - ${monthYearEnd}`}</Text>
            {experience.location && <Box hideBelow={'md'}>|</Box>}
            <Text>{experience?.location}</Text>
          </Flex>
        </Flex>
        {experience.description?.map((desc: string, idx: number) => (
          <Text
            key={idx}
            fontSize='sm'>
            {`◦ ${desc}`}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default IndexExperienceCard;
