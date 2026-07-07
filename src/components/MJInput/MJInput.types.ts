import React from "react";

export interface FieldProps {
  id: string;
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  label?: string;
  error: boolean;
  variant?: "outlined" | "standard" | "filled";
  placeholder?: string;
  helperText?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
