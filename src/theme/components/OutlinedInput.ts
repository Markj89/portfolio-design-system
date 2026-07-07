import { Theme, Components } from "@mui/material";

export const OutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.body1.fontSize,
      fontFamily: "inherit",
      fontSize: "0.9rem",
      transition: "border-color 0.2s",
      "& .MuiOutlinedInput-input": {
        padding: "10px 16px",
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: theme.shape.borderRadius,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.black,
        borderWidth: 2,
        outline: "none",
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
        borderWidth: 2,
      },
      "&:before": {
        borderBottomColor: theme.palette.grey[500],
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: theme.palette.primary.main,
      },
      "&.Mui-focused:after": {
        borderBottomColor: theme.palette.primary.main,
      },
      "&.MuiFormLabel-root-MuiInputLabel-root": {
        color: theme.palette.primary.dark,
      },
    }),
  },
};
