/**
 * MJModal
 * @type {Component} Dialog/Modal
 */

import React from "react";
import { Modal } from "@mui/material";
import { MJModalProps } from "./MJModal.types";

export const MJModal = ({
  open,
  onClose,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  ...props
}: MJModalProps) => (
  <Modal open={open} onClose={onClose} {...props}>
    <div
      className="mj-modal-focus-container"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </div>
  </Modal>
);

MJModal.displayName = "MJModal";

export default MJModal;
