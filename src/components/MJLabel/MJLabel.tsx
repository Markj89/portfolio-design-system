/**
 * MJLabel
 * @type {Component} Label
 */
import React, { CSSProperties, HTMLAttributes } from 'react';
import theme from 'components/theme';
import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

interface MJLabelProps extends HTMLAttributes<HTMLLabelElement> {
    children?: JSX.Element | JSX.Element[] | string | string[];
    [key: string]: any;
    style?: CSSProperties;
    id?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'block',
        textAlign: 'left',
        fontSize: '0.875rem',
        letterSpacing: '.8px',
        color: '#0D0D0D',
        margin: '10px 15px 5px 0',
    }
}));

export const MJLabel = ({ children, id }: MJLabelProps) => {
    const classes = useStyles();
    return (
        <label id={id} className={classes.root}>{children}</label>
    );
}