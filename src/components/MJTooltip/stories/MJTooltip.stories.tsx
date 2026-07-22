import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MJTooltip from "../MJTooltip";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import HomeIcon from "@mui/icons-material/Home";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { TOOLTIP_PLACEMENT, TOOLTIP_VARIANTS } from "../MJTooltip.types";

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
            <IconButton>
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
            <IconButton>
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


export const DefaultColor: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Default",
        open: true,
        variant: TOOLTIP_VARIANTS.default,
        children: (
            <IconButton>
                <HomeIcon />
            </IconButton>
        ),
        arrow: true
    }
};

export const Secondary: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Default",
        open: true,
        variant: TOOLTIP_VARIANTS.secondary,
        children: (
            <IconButton>
                <HomeIcon />
            </IconButton>
        ),
        arrow: true
    }
};

export const Warning: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Warning!!!!!",
        open: true,
        variant: TOOLTIP_VARIANTS.error,
        children: (
            <IconButton>
                <WarningIcon color={TOOLTIP_VARIANTS.error} />
            </IconButton>
        ),
        arrow: true
    }
};

export const Success: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Success!!!!!",
        open: true,
        variant: TOOLTIP_VARIANTS.success,
        children: (
            <IconButton>
                <PriorityHighIcon color={TOOLTIP_VARIANTS.success} />
            </IconButton>
        ),
        arrow: true
    }
};

export const Info: Story = {
    render: (args) => <MJTooltip {...args} />,
    args: {
        title: "Info",
        open: true,
        variant: TOOLTIP_VARIANTS.info,
        children: (
            <IconButton>
                <NewReleasesIcon color={TOOLTIP_VARIANTS.info} />
            </IconButton>
        ),
        arrow: true
    }
};