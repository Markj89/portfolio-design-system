/** @type { import('@storybook/react').Preview } */
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './../src/components/theme';

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    dependecies: {
      withStoriesOnly: true,
      hideEmpty: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
