import { Components, Theme } from "@mui/material/styles";

export const Modal: Components<Theme>["MuiModal"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      padding: theme.spacing(2),
      boxSizing: "border-box",
      ".mj-modal-focus-container": {
        outline: "none",
        "&:focus": {
          outline: "none",
        },
      },
      ".mj-modal-overlay": {
        position: "relative",
        width: "min(100%, 600px)",
        margin: "0 auto",
        border: "none",
        borderRadius: theme.radii.lg,
        outline: "none",
        boxShadow: "none",
        "&:focus": {
          outline: "none",
        },
        "&:focus-visible": {
          outline: "none",
        },
      },
      ".mj-modal-non-overlay": {
        position: "relative",
        width: "min(100%, 600px)",
        margin: "0 auto",
        border: "none",
        outline: "none",
        boxShadow: "none",
        "&:focus": {
          outline: "none",
        },
        "&:focus-visible": {
          outline: "none",
        },
      },
      ".mj-modal-header": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: theme.palette.common.white,
      },
      ".mj-modal-content": {
        padding: "12px 24px",
        backgroundColor: theme.palette.common.white,
        border: "none",
      },
      ".mj-modal-header-close-button": {
        backgroundColor: "transparent",
        width: "auto !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        padding: 0,
      },
    }),
  },
};
