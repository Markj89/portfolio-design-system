import { createTheme } from "@mui/material/styles";
import { buttonTheme } from "./components/Button";
import { Chip } from "./components/Chip";
import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { TagsInput } from "./custom/TagsInput";

const theme = createTheme({
  //cssVariables: true,
  breakpoints: breakpoints,
  typography: typography,
  palette: palette,
  custom: TagsInput,
  components: {
    MuiButton: buttonTheme,
    MuiChip: Chip,
  }
});

export default theme;
