import { createTheme } from "@mui/material";

const theme = createTheme({
  //cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {}
    },
  },
  typography: {
    fontWeightRegular: "Medium",
    fontWeightBold: "500",
  },
  palette: {
    primary: {
      main: "#007876",//"#005A59",
      dark: "#005A59",
      //dark: "#3E3E40",
      //light: "#FDFAF2",
      light: "#FFF8EF",
      contrastText: "#4E555E",
    },
    secondary: {
      main: "#FDFAF2",
      dark: "#222A33",
      light: "#FFFAF0",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  },
});

export default theme;
