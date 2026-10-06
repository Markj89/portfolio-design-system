import React from "react";
import clsx from "clsx";
import { IconButton } from "@mui/material";
import MJIcons from "../../MJIcons/MJIcons";

export interface MJModalHeadProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    onRequestClose?: () => void;
}

export const MJModalHead = ({ children, className, onRequestClose, ...props }: MJModalHeadProps) => {
    return (
        <header
            {...props}
            data-test-id="mj-modal-header" 
            className={clsx("mj-modal-header", className)}
        >
                {children}
            {onRequestClose && (
                <IconButton
                    onClick={onRequestClose}
                    aria-label="Close dialog"
                    className="mj-modal-header-close-button"
                    type="button"
                    data-test-id="mj-modal-header-close-button"
                >
                    <MJIcons iconName="Close" color="inherit" fontSize="small" />
                </IconButton>
            )}
        </header>
    );
};