import type { Meta, StoryObj } from "@storybook/react";
import MJTypography from "../MJTypography";

const meta: Meta = {
  title: "Atoms/MJTypography/Overview",
  component: MJTypography,
  parameters: { layout: "fullscreen" },
  args: {
    children: "Hello World",
  },
} satisfies Meta<typeof MJTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    tag: "h1",
    variant: "h1",
  }
};

export const H2: Story = {
  args: {
    tag: "h2",
    variant: "h2",
  }
};

export const H3: Story = {
  args: {
    tag: "h3",
    variant: "h3",
  }
};

export const H4: Story = {
  args: {
    tag: "h4",
    variant: "h4",
  }
};

export const Body1: Story = {
  args: {
    tag: "p",
    variant: "body1",
  }
};

export const Body2: Story = {
  args: {
    variant: "body2",
    tag: "span",
  }
};
