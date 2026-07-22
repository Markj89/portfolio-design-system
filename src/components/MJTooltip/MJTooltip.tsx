/**
 * MJTooltip
 * @type {Component} Tooltip
 */
import React from "react";
import { Tooltip } from "@mui/material";
import { MJTooltipProps, TOOLTIP_PLACEMENT, TOOLTIP_VARIANTS } from "./MJTooltip.types";

export const MJTooltip: React.FC<MJTooltipProps> = ({
    title,
    variant = TOOLTIP_VARIANTS.default,
    children,
    className,
    position = TOOLTIP_PLACEMENT.auto,
    arrow = false,
    ...props
}) => {

    return (
        <Tooltip
            {...props}
            variant={variant}
            placement={position}
            title={title}
            arrow={arrow}
            className={className}
            describeChild={true}
        >
            {children}
        </Tooltip>
    );
};

MJTooltip.displayName = "MJTooltip";
export default MJTooltip;