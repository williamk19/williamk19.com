import { Box, Container, Heading, Text, Card } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

export default function TestTheme() {
  return (
    <Container maxW="md" py={8}>
      <Box mb={4}>
        <ColorModeButton />
      </Box>
      
      <Heading mb={4} color="text">
        Theme Test Page
      </Heading>
      
      <Text mb={4} color="text">
        This is regular text that should be white in dark mode.
      </Text>
      
      <Text mb={4} color="muted">
        This is muted text for testing.
      </Text>
      
      <Card.Root bg="cardBg" p={4} mb={4}>
        <Card.Body>
          <Heading size="md" color="text" mb={2}>
            Card Title
          </Heading>
          <Text color="text">
            This is text inside a card component.
          </Text>
        </Card.Body>
      </Card.Root>
      
      <Box bg="bg" p={4} border="1px solid" borderColor="border">
        <Text color="text">
          This box uses the main background color.
        </Text>
      </Box>
    </Container>
  );
}