import { Theme, Components } from "@mui/material";

export const Label: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[100],
      top: "-5px",
      fontWeight: 500,
      "&.MuiFormLabel-root-MuiInputLabel-root": {
        color: theme.palette.primary.dark,
      },
      "&.Mui-focused": {
        color: theme.palette.primary.main,
      },

      "&.Mui-error": {
        color: theme.palette.error.main,
      },

      "&.Mui-disabled": {
        color: theme.palette.text.disabled,
      },
    }),
  },
};
