import { createSystem, defaultConfig } from '@chakra-ui/react';
import '@fontsource/figtree';

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});

export default theme;
