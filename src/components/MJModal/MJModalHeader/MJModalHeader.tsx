import React from "react";
import clsx from "clsx";
import MJTypography from "../../MJTypography/MJTypography";
import { MJTypographyProps } from "../../MJTypography";

export interface MJModalHeadProps extends Pick<MJTypographyProps, "color" | "id" | "tag" | "variant"> {
    children?: React.ReactNode;
    id?: string;
}
export const MJModalHeader = ({ children, id, tag, color, variant }: MJModalHeadProps) => 
(
    <MJTypography variant={variant} fontWeight="Bold" color={color} tag={tag} id={id}>
        {children}
    </MJTypography>
);