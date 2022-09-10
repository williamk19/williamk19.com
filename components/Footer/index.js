import { Flex, Text, Link, Box, HStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import '../../styles/Footer.module.css';

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  return (
    <footer>
      <Flex fontWeight={900} fontSize={['0.7rem', '0.85rem', '1rem']} flexDirection='column' alignItems={'center'}>
        <Box align={'center'}>
          <Text>
            Made using Next.js and Chakra UI. Hosted on Vercel.
          </Text>
        </Box>
        <Link align={'center'} href='https://github.com/williamk19/williamk19.com/blob/main/LICENSE' isExternal>
          MIT License ©
        </Link>
        <Text align={'center'}>
          {getYear()} William Kurniawan
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;