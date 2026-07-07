import { PaletteOptions } from "@mui/material/styles";
import { colors } from "./colors";

export const palette: PaletteOptions = {
  primary: {
    main: colors.green[100],
    light: colors.light,
    dark: colors.dark,
    contrastText: colors.white,
    // main: "#007876",//"#005A59",
    // dark: "#005A59",
    // //dark: "#3E3E40",
    // //light: "#FDFAF2",
    // light: "#FFF8EF",
    // contrastText: "#4E555E",
  },
  error: {
    main: colors.red,
  },
  secondary: {
    main: colors.green[50],
    // main: "#FDFAF2",
    // dark: "#222A33",
    light: colors.white,
  },
  grey: {
    100: "#a2a2a2",
  },
  common: {
    black: colors.black,
    white: colors.white,
  },
  text: {
    primary: colors.dark,
    secondary: colors.light,
  },
};
