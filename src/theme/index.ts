import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { buttonTheme } from "./components/Button";
import { Chip } from "./components/Chip";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { OutlinedInput } from "./components/OutlinedInput";
import { TagsInput } from "./custom/TagsInput";
import { Tooltip } from "./components/Tooltip";
import { FloatingFooter } from "./components/FloatingFooter";
import { Modal } from "./components/Modal";
import { MJProjectCardTheme } from "./components/MJProjectCard";
import { MJProjectPageTheme } from "./components/MJProjectPage";

const theme = createTheme({
  cssVariables: true,
  breakpoints: breakpoints,
  typography: typography,
  colors: colors,
  palette: palette,
  custom: {
    tagsInput: TagsInput,
    mjProjectCard: MJProjectCardTheme,
    mjProjectPage: MJProjectPageTheme,
  },
  shape: {
    borderRadius: "4px",
  },
  components: {
    MuiButton: buttonTheme,
    MuiChip: Chip,
    MuiOutlinedInput: OutlinedInput,
    MuiInput: Input,
    MuiInputLabel: Label,
    MuiModal: Modal,
    MuiTooltip: Tooltip,
    MuiFab: FloatingFooter,
  },
});

export default theme;
