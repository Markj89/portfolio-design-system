/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/components/**/stories/*.mdx", "../src/components/**/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  }
};
export default config;
