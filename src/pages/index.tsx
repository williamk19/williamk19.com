import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { Experience } from '../types/experience.type';
import { FC } from 'react';
import { loadExperience } from '@/lib/loadExperience';
import { loadProjects } from '@/lib/loadProjects';
import { Project } from '@/types/project.type';
import IndexProjects from '@/components/pages/index/IndexProjects';

type HomeProps = {
  experience: Experience[];
  projects: Project[];
};

const Home: FC<HomeProps> = ({ experience, projects }) => {
  return (
    <>
      <NextSeo title='Home' />
      <main>
        <IndexHero />
        <IndexProjects projects={projects} />
        <IndexExperience experience={experience} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const { data: experience } = await loadExperience();
  const { data: projects } = await loadProjects();

  return {
    props: {
      experience,
      projects,
    },
  };
}

export default Home;
