import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MJSegmentControl from "../MJSegmentControl";
import HomeIcon from "@mui/icons-material/Home";
import { TOOLTIP_PLACEMENT } from "../../MJTooltip";

const meta: Meta<typeof MJSegmentControl> = {
  title: "Molecules/MJSegmentControl/Overview",
  component: MJSegmentControl,
  argTypes: {},
} satisfies Meta<typeof MJSegmentControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const toggleList = [
    {
        label: "Label 1",
        value: "label_1",
        childAriaLabel: "Label 1",
    },
    {
        label: "Label 2",
        value: "label_2",
        childAriaLabel: "Label 2",
    },
    {
        label: "Label 3",
        value: "label_3",
        childAriaLabel: "Label 3",
    },
    {
        label: "Label 4",
        value: "label_4",
        childAriaLabel: "Label 4",
    }
];

const toggleTooltipList = [
    {
        label: "Label 1",
        value: "label_1",
        childAriaLabel: "Label 1",
        toolTip: {
            title: "Label 1",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.bottom,
            arrow: true            
        }
    },
    {
        label: "Label 2",
        value: "label_2",
        childAriaLabel: "Label 2",
        toolTip: {
            title: "Label 2",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.bottom,
            arrow: true
        }
    },
    {
        label: "Label 3",
        value: "label_3",
        childAriaLabel: "Label 3",
        toolTip: {
            title: "Label 3",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.bottom,
            arrow: true
        }
    },
    {
        label: "Label 4",
        value: "label_4",
        childAriaLabel: "Label 4",
        toolTip: {
            title: "Label 4",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.bottom,
            arrow: true
        }
    }
];

const iconToggleList = [
    {
        label: "Label 1",
        value: "label_1",
        childAriaLabel: "Label 1",
        toolTip: {
            title: "Label 1",
            variant: "secondary"
        }
    },
    {
        label: "Label 2",
        value: "label_2",
        childAriaLabel: "Label 2",
        toolTip: {
            title: "Label 2",
            variant: "secondary"
        }
    },
    {
        label: "Label 3",
        value: "label_3",
        childAriaLabel: "Label 3",
        icon: <HomeIcon />,
        iconRightAligned: true,
        toolTip: {
            title: "Label 3",
            variant: "secondary"
        }
    },
    {
        label: "Label 4",
        value: "label_4",
        childAriaLabel: "Label 4",
        icon: <HomeIcon />,
        toolTip: {
            title: "Label 4",
            variant: "secondary"
        }
    }
];


export const Primary: Story = {
  args: {
    parentAriaLabel: "Parent Label",
    segments: toggleList,
    exclusive: true
  },
};

export const NonExclusive: Story = {
  args: {
    parentAriaLabel: "Parent Label",
    segments: toggleList,
    exclusive: false
  },
};

export const Tooltip: Story = {
    args: {
        parentAriaLabel: "Parent Label",
        segments: toggleTooltipList,
        exclusive: true
    },
};

export const Icons: Story = {
  args: {
    parentAriaLabel: "Parent Label",
    segments: iconToggleList,
  },
};

