import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'williamk19',
  titleTemplate: '%s | williamk19',
  defaultTitle: 'williamk19',
  description: 'William Kurniawan personal portfolio website',
  canonical: 'https://williamk19.my.id',
  openGraph: {
    url: 'https://williamk19.my.id',
    title: 'williamk19',
    description: 'William Kurniawan personal portfolio website',
    siteName: 'William Kurniawan personal portfolio website',
  },
  additionalLinkTags: [{ rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
};

export default defaultSEOConfig;
