import { MantineThemeOverride } from '@mantine/core';

export const ThemeObject: MantineThemeOverride = {
  primaryColor: 'dark',
  black: '#15161A',
  white: '#f9f9f9',
  defaultRadius: 'md',
  other: {},
  components: {
    Loader: {
      defaultProps: {
        type: 'bars',
      },
    },
    Button: {
      defaultProps: {
        variant: 'light',
      },
    },
  },
};
