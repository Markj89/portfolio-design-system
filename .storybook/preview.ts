/** @type { import('@storybook/react-webpack5').Preview } */
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "../src/theme";
import "../src/styles/global.scss";

const withThemeProvider = (Story, context) => {
  return React.createElement(
    EmotionThemeProvider,
    { theme },
    React.createElement(
      ThemeProvider,
      { theme },
      React.createElement(CssBaseline, null),
      React.createElement(Story, context),
    ),
  );
};

export const decorators = [withThemeProvider];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["Welcome", "Atoms", "Molecules", "Organisms", "Templates"],
      },
    },
    dependecies: {
      withStoriesOnly: true,
      hideEmpty: true,
    },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
