import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MJIcons from "../MJIcons";
import { AddLocation, Close } from "@mui/icons-material";

export default {
  title: "Atoms/MJIcons",
  component: MJIcons,
  parameters: { layout: "fullscreen" },
  args: {
    size: "small",
    children: [<AddLocation />, <Close />]
  },
  size: {
    description: 'Size of the component, `"small"`  `"medium"`  `"large"` ',
  },
} as Meta<typeof MJIcons>;

const Template: StoryObj<typeof MJIcons> = (args) => <MJIcons {...args} />;

export const Location = Template.bind({});
