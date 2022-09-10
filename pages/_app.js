import '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/montserrat';
// const config = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

const theme = extendTheme({
  fonts: {
    heading: `'montserrat'`,
    body: `'montserrat'`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Final year software engineering student at Institut Teknologi Telkom Surabaya. Having a good knowledge about Web Development. Currently study about Frontend Engineering with React.js and Next.js, and Backend Development using Laravel." />
      </Head>
      <Container maxW='4xl' color='black'>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
