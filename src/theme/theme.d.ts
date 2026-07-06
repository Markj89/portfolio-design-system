import "@mui/material/styles";
import { TagsInput } from "./custom/TagsInput";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      tagsInput: TagsInput
    };
  }

  interface ThemeOptions {
    custom?: {
      tagsInput?: TagsInput
    };
  }
}