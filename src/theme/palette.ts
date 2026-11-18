import { PaletteOptions } from "@mui/material/styles";
import { colors } from "./colors";

export const palette: PaletteOptions = {
  primary: {
    main: colors.brand.primary,
    light: colors.neutral.light,
    dark: colors.green[200],
    contrastText: colors.neutral.light,
  },
  error: {
    main: colors.red[100],
    light: colors.red[50],
    dark: colors.red[100],
    contrastText: colors.red[200],
  },
  success: {
    main: colors.green[100],
    light: colors.green[0],
    dark: colors.green[200],
    contrastText: colors.green[50],
  },
  info: {
    main: colors.blue[0],
  },
  secondary: {
    main: colors.green[50],
    light: colors.common.white,
  },
  common: {
    black: colors.common.black,
    white: colors.common.white,
  },
  text: {
    primary: colors.common.black,
    secondary: colors.common.white,
  },
};
