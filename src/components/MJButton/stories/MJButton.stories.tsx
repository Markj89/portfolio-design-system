import React, { ComponentProps } from "react";
import { Meta, StoryObj } from '@storybook/react';
import { MJButton } from "../MJButton";


export default {
    title: 'Atoms/MJButton',
    component: MJButton,
    parameters: { layout: 'fullscreen' },
    args: {
        children: "This is a button",
    }
} as Meta<typeof MJButton>;

const Template: StoryObj<typeof MJButton> = (args) => <MJButton {...args} />;
export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained'
}

export const Outlined = Template.bind({});

Outlined.args = {
    variant: 'outlined',
};