import React from "react";
import clsx from "clsx";
import MJButton from "../../MJButton/MJButton";
import MJIcons from "../../MJIcons/MJIcons";

export interface MJModalHeadProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    onRequestClose?: () => void;
}

export const MJModalHead = ({ children, className, onRequestClose }: MJModalHeadProps) => {
    return (
        <div 
            data-test-id="mj-modal-header" 
            className={clsx("mj-modal-header", className)}
            >
                {children}
            <MJButton 
                onClick={onRequestClose} 
                aria-label="Close modal"
                className={"mj-modal-header-close-button"}
                type="button" 
                data-test-id="mj-modal-header-close-button">
                <MJIcons iconName="Close" color="inherit" fontSize="small" />
            </MJButton>
        </div>
    );
};