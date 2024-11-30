import { Box, Container, Flex, Text, Button } from '@chakra-ui/react';
import Animation404 from '@/assets/lottie/Animation404.json';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps as chakraGetServerSideProps } from '@/lib/chakra/Chakra';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Custom404() {
  return (
    <>
      <Container height={'60vh'}>
        <Flex
          direction={'column'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={1}>
          <Box
            width={'12rem'}
            mb={4}>
            <Lottie
              animationData={Animation404}
              loop={true}
            />
          </Box>
          <Text
            fontSize={'lg'}
            fontWeight={'600'}
            textAlign={'center'}>
            Looks like the page is not found
          </Text>
          <Button
            variant='link'
            as={NextLink}
            href={'/'}
            textDecor={'underline'}
            colorScheme='blue'>
            Go To Home
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const chakraProps = await chakraGetServerSideProps(context);

  return {
    props: {
      ...chakraProps.props
    },
  };
}