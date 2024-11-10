import { createSystem, defaultConfig } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/system';
import { mode } from '@chakra-ui/theme-tools';
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
  // styles: {
  //   global: (props: StyleFunctionProps) => ({
  //     body: {
  //       bg: mode('white', 'gray.800')(props),
  //       color: mode('black', 'white')(props),
  //       fontFamily: 'Figtree',
  //     },
  //   }),
  // },
});

export default theme;
