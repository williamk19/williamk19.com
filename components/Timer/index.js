import { Flex, Box, Text } from '@chakra-ui/react';

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <Box>
      <Flex
        align='center'
        fontWeight={600}
        fontSize={['1.1rem', '1.25rem', '1.75rem']}
        gap={['0.5rem', '0.75rem', '1rem']}>
        <Box justifyContent='center' w={['2rem', '3rem', '4rem']} display={'flex'}>
          <Text>
            {days}
          </Text>

        </Box>
        <Text>
          :
        </Text>
        <Box justifyContent='center' w={['2rem', '3rem', '4rem']} display={'flex'}>
          <Text>
            {hours}
          </Text>
        </Box>
        <Text>
          :
        </Text>
        <Box justifyContent='center' w={['2rem', '3rem', '4rem']} display={'flex'}>
          <Text>
            {minutes}
          </Text>
        </Box>
        <Text>
          :
        </Text>
        <Box justifyContent='center' w={['2rem', '3rem', '4rem']} display={'flex'}>
          <Text>
            {seconds}
          </Text>
        </Box>
      </Flex>
      <Flex
        align='center'
        fontWeight={600}
        fontSize={['0.45rem', '0.7rem', '0.9rem']}
        gap={['1.2rem', '1.75rem', '2.4rem']}>
        <Text w={['2rem', '3rem', '4rem']} align={'center'}>
          Days
        </Text>
        <Text w={['2rem', '3rem', '4rem']} align={'center'}>
          Hours
        </Text>
        <Text w={['2rem', '3rem', '4rem']} align={'center'}>
          Minutes
        </Text>
        <Text w={['2rem', '3rem', '4rem']} align={'center'}>
          Seconds
        </Text>
      </Flex>
    </Box>
  );
};

export default Timer;