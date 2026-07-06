/**
 *  MJButton
 *  @type {Component} Button
 */
import React, { MouseEvent, forwardRef, memo, useRef } from "react";
import Button from '@mui/material/Button';
import { MJButtonProps } from "./MJButton.types";

const MJButton = forwardRef<HTMLButtonElement, MJButtonProps>(
  ({
    variant = "primary",
    color = "primary",
    children,
    className,
    onClick,
    disabled = false,
  }, ref) => {
    const buttonRef = useRef(ref as any);
    function clickHandler(event: MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      onClick();
      return false;
    }

    return (
      <Button
        variant={variant}
        color={color}
        ref={buttonRef}
        onMouseDown={clickHandler}
        disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : 0}
        className={className}
      >
        {children}
      </Button>
    );
  },
);
export default memo(MJButton);