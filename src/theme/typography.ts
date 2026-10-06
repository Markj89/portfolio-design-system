import type { TypographyOptions } from "@mui/material/styles";

const headingFontFamily = '"Raleway", sans-serif';

export const typography: TypographyOptions = {
  fontFamily: headingFontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: headingFontFamily,
    fontWeight: 600,
    fontSize: "3rem",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "2.6rem",
    lineHeight: 1.2,
    letterSpacing: "-0.015em",
  },
  h3: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "2.4rem",
    lineHeight: 1.25,
  },
  h4: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "2rem",
    lineHeight: 1.25,
  },
  h5: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "1.8rem",
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.3,
  },
  body1: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  button: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
    textTransform: "none",
  },
  caption: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
  },
  overline: {
    fontFamily: headingFontFamily,
    fontWeight: 500,
  },
};
