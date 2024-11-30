import { Box, Flex, Text } from '@chakra-ui/react';
import FooterLink from './FooterLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box
        h='2'
        borderRadius={'full'}
        css={{
          background:
            'linear-gradient(to right, #ef008f 0%, #6ec3f4 25%, #7038ff 50%, #c9c9c9 75%, #ef008f 100%)',
          backgroundSize: '200% 100%',
          animation: 'line-anim 5s linear infinite',
        }}
      />
      <Flex
        pt='12'
        pb={['12', '24', '24']}
        px='5'
        width='full'>
        <Flex
          direction={['column-reverse', 'row']}
          justifyContent='space-between'
          rowGap='10'
          width={'full'}>
          <Box
            textAlign={['center', 'left']}
            w={['full', '3xs', 'lg']}
            fontSize='sm'
            fontWeight='semibold'>
            <Text>Made with Next.js & Chakra UI.</Text>
            <Text>MIT License © {currentYear}</Text>
          </Box>
          <Flex
            w={['full', 'fit-content']}
            textAlign={'left'}
            gap='20'>
            <FooterLink />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
