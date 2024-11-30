import { Project } from '@/types/project.type';
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import ProjectsCard from '../../core/projectsCard/ProjectsCard';

type ProjectsLayoutProps = {
  projects: Project[];
};

const ProjectsLayout = ({ projects }: ProjectsLayoutProps) => {
  return (
    <>
      <Container
        centerContent
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Flex
          mb='2'
          direction='column'
          alignItems='center'>
          <Heading
            mb={'2'}
            size={['xl', '2xl', '3xl']}>
            Projects
          </Heading>
          <Text mb={'6'}>{`Projects i've made so far`}</Text>
        </Flex>
        <Grid
          maxW={['unset', '65%', 'unset']}
          minW={['unset', '345px', 'unset']}
          py={4}
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={'8'}>
          {projects?.map((project) => (
            <GridItem key={project.id}>
              <ProjectsCard
                project={project}
                usingImage={true}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsLayout;
