/**
 * MJTagsInput
 * @type {Component} Tag Input
 */
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import clsx from "clsx";
import { MJTypography } from "../MJTypography";
import MJTag from "./MJTag";

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        flexGrow: 1,
        padding: '10px 10px',
        border: '1px solid',
        borderColor: theme?.palette?.secondary.dark,
        borderRadius: "7px",
        outline: 'none'
    },
    inputContainer: {
        padding: ".5em",
        borderRadius: "3px",
        width: "min(80vw, 600px)",
        marginTop: "1em",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: ".5em",
    },
    tag: {
        padding: '.1625rem 1rem'
    }
}));

interface MJTagsInputProps {
    darkMode: boolean;
}

export default function MJTagsInput({ darkMode = false }: MJTagsInputProps) {
    const classes = useStyles({});
    const [tags, setTags] = useState<string[]>([])

    function handleKeyDown(e: any, tags: any) {
        let returnTag = [];
        // If user did not press enter key, return
        if (e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if (!value.trim()) return
        // Add the value to the tags array
        setTags([...tags, value]);
        // Clear the input
        e.target.value = ''
    }

    function removeTag(index: number) {
        setTags(tags.filter((tag, i) => i !== index))
    }

    return (
        <div className={clsx(classes.inputContainer)}>
            {tags.map((inputTag, index) => (
                <MJTag className={clsx(classes.tag)} key={index} color={darkMode ? "dark" : "light"} closeButton={true} onClick={() => removeTag(index)}>
                    <MJTypography className="text" tag={"span"} color={darkMode ? "white" : "black"} align={"center"} fontWeight="Medium" variant="caption">{inputTag}</MJTypography>
                </MJTag>
            )) }
            <input onKeyDown={() => handleKeyDown(event, tags)} type="text" className={clsx("tags-input", classes.input)} placeholder="Type something" role="input" />
        </div>
    )
}