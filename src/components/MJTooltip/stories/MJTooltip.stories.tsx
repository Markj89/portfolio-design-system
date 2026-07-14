import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MJTooltip from "../MJTooltip";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TOOLTIP_PLACEMENT } from "../MJTooltip.types";

export default {
    title: "Atoms/MJTooltip/Overview",
    component: MJTooltip,
} as Meta<typeof MJTooltip>;

type Story = StoryObj<typeof MJTooltip>;

export const Default: Story = {
    render: (args) => (<MJTooltip {...args} />),
    args: {
        title: "Delete",
        children: (
            <IconButton aria-title="delete">
                <DeleteIcon />
            </IconButton>
        ),
        position: TOOLTIP_PLACEMENT.auto,
    },
};

export const Arrow: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Delete",
        children: (
            <IconButton aria-title="delete">
                <DeleteIcon />
            </IconButton>
        ),
        position: TOOLTIP_PLACEMENT.auto,
        arrow: true
    },
};

export const Top: Story = {
    render: (args) => <MJTooltip {...args} />,
        args: {
        title: "Top",
        children: (
            <p>Top</p>
        ),
        position: TOOLTIP_PLACEMENT.top,
        arrow: true
    }
};

export const Bottom: Story = {
    render: (args) => <MJTooltip {...args} />,
        args: {
        title: "Bottom",
        children: (
            <p>Bottom</p>
        ),
        position: TOOLTIP_PLACEMENT.bottom,
        arrow: true
    }
};

export const Left: Story = {
    render: (args) => <MJTooltip {...args} />,
        args: {
        title: "Left",
        children: (
            <p>Left</p>
        ),
        position: TOOLTIP_PLACEMENT.left,
        arrow: true
    }
};

export const Right: Story = {
    render: (args) => <MJTooltip {...args} />,
        args: {
        title: "Right",
        children: (
            <p>Right</p>
        ),
        position: TOOLTIP_PLACEMENT.right,
        arrow: true
    }
};