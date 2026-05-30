import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MJButton from "../MJButton";

export default {
  title: "Atoms/MJButton",
  component: MJButton,
  tags: ['autodocs'],
  parameters: { 
    layout: "fullscreen",
    docs: {
      canvas: { sourceState: 'shown' }
    }
   },
  args: {
    children: "Hello World",
    variant: 'primary',
  },
  argTypes: {
    onClick: { action: 'onClick' }, // Define onClick as an action
  },
} as Meta<typeof MJButton>;
type Story = StoryObj<typeof MJButton>;
const Template: StoryObj<typeof MJButton> = (args) => <MJButton {...args} />;

export const Primary: Story = {
  args: {
    variant: 'primary',
    className: 'primary',
    children: "Primary",
  }
}; 

export const Outlined: Story = {
  args: {
    secondary: true,
    children: "Outlined",
    variant: "outlined",

  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  }
};