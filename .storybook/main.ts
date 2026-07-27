// .storybook/main.ts
export default {
  stories: ["../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
    addons: [
      "@storybook/addon-docs",
      "@storybool/addon-themes",
      "@storybook/addon-links",
      "@storybook/preset-scss"
    ],
    core: {
      disableTelemetry: true,
    },
    typescript: {
      check: false,
      checkOptions: {},
    },
  },
};
