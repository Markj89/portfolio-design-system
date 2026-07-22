import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { buttonTheme } from "./components/Button";
import { Chip } from "./components/Chip";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { OutlinedInput } from "./components/OutlinedInput";
import { TagsInput } from "./custom/TagsInput";
import { Tooltip } from "./components/Tooltip";

const theme = createTheme({
  //cssVariables: true,
  breakpoints: breakpoints,
  typography: typography,
  palette: palette,
  custom: TagsInput,
  shape: {
    borderRadius: "4px",
  },
  components: {
    MuiButton: buttonTheme,
    MuiChip: Chip,
    MuiOutlinedInput: OutlinedInput,
    MuiInput: Input,
    MuiInputLabel: Label,
    MuiTooltip: Tooltip,
  },
});

export default theme;
