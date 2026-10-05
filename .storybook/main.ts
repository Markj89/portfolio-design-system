// .storybook/main.ts
export default {
  stories: [
    "../src/**/*.mdx",
    "../src/documentation/**/*.mdx",
    "../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-links",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
};
