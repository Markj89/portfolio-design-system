import { ChipProps as MuiChipProps } from "@mui/material";

export interface MJTagProps extends Omit<MuiChipProps, "children"> {
  appearance?: "light" | "dark";
  color: MuiChipProps["color"];
  children: string | JSX.Element;
  icon?: JSX.Element;
  closeButton: boolean;
  onClick?: () => void;
  [key: string]: any;
}
