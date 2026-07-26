/** 
 * MJSegmentControl
 * @type{Component} Segment Control (Toggle)
 */

import React, { memo, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import { MJSegmentControlGroupProps } from "./MJSegmentControl.types";
import { MJTooltip, TOOLTIP_PLACEMENT } from '../MJTooltip';

const MJSegmentControl = ({ name, segments, selectedValue, className, onChange, parentAriaLabel, exclusive = false, disabled = false }: MJSegmentControlGroupProps) => {
    const segmentRef = useRef<HTMLDivElement>(null);
    const [initialMount, setInitialMount] = useState(true);
    const [alignment, setAlignment] = React.useState<string | null>(selectedValue ?? '');

    const handleActiveElement = (value: string | null, ref?: React.RefObject<HTMLDivElement | null>) => {
        if (!ref || !ref.current) {
            setAlignment(value);
            return;
        }
        const currentElement = ref.current;
        setAlignment(value);

        if (!value) return;
        currentElement.querySelector<HTMLDivElement>(`[data-segment-control-${value}]`);
    };

    useLayoutEffect(() => {
        handleActiveElement(selectedValue, segmentRef);
    }, [selectedValue]);

    useEffect(() => {
        setInitialMount(false);
    }, []);

    return (
        <ToggleButtonGroup exclusive={exclusive} className={className} value={alignment} disabled={disabled} onChange={(_e, val) => handleActiveElement(val, segmentRef)} aria-label={parentAriaLabel}>
            {segments?.map(({ childAriaLabel, value, icon, toolTip, label, isDisabled = false, iconRightAligned = false }) => {
                const isActive = value === selectedValue;

                const segmentedElements = (
                    <ToggleButton key={value} value={value} aria-label={childAriaLabel} aria-disabled={isDisabled} disabled={isDisabled} aria-checked={isActive}>
                        {(icon && !iconRightAligned) && (
                            <span role="presentation" aria-hidden={true}>
                                {icon}
                            </span>
                        )}

                        {label && (
                            <span>
                                {label}
                            </span>
                        )}
                        {(iconRightAligned && (
                            <span role="presentation" aria-hidden={true}>
                                {icon}
                            </span>
                        ))}
                    </ToggleButton>
                );

                if (toolTip) {
                    return (
                        <MJTooltip key={value} title={label} placement={TOOLTIP_PLACEMENT.auto} {...toolTip}>
                            {segmentedElements}
                        </MJTooltip>
                    );
                }

                return segmentedElements;
            })}
        </ToggleButtonGroup>
    );
};

MJSegmentControl.displayName = "MJSegmentControl";
export default memo(MJSegmentControl);