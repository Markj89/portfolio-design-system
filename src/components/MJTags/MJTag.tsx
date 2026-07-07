/**
 * MJTag
 * @type {Component} Tag (Chip)
 *
 */
import React from "react";
import { Chip } from "@mui/material";
import { MJTagProps } from "./MJTag.types";
import { Close } from "@mui/icons-material";
import clsx from "clsx";

const MJTag = ({
  appearance = "light",
  className,
  icon,
  color,
  children,
  closeButton,
  onClick,
  ...props
}: MJTagProps) => {
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.();
  };

  return (
    <Chip
      appearance={appearance}
      color={color}
      label={children}
      data-testid="tag-tag-id"
      component="span"
      className={clsx(
        "MJTag",
        "MJTag--root",
        `MJTag--${appearance}`,
        className,
      )}
      icon={icon}
      onDelete={closeButton ? clickHandler : undefined}
      deleteIcon={
        <Close
          fontSize="small"
          color={appearance === "dark" ? "info" : "primary"}
        />
      }
      {...props}
    />
  );
};

export default MJTag;
