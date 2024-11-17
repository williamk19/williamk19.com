import MessageLayout from '@/components/pages/message/MessageLayout';
import { NextSeo } from 'next-seo';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps as chakraGetServerSideProps } from '@/lib/chakra/Chakra';

export default function Message() {
  return (
    <>
      <NextSeo title='Message' />
      {/* <MessageLayout /> */}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const chakraProps = await chakraGetServerSideProps(context);

  return {
    props: {
      ...chakraProps.props,
    },
  };
}
