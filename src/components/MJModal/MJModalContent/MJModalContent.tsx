import { Box, BoxProps } from "@mui/material";
import React from "react";
import clsx from "clsx";

export interface MJModalContentProps extends BoxProps {
    children: React.ReactNode;
}

export const MJModalContent = ({ children }: MJModalContentProps) => (
    <Box className={clsx("mj-modal-content")}>
        {children}
    </Box>
)