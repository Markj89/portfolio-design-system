import "@mui/material/styles";
import { TagsInput } from "./custom/TagsInput";
import { MJProjectCardTheme } from "./components/MJProjectCard";
import { MJProjectPageTheme } from "./components/MJProjectPage";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      tagsInput: TagsInput;
      mjProjectCard: typeof MJProjectCardTheme;
      mjProjectPage: typeof MJProjectPageTheme;
    };
  }

  interface ThemeOptions {
    custom?: {
      tagsInput?: TagsInput;
      mjProjectCard?: typeof MJProjectCardTheme;
      mjProjectPage?: typeof MJProjectPageTheme;
    };
  }
}
