import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MJTypography } from "../Typography";

export default {
  title: "Atoms/MJTypography",
  component: MJTypography,
  parameters: { layout: "fullscreen" },
  args: {
    children: "Hello World",
  },
} as Meta<typeof MJTypography>;

const Template: StoryObj<typeof MJTypography> = (args) => (
  <MJTypography {...args} />
);
export const H1 = Template.bind({});
H1.args = {
  tag: "h1",
  variant: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  tag: "h2",
  variant: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  tag: "h3",
  variant: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  tag: "h4",
  variant: "h4",
};

export const BodyOne = Template.bind({});
BodyOne.args = {
  tag: "p",
  variant: "body1",
};

export const BodyTwo = Template.bind({});
BodyTwo.args = {
  variant: "body2",
  tag: "span",
};
