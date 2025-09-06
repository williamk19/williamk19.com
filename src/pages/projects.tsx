import ProjectsLayout from '@/components/pages/projects/ProjectsLayout';
import pb from '@/lib/pocketbase';
import { Project } from '@/types/project.type';
import { NextSeo } from 'next-seo';
import { GetStaticPropsContext } from 'next';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <NextSeo title='Projects' />
      <main>
        <ProjectsLayout projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const projects = await pb.collection<Project>('projects').getFullList({
      sort: '-created',
    });

    return {
      props: {
        projects,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return {
      props: {
        projects: [],
      },
      revalidate: 60,
    };
  }
}
