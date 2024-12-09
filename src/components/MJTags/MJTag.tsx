import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import theme from "../theme";
import clsx from "clsx";

interface MJTagProps {
    color: "light" | "dark";
    children: string | JSX.Element;
    closeButton: boolean;
    onClick?: () => void;
    [key: string]: any;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "inline-block",
        border: "2px solid",
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
        overflow: "hidden"
    },
    light: {
        backgroundColor: theme?.palette?.secondary.light, 
        borderColor: theme?.palette?.secondary.light,
        color: theme?.palette?.secondary.dark,
    },
    dark: {
        backgroundColor: theme?.palette?.primary.contrastText, 
        borderColor: theme?.palette?.primary.contrastText,
        color: theme?.palette?.common.white
    },
    tagItem: {
        display: "inline-block",
        padding: ".5em .75em",
        borderRadius: "20px",
        close: {
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: ".5em",
            fontSize: "18px",
            cursor: "pointer",
        }
    }
}));
const MJTag = ({color, children, closeButton, onClick}: MJTagProps) => {
    const classes = useStyles({});
    function clickHandler(event: MouseEvent) {
        event.preventDefault();
        onClick();
        return false;
    }

    return (
        <Box data-testid="tag-test-id" component={"span"} px={5} sx={{ p: '.5625rem 1rem' }} className={clsx(classes.root, {
            [classes.dark]: color === "dark",
            [classes.light]: color === "light",
          })}>
            {children}
            <>
            {closeButton && (<IconButton className={clsx(classes.tagItem?.close)} size={'small'} onClick={clickHandler}><Close /></IconButton>)}
            </>
        </Box>
    )
};

export default MJTag;