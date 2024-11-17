import ProjectsLayout from '@/components/pages/projects/ProjectsLayout';
import pb from '@/lib/pocketbase';
import { Project } from '@/types/project.type';
import { NextSeo } from 'next-seo';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps as chakraGetServerSideProps } from '@/lib/chakra/Chakra';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <NextSeo title='Projects' />
      <main>
        {/* <ProjectsLayout projects={projects} /> */}
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const chakraProps = await chakraGetServerSideProps(context);

  const projects = await pb.collection<Project>('projects').getFullList({
    sort: '-created',
  });

  return {
    props: {
      ...chakraProps.props,
      projects,
    },
  };
}
