import type { ModalProps } from "@mui/material";
import type { ReactNode } from "react";

export interface MJModalProps extends Omit<ModalProps, "children" | "overlay"> {
  children: ReactNode;
  overlay?: boolean;
}
