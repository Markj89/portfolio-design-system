// .storybook/main.ts
export default {
  stories: ["../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
    addons: [
      "@storybook/addon-docs",
      "@storybool/addon-themes",
      "@storybook/addon-links"
   ],
   typescript: {
    check: false,
    checkOptions: {},
   }
  },
};
