import type { TooltipProps } from "@mui/material";
import type { ReactElement } from "react";

export interface MJTooltipProps extends Omit<TooltipProps, "children"> {
    title: string;
    children?: ReactElement;
    position?: TOOLTIP_PLACEMENT;
    arrow?: boolean;
    className?: string;
    variant?: TOOLTIP_VARIANTS | string;
}

export enum TOOLTIP_VARIANTS {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    warning = "warning",
    success = "success",
    error = "error",
    info = "info",
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