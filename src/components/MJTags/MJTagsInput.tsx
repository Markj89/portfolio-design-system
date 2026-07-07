/**
 * MJTagsInput
 * @type {Component} Tag Input
 */
import React, { useState } from "react";
import { Container, TextField } from "@mui/material";
import clsx from "clsx";
import MJTypography from "./../MJTypography/MJTypography";
import MJTag from "./MJTag";

interface MJTagsInputProps {
  darkMode: boolean;
}

export default function MJTagsInput({ darkMode = false }: MJTagsInputProps) {
  const [tags, setTags] = useState<string[]>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    let returnTag = [];
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = "";
  }

  function removeTag(index: number) {
    setTags(tags.filter((tag, i) => i !== index));
  }

  return (
    <Container>
      {tags.map((tag, index) => (
        <MJTag
          key={tag}
          label={tag}
          appearance={darkMode ? "dark" : "light"}
          closeButton={true}
          onClick={() => removeTag(index)}
        >
          <MJTypography
            className="text"
            tag={"span"}
            color={darkMode ? "white" : "black"}
            align={"center"}
            fontWeight="Medium"
            variant="caption"
          >
            {tag}
          </MJTypography>
        </MJTag>
      ))}
      <TextField
        onKeyDown={handleKeyDown}
        variant="standard"
        type="text"
        className={clsx("tags-input")}
        placeholder="Type something"
      />
    </Container>
  );
}
