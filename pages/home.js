import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { useTimer } from '../hooks/timer';
import { Flex, Box, Spacer } from '@chakra-ui/react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - williamk19</title>
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
