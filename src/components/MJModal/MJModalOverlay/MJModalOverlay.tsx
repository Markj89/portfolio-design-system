import { Box, BoxProps } from "@mui/material";
import clsx from "clsx";
import React from "react";

interface OverlayProps extends BoxProps {
    overlay?: boolean;
    children: React.ReactNode;
}

export const MJModalOverlay = ({children, overlay}: OverlayProps) => (
    <Box className={clsx(overlay ? "mj-modal-overlay" : "mj-modal-non-overlay")}>
        {children}
    </Box>
);