import type { ModalProps } from "@mui/material";
import type { ReactNode } from "react";

type MJModalAccessibleName =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never };

export type MJModalProps = Omit<
  ModalProps,
  "children" | "overlay" | "role" | "aria-modal" | "aria-label" | "aria-labelledby"
> & {
  children: ReactNode;
  overlay?: boolean;
} & MJModalAccessibleName;
