import { GetClasses } from "../../utils/typeUtils";
import { useStyles } from "./Button";

export interface ButtonProps extends ButtonProps {
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
