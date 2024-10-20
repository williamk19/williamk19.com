import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { Experience } from '../types/experience.type';
import { Project } from '@/types/project.type';
import IndexProjects from '@/components/pages/index/IndexProjects';
import IndexMessage from '@/components/pages/index/IndexMessage';
import pb from '@/lib/pocketbase';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps as chakraGetServerSideProps } from '@/lib/chakra/Chakra';

type HomeProps = {
  experiences: Experience[];
  projects: Project[];
};

const Home = ({ experiences, projects }: HomeProps) => {
  return (
    <>
      <NextSeo title='Home' />
      <IndexHero />
      <IndexProjects projects={projects} />
      <IndexExperience experiences={experiences} />
      <IndexMessage />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const chakraProps = await chakraGetServerSideProps(context);

  const experiences = await pb
    .collection<Experience>('experiences')
    .getFullList({
      sort: '-created',
    });
  const { items: projects } = await pb
    .collection<Project>('projects')
    .getList(1, 2, {
      sort: '-created',
    });

  return {
    props: {
      ...chakraProps.props,
      experiences,
      projects,
    },
  };
}

export default Home;
