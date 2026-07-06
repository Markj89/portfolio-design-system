import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MJIcons from "../MJIcons";
import * as MuiIcons from '@mui/icons-material';

const meta: Meta<typeof MJIcons> = {
  title: "Atoms/MJIcons/Overview",
  component: MJIcons,
  argTypes: {
    iconName: {
      control: "select",
      options: ["Location", "Close", "Home"],
      description: "String names of each MUI Icon"
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'],
    },
    fontSize: {
      control: 'select',
      options: ['inherit', 'small', 'medium', 'large'],
    },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MJIcons>;

export default meta;
type Story = StoryObj<typeof MJIcons>;

export const LocationIcon: Story = {
  args: {
    iconName: "AddLocation",
    color: "primary",
    fontSize: "medium"
  }
};
export const CloseIcon: Story = {
  args: {
    iconName: "Close",
    color: "inherit",
    fontSize: "medium"
  }
};

export const HomeIcon: Story = {
  args: {
    iconName: "Home",
    color: "primary",
    fontSize: "medium"
  }
};