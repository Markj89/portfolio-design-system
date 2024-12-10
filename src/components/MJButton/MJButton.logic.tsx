import React, { MouseEvent } from "react";
import { MJButtonProps, ButtonClasses } from "./MJButton.types";

export function clickHandler(event: MouseEvent<HTMLButtonElement>, onClick:() => void) {
    event.preventDefault();
    onClick();
    return false;
  }