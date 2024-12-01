import { Project } from '@/types/project.type';
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import ProjectsCard from '@/components/core/projectsCard/ProjectsCard';

type IndexProjectsProps = {
  projects: Project[];
};

const IndexProjects = ({ projects }: IndexProjectsProps) => {
  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Heading
          size={['2xl', '2xl', '3xl']}
          fontWeight='black'
          letterSpacing='wide'
          mb={'6'}>
          Recent Projects
        </Heading>
        <Grid
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
                usingImage={false}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default IndexProjects;
