import { ButtonProps } from "@mui/material";
import { GetClasses } from "./../../utils/typeUtils";
import { useStyles } from "./MJButton";

export interface MJButtonProps extends ButtonProps {
  children: JSX.Element;
  variant: "contained" | "outlined" | "text";
  active?: boolean;
  [key: string]: any;
  onClick?: () => void;
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  disabled: boolean;
  capitalize?: boolean;
}
export type ButtonClasses = GetClasses<typeof useStyles>;
