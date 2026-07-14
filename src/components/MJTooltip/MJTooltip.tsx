/**
 * MJTooltip
 * @type {Component} Tooltip
 */
import React, { useEffect, useRef } from "react";
import { MJTooltipProps, TOOLTIP_PLACEMENT } from "./MJTooltip.types";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

export const MJTooltip = ({title, variants, children, className, position = TOOLTIP_PLACEMENT.auto, arrow = false }: MJTooltipProps) => {
    const toolTipRef = useRef<((e: KeyboardEvent) => void | null)>(null);

    useEffect(() => {
        return () => {
            if (toolTipRef.current) {
                document.removeEventListener("keydown", toolTipRef.current);
                toolTipRef.current = null;
            }
        }
    }, []);

    return (
        <Tooltip
            placement={position}
            title={title}
            arrow={arrow}
            className={clsx(variants, className)}
            describeChild={true}
        >
            {children}
        </Tooltip>
    );
}

MJTooltip.displayName = "MJTooltip";
export default MJTooltip;