import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MJButton from "../MJButton";

const meta: Meta<typeof MJButton> = {
  title: "Atoms/MJButton/Overview",
  component: MJButton,
  argTypes: {},
} satisfies Meta<typeof MJButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    variant: "contained",
    label: "Button",
    children: "This a button",
  },
};

export const Outlined: Story = {
  globals: {
    backgrounds: { value: "#333333" }, // Force dark background for this specific story
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "" }],
    },
  },
  args: {
    variant: "outlined",
    label: "Button",
    children: "This a button",
  },
};

export const Disabled: Story = {
  args: {
    secondary: true,
    disabled: true,
    children: "This a disabled button",
  },
};

export const Capitalized: Story = {
  args: {
    secondary: true,
    children: "This a capitalized button",
    capitalize: true,
  },
};
