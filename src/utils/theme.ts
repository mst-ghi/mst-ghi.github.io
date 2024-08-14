import { MantineThemeOverride } from '@mantine/core';

const fontFamily = 'Lato, Arial, Helvetica, sans-serif';

export const ThemeObject: MantineThemeOverride = {
  fontFamily,
  primaryColor: 'dark',
  black: '#15161A',
  white: '#f9f9f9',
  defaultRadius: 'md',
  headings: {
    fontFamily,
  },
  other: {},
  components: {
    Button: {
      defaultProps: {
        variant: 'light',
      },
    },
  },
};
