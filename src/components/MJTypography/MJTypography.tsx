/**
 * MJTypography
 * @type {Component}
 *
 * @summary Renders text provided
 */
import React, { FC, memo } from "react";
import { MJTypographyProps } from "./MJTypography.types";
import { Typography } from "@mui/material";

const fontWeights = {
  Regular: 400,
  Medium: 500,
  Bold: 600,
} as const;

const MJTypography: FC<MJTypographyProps> = ({
  children,
  align,
  tag,
  color,
  id,
  variant,
  fontWeight,
  className,
}: MJTypographyProps) => {
  return (
    <Typography
      variant={variant}
      component={tag}
      align={align}
      color={color}
      id={id}
      className={className}
      style={{ fontWeight: fontWeights[fontWeight] }}
    >
      {children}
    </Typography>
  );
};

export default memo(MJTypography);
