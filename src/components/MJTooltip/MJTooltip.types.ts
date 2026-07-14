import { TooltipProps } from "@mui/material";
import React from "react";

export interface MJTooltipProps extends TooltipProps {
    title: string;
    children?: React.ReactElement;
    position?: TOOLTIP_PLACEMENT;
    arrow?: boolean;
    className?: string;
    variants?: TOOLTIP_VARIANTS;
}

export enum TOOLTIP_VARIANTS {
    warning = "warning",
    standard = "standard",
    light = "light",
    dark = "dark"
}

export enum TOOLTIP_PLACEMENT {
    autoEnd = "auto-end",
    autoStart = "auto-start",
    auto = "auto",
    bottomEnd = "bottom-end",
    bottomStart = "bottom-start",
    bottom = "bottom",
    leftEnd = "left-end",
    leftStart = "left-start",
    left = "left",
    rightEnd = "right-end",
    rightStart = "right-start",
    right = "right",
    topEnd = "top-end",
    topStart = "top-start",
    top = "top"
}