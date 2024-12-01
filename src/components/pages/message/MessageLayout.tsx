import { Flex, Heading, Text } from '@chakra-ui/react';
import MessageForm from './MessageForm';

export default function MessageLayout() {
  return (
    <>
      <Flex
        direction='column'
        gap={'2'}
        paddingX={['1', '2', '16']}
        paddingY='16'>
        <Flex
          mb='2'
          direction='column'
          alignItems='center'>
          <Heading
            mb='2'
            size={['2xl', '2xl', '3xl']}>
            Message Me
          </Heading>
          <Text>Drop some message to williamk19&apos;s email</Text>
        </Flex>
        <MessageForm />
      </Flex>
    </>
  );
}
