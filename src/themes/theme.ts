import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import '@fontsource/figtree';

const customConfig = defineConfig({
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
				backgroundDark: { value: '#212830' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: { _light: 'white', _dark: "{colors.backgroundDark}" },
        },
        text: {
          value: { _light: 'gray.900', _dark: 'white' },
        },
        muted: {
          value: { _light: 'gray.600', _dark: 'gray.400' },
        },
        border: {
          value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" },
        },
				borderActive: {
					value: { _light: "{colors.gray.500}", _dark: "{colors.gray.500}" },
				},
        cardBg: {
          value: { _light: 'white', _dark: "{colors.brand.900}" },
        },
        navBg: {
          value: { 
            _light: 'rgba(218, 218, 218, 0.808)', 
            _dark: 'rgba(42, 52, 65, 0.808)' 
          },
        },
				buttonBg: {
					value: { _light: '{colors.gray.700}', _dark: '{colors.gray.300}' },
				},
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
