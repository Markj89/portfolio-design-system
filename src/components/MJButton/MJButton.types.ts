import { ButtonProps as MuiButtonProps } from "@mui/material";
import { ReactNode } from "react";

export interface MJButtonProps extends MuiButtonProps {
  children: ReactNode;
  variant: "contained" | "outlined" | "text";
  active?: boolean;
  [key: string]: any;
  onClick?: () => void;
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  disabled: boolean;
  capitalize?: boolean;
}
