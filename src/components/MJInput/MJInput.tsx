import React from "react";
import { FieldProps } from "./MJInput.types";
import { TextField } from "@mui/material";

export const MJInput = React.forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      id,
      size = "medium",
      type = "text",
      error = false,
      name,
      variant = "standard",
      placeholder,
      label = "Name",
      helperText = "Please write your name",
      className,
    }: FieldProps,
    ref,
  ) => {
    return (
      <TextField
        label={label}
        helperText={helperText}
        id={id}
        name={name}
        type={type}
        ref={ref}
        className={className}
        error={error}
        variant={variant}
        autoComplete="off"
        placeholder={placeholder}
      />
    );
  },
);

MJInput.displayName = "MJInput";

export default MJInput;
