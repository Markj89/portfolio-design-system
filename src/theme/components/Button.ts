import { Components, Theme } from "@mui/material/styles";

export const buttonTheme: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    variant: "contained",
    color: "primary",
  },

  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radii.lg,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      padding: "10px 20px",
      cursor: "pointer",
      outline: "none",
      verticalAlign: "middle",
      userSelect: "none",
      fontWeight: 600,
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

    contained: ({ theme }) => ({
      backgroundColor: theme.palette?.primary.main,
      color: theme.palette.common.white,

      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        outline: "none",
      },
      "&:active": {},
    }),
    outlined: ({ theme }) => ({
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      "&:hover": {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        outline: "none",
      },
    }),
  },
};
