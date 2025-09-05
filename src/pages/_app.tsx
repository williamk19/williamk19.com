import '@fontsource/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';
import Layout from '../components/layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { system } from '@/themes/theme';
import { ColorModeProvider } from '@/components/ui/color-mode';

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
          sizes='57x57'
          href='/favicon/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/favicon/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/favicon/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/favicon/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/favicon/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/favicon/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/favicon/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/favicon/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/favicon/manifest.json'
        />
        <meta
          name='msapplication-TileColor'
          content='#ffffff'
        />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
      </Head>
      <ColorModeProvider>
        <ChakraProvider value={system}>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <NextNProgress
              height={4}
              color='#086F83'
              options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ColorModeProvider>
    </>
  );
}
