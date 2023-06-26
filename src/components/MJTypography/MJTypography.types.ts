import { TypographyProps } from "@mui/material";
import React from "react";

export interface MJTypographyProps extends TypographyProps {
    classes?: string;
    /**
     * Render anc Elements
     */
    children: React.ReactNode | JSX.Element;
    /**
     * Specify text alignment
     */
    align?: "right" | "left" | "center" | "inherit" | "justify";
    /**
     * Specify text weight
     */
    fontWeight: 'Regular' | 'Medium' | 'Bold';
    /**
     * Specify color for text
     */
    color: 'primary' | 'black' | 'white';
    /**
     * (Optional) Give specific ID
     */
    id?: string;
    /**
     * Specify which styles to use
     */
    variant: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
    /**
     * Specify which html tag to render
     */
    tag: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "small";
}