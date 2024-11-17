import { Text, Button, Textarea, Box, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [mailtoLink, setMailtoLink] = useState('mailto:mail@williamk19.my.id');

  useEffect(() => {
    if (message.length > 0) {
      const newLink = `mailto:mail@williamk19.my.id?body=${message}`;
      setMailtoLink(newLink);
    }
  }, [message]);

  return (
    <>
      <Box>
        <label>
          <Text
            mt={4}
            mb={2}
            fontSize={'md'}
            fontWeight={'600'}>
            Message
          </Text>
        </label>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          shadow='md'
          placeholder='Hi william 👋, ...'
          size='sm'
          height={'32'}
          borderRadius={'md'}
          resize='none'
          fontSize={'md'}
          fontWeight={'500'}
          variant={'outline'}
          border={'2px solid'}
          borderColor={'gray.500'}
          _hover={{
            borderColor: 'gray.900',
          }}
          _active={{
            borderColor: 'gray.900',
          }}
        />
      </Box>
      <Link
        height={'max-content'}
        width={'max-content'}
        href={mailtoLink}
        target='_blank'>
        <Button
          shadow='lg'
          mt='4'
          size={'sm'}
          colorScheme='blue'>
          Send Message
        </Button>
      </Link>
    </>
  );
}
