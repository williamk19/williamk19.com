import { createSystem, defaultConfig } from '@chakra-ui/react';
import '@fontsource/figtree';

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        brand: {
          50: { value: '#e6f7f9' },
          100: { value: '#cceff3' },
          200: { value: '#99dfe7' },
          300: { value: '#66cfdb' },
          400: { value: '#33bfcf' },
          500: { value: '#086F83' },
          600: { value: '#065969' },
          700: { value: '#05434f' },
          800: { value: '#032d35' },
          900: { value: '#02171b' },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: { base: 'white', _dark: '#212830' },
        },
        text: {
          value: { base: 'gray.900', _dark: 'white' },
        },
        muted: {
          value: { base: 'gray.600', _dark: 'gray.400' },
        },
        border: {
          value: { base: 'gray.200', _dark: 'gray.700' },
        },
        cardBg: {
          value: { base: 'white', _dark: '#2a3441' },
        },
        navBg: {
          value: { 
            base: 'rgba(218, 218, 218, 0.808)', 
            _dark: 'rgba(42, 52, 65, 0.808)' 
          },
        },
      },
    },
  },
});

export default theme;
