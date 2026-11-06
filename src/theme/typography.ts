import type { TypographyOptions } from "@mui/material/styles";
import tokens from "./tokens";

const fontFamily = '"Google Sans Flex", sans-serif';
const fontSize = tokens.typography["font-size"];
const fontWeight = tokens.typography["font-weight"];
const lineHeight = tokens.typography["line-height"];

export const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: fontWeight.light.$value,
  fontWeightRegular: fontWeight.default.$value,
  fontWeightMedium: fontWeight.medium.$value,
  fontWeightBold: fontWeight.bold.$value,
  h1: {
    fontFamily,
    fontWeight: fontWeight.medium.$value,
    fontSize: fontSize.xl.$value,
    lineHeight: lineHeight.xl.$value,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.lg.$value,
    lineHeight: lineHeight.lg.$value,
    letterSpacing: "-0.015em",
  },
  h3: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.lg.$value,
    lineHeight: lineHeight.lg.$value,
  },
  h4: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.md.$value,
    lineHeight: lineHeight.md.$value,
  },
  h5: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.md.$value,
    lineHeight: lineHeight.md.$value,
  },
  h6: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.sm.$value,
    lineHeight: lineHeight.sm.$value,
  },
  body1: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.md.$value,
    lineHeight: lineHeight.md.$value,
  },
  body2: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.sm.$value,
    lineHeight: lineHeight.sm.$value,
  },
  button: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    textTransform: "none",
  },
  caption: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.xs.$value,
    lineHeight: lineHeight.xs.$value,
  },
  overline: {
    fontFamily,
    fontWeight: fontWeight.default.$value,
    fontSize: fontSize.xs.$value,
    lineHeight: lineHeight.xs.$value,
  },
};
