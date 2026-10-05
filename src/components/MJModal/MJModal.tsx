/**
 * MJModal
 * @type {Component} Dialog/Modal
 */

import React from "react";
import { Modal } from "@mui/material";
import { MJModalProps } from "./MJModal.types";

export const MJModal = ({ open, onClose, children, ...props }: MJModalProps) => (
  <Modal open={open} onClose={onClose} {...props}>
    <div>{children}</div>
  </Modal>
);

MJModal.displayName = "MJModal";

export default MJModal;
