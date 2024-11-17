import MessageLayout from '@/components/pages/message/MessageLayout';
import { NextSeo } from 'next-seo';

export default function Message() {
  return (
    <>
      <NextSeo title='Message' />
      <MessageLayout />
    </>
  );
}
