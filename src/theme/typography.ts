import { Components, Theme } from "@mui/material";

export const typography: Components<Theme>["MuiTypography"] = {
  defaultProps: {
    fontFamily: [
      '-apple-system',
      'Asap',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightRegular: "Medium",
    fontWeightBold: "500",
    h1: ({ theme }) => ({
      fontType: "h1",
      fontSize: "3rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.6rem",
      },
    }),
    h2: ({ theme }) => ({
      fontType: "h2",
      fontSize: "2.6rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.4rem",
      },
    }),
    h3: ({ theme }) => ({
      fontType: "h3",
      fontSize: "2.4rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      }
    }),
    h4: ({ theme }) => ({
      fontType: "h4",
      fontsize: "2rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
      }
    }),
    h5: ({ theme }) => ({
      fontType: "h5",
      fontSize: "1.8rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.6rem",
      }
    }),
    h6: ({ theme }) => ({
      fontType: "h6",
      fontSize: "1.6rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
      }
    }),
    body1: ({ theme }) => ({
      fontType: "p",
      fontSize: "1em",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.6rem",
      }
    }),
    body2: ({ theme }) => ({
      fontType: "span",
      fontSize: "1.2rem"
    }),
    small: ({ theme }) => ({
      fontType: "small",
      fontSize: "0.rem"
    }),
    // variantMapping: {
    //   h1: "h1",
    //   h2: "h2",
    //   h3: "h3",
    //   h4: "h4",
    //   h5: "h5",
    //   h6: "h6",
    //   subtitle1: "h2",
    //   subtitle2: "h2",
    //   body1: "p",
    //   body2: "span",
    //   small: "small",
    // },
  }
};
