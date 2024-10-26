import '@fontsource/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';
import Layout from '../components/layout/Layout';
import NextNProgress from 'nextjs-progressbar';
import { Chakra } from '@/lib/chakra/Chakra';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icon/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/icon/site.webmanifest'></link>
      </Head>
      <Chakra cookies={pageProps.cookies}>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <NextNProgress
            height={4}
            color='#086F83'
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </>
  );
}

export { getServerSideProps } from '@/lib/chakra/Chakra';