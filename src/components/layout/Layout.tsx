import { Container, Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import { ReactNode } from 'react';
import Footer from './Footer';

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Box bg="bg" color="text" minH="100vh" transition='0.5s ease-out'>
        <Navbar />
        <Container
          maxWidth={'breakpoint-md'}
          px={[6, 6, 0]}>
          {children}
          <Footer />
        </Container>
      </Box>
    </>
  );
}
