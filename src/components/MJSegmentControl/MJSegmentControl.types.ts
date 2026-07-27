import React from "react";
import { MJTooltipProps } from "../MJTooltip";
import { ToggleButtonGroupProps } from "@mui/material";

export interface MJSegmentControlSegment extends ToggleButtonGroupProps {
    childAriaLabel: string;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    iconRightAligned?: boolean;
    label?: string;
    toolTip?: Omit<MJTooltipProps, "children">;
    value: string;
}

export interface MJSegmentControlGroupProps extends ToggleButtonGroupProps {
    name?: string;
    segments?: MJSegmentControlSegment[];
    selectedValue?: string;
    parentAriaLabel: string;
    disabled?: boolean;
    onChange?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
    className?: string;
}