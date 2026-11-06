import { BreakpointsOptions } from "@mui/material";
import tokens from "./tokens";

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: tokens.breakpoints.values.xs.$value,
    sm: tokens.breakpoints.values.sm.$value,
    md: tokens.breakpoints.values.md.$value,
    lg: tokens.breakpoints.values.lg.$value,
    xl: tokens.breakpoints.values.xl.$value,
  },
};
