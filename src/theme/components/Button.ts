import { Components, Theme } from "@mui/material/styles";
import { colors } from "../colors";

export const buttonTheme: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    variant: "contained",
    color: "primary",
  },

  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "25px",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      padding: "10px 20px",
      cursor: "pointer",
      //fontWeight: theme?.typography?.fontWeightBold,
      outline: "none",
      verticalAlign: "middle",
      userSelect: "none",
      position: "relative",
      lineHeight: "1.5",
      letterSpacing: "0.05px",
      borderWidth: "2px",
      textTransform: "capitalize",
      [theme?.breakpoints?.down("sm")]: {
        width: "100%",
      },
      "&:focus": {
        outline: "none",
      },
      "&:focus-within": {
        outlineColor: theme.palette?.primary.main,
        outlineWidth: "1px",
        outlineOffset: "2px",
        outlineStyle: "dashed",
      },
      "&.Mui-disabled, &:disabled": {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: "0.44",
      },
    }),

    containedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette?.primary.main,
      color: theme.palette?.text.secondary,

      "&:hover": {
        backgroundColor: colors.green[0],
        color: theme.palette.secondary.light,
        outline: "none",
      },
      "&:active": {},
    }),

    containedSecondary: ({ theme }) => ({
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      border: "3px solid",
      "&:hover": {
        color: colors.green[0],
        backgroundColor: theme.palette.primary.light,
        borderColor: colors.green[0],
      },
    }),
  },
};
