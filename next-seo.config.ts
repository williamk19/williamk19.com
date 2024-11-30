import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'williamk19',
  titleTemplate: '%s | williamk19',
  defaultTitle: 'williamk19',
  description: "William Kurniawan's personal website",
  canonical: 'https://williamk19.com',
  openGraph: {
    url: 'https://williamk19.com',
    title: 'williamk19',
    description:
      "William Kurniawan's personal website, Frontend Web Engineer and Software Engineer",
    siteName: "williamk19 William Kurniawan's personal website",
  },
  additionalLinkTags: [{ rel: 'shortcut icon', href: '/icon/favicon.ico' }],
};

export default defaultSEOConfig;
