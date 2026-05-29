import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MJTag from "../MJTag";

export default {
    title: "Atoms/MJTags/MJTag",
    component: MJTag,
    parameters: { 
        layout: "fullscreen",
        docs: {
            canvas: { sourceState: 'shown' }
        }
    },
} as Meta<typeof MJTag>;
type Story = StoryObj<typeof MJTag>;

export const TagDark: Story = {
    args: {
        children: "Dark",
        color: "dark"
    }
};

export const TagLight: Story = {
    args: {
        children: "Light",
        color: "light"
    }
};