import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MJTagsInput from "../MJTagsInput";

export default {
  title: "Molecules/MJTags/MJTagsInput",
  component: MJTagsInput,
  parameters: { 
    layout: "fullscreen",
    docs: {
      canvas: { sourceState: 'shown' }
    }
  },
} as Meta<typeof MJTagsInput>;
type Story = StoryObj<typeof MJTagsInput>;

export const Dark: Story = {
  args: {
    darkMode: true
  }
};
export const Light: Story = {
  args: {
    darkMode: false
  }
};