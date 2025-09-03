import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { Experience } from '../types/experience.type';
import { Project } from '@/types/project.type';
import IndexProjects from '@/components/pages/index/IndexProjects';
import IndexMessage from '@/components/pages/index/IndexMessage';
import pb from '@/lib/pocketbase';
import { Resume } from '@/types/resume.type';

type HomeProps = {
  experiences: Experience[];
  projects: Project[];
  resume: Resume;
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

export async function getStaticProps() {
  try {
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
        experiences,
        projects,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        experiences: [],
        projects: [],
      },
      revalidate: 60,
    };
  }
}

export default Home;
