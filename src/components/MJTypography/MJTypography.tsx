/**
 * MJTypography
 * @type {Component}
 *
 * @summary Renders text provided
 */
import React, { FC, memo } from "react";
import { MJTypographyProps } from "./MJTypography.types";
import { Typography } from "@mui/material";

const MJTypography: FC<MJTypographyProps> = ({
  children,
  align,
  tag,
  color,
  id,
  variant,
  fontWeight,
  className,
  variantMapping,
}: MJTypographyProps) => {

  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      id={id}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default memo(MJTypography);