import { useColorMode } from '@/components/ui/color-mode';
import { Text, Button, Textarea, Box, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [mailtoLink, setMailtoLink] = useState('mailto:mail@williamk19.com');
	const { colorMode } = useColorMode();

  useEffect(() => {
    if (message.length > 0) {
      const newLink = `mailto:mail@williamk19.com?body=${message}`;
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
          borderColor={'border'}
          _hover={{
            borderColor: 'borderActive',
          }}
          _active={{
            borderColor: 'borderActive',
          }}
        />
      </Box>
      <Button
        asChild
        shadow='lg'
        mt='4'
        size={'sm'}
        width={'32'}
        colorScheme='blue'>
        <Link
          href={mailtoLink}
          target='_blank'>
          Send Message
        </Link>
      </Button>
    </>
  );
}
