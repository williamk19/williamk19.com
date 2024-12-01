import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'williamk19',
  titleTemplate: '%s | williamk19',
  defaultTitle: 'williamk19',
  description: 'William Kurniawan personal portfolio website',
  canonical: 'https://williamk19.com',
  openGraph: {
    type: 'website',
    url: 'https://williamk19.com/',
    siteName: 'William Kurniawan website',
    title: 'williamk19',
    description: 'William Kurniawan personal portfolio website',
  },
  additionalLinkTags: [
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8',
    },
  ],
};

export default defaultSEOConfig;
