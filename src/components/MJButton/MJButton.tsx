/**
 * 
 * @type {Component} Button
 */
import React, { MouseEvent, forwardRef} from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import theme from '../theme';
import { Theme, Button } from '@mui/material';
import { MJButtonProps } from './MJButton.types';
import clsx from 'clsx';

 export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    padding: '18px 20px',
    cursor: 'pointer',
    fontWeight: theme.typography.fontWeightBold,
    outline: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    position: 'relative',
    marginX: '15px',
    '&:focus': {
      outline: 'none',
    },
    '&.Mui-disabled, &:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: '0.44',
    },
  },
  contained: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      outline: 'none',
    },
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
    border: '2px solid',
  },
}));

export type ButtonClasses = GetClasses<typeof useStyles>;

export const MJButton = forwardRef<HTMLButtonElement, MJButtonProps>((
  {
    variant = "contained",
    color = "primary",
    children,
    className,
    onClick,
    disabled
  }
) => {
  const classes = useStyles({});
  function clickHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick();
    return false;
  }

  return (
    <Button 
      onMouseDown={clickHandler} 
      className={clsx(
        classes.root,

        {
          [classes.contained]: variant === 'contained',
          [classes.outlined]: variant === 'outlined',
          [classes.text]: variant === 'text',
        },
        )}
      disabled={disabled ? true : undefined}
      tabIndex={disabled ? -1 : 0}
      >
      {children}
    </Button>
  );
});