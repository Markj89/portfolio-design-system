/**
 * MJTypography
 * @type {Component}
 *
 * @summary Renders text provided
 */
import React, { FC } from "react";
import clsx from "clsx";
import { MJTypographyProps } from "./Typography.types";
import { Theme, Typography } from "@mui/material";
import theme from "../theme";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "Asap",
    },
  }),
);

export const MJTypography: FC<MJTypographyProps> = ({
  children,
  align,
  tag,
  color,
  id,
  variant,
  fontWeight,
  variantMapping,
}: MJTypographyProps) => {
  const classes = useStyles({});

  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      id={id}
      className={clsx(classes.root)}
    >
      {children}
    </Typography>
  );
};
