/**
 *  MJButton
 *  @type {Component} Button
 */
import React, { forwardRef, memo, useRef } from "react";
import { makeStyles } from "@mui/styles";
import theme from "../theme";
import { Theme, Button } from "@mui/material";
import { MJButtonProps, ButtonClasses } from "./MJButton.types";
import clsx from "clsx";
import { clickHandler } from "./MJButton.logic";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "25px",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: theme?.typography?.fontWeightBold,
    outline: "none",
    verticalAlign: "middle",
    userSelect: "none",
    position: "relative",
    lineHeight: "1.5",
    letterSpacing: "0.05px",
    borderWidth: "2px",
    textTransform: "capitalize",
    [theme?.breakpoints?.down("sm")]: {
      width: "100%"
    },
    "&:focus": {
      outline: "none",
    },
    "&:focus-within": {
      outlineColor: theme.palette?.primary.main,
      outlineWidth: "1px",
      outlineOffset: "2px",
      outlineStyle: "dashed"
    },
    "&.Mui-disabled, &:disabled": {
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: "0.44",
    },
  },
  primary: {
    backgroundColor: theme.palette?.primary.main,
    color: theme.palette?.common.white,
    "&:hover": {
      backgroundColor: theme.palette?.primary.dark,
      outline: "none",
    },
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: theme.palette?.primary.main,
    color: theme.palette?.primary.main,
    border: "3px solid",
    "&:hover": {
      color: theme.palette?.primary.dark,
      backgroundColor: theme.palette?.primary.light,
      borderColor: theme.palette?.primary.dark,
    }
  },
}));

const MJButton = forwardRef<HTMLButtonElement, MJButtonProps>(
  ({
    variant = "primary",
    color = "primary",
    children,
    className,
    onClick,
    disabled = false,
  }, ref) => {
    const classes = useStyles({});
    const buttonRef = useRef(ref as any);
    
    return (
      // @ts-ignore
      <Button
        ref={buttonRef}
        onMouseDown={clickHandler}
        className={clsx(
          classes.root,
          className,
          {
            [classes.primary]: variant === "primary",
            [classes.outlined]: variant === "outlined",
          },
        )}
        disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </Button>
    );
  },
);
export default memo(MJButton);