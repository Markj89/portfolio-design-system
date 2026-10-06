import React from "react";
import MJTypography from "../../MJTypography/MJTypography";
import { MJTypographyProps } from "../../MJTypography";

export interface MJModalHeaderProps extends Pick<MJTypographyProps, "color" | "id" | "variant"> {
    children?: React.ReactNode;
    tag?: "h1" | "h2" | "h3" | "h4";
}
export const MJModalHeader = ({ children, id, tag = "h2", color, variant }: MJModalHeaderProps) =>
(
    <MJTypography variant={variant} fontWeight="Bold" color={color} tag={tag} id={id}>
        {children}
    </MJTypography>
);