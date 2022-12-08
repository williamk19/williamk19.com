import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { useTimer } from '../hooks/timer';
import { Flex, Box, Spacer } from '@chakra-ui/react';

const Timer = dynamic(
  () => import('../components/Timer'),
  { ssr: false }
);

export default function Countdown() {
  let [days, hours, minutes, seconds] = useTimer('Mar 25, 2023 14:20:00');

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - williamk19</title>
      </Head>
      <Navbar />
      <Flex
        h='100vh'
        p='2rem'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Spacer />
        <Box>
          <Timer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </Box>
        <Spacer />
        <Box>
          <Footer />
        </Box>
      </Flex>
    </div>
  );
}
