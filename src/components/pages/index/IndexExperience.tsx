import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import IndexExperienceCard from './IndexExperienceCard';
import { Experience } from '@/types/experience.type';

type IndexExperienceProps = {
  experiences: Experience[];
};

const IndexExperience = ({ experiences }: IndexExperienceProps) => {
  const compareDate = (a: Experience, b: Experience) => {
    if (a.ended_date && b.ended_date) {
      if (a.ended_date > b.ended_date) {
        return 1;
      } else {
        return -1;
      }
    } else if (!a.ended_date || !b.ended_date) {
      if (a.started_date < b.started_date) {
        return 1;
      } else {
        return -1;
      }
    }

    return 0;
  };

  const workExperience = experiences
    .filter((exp: any) => exp.type === 'work')
    .sort(compareDate);

  const orgExperience = experiences
    .filter((exp: any) => exp.type === 'organization')
    .sort(compareDate);

  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Heading
          size={['2xl', '2xl', '3xl']}
          mb={'4'}>
          Experience
        </Heading>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          mb={'3'}>
          Working Experience
        </Text>
        <Flex
          direction='column'
          px={[0, 0, 2]}
          gap='5'>
          {workExperience.map((we: Experience) => (
            <IndexExperienceCard
              key={we.id}
              id={we.id}
              experience={we}
            />
          ))}
        </Flex>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          mt={'6'}
          mb={'3'}>
          Organizational
        </Text>
        <Flex
          direction='column'
          px={[0, 0, 2]}
          gap='5'>
          {orgExperience.map((oe: Experience) => (
            <IndexExperienceCard
              key={oe.id}
              id={oe.id}
              experience={oe}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default IndexExperience;
