import { Theme, Components } from "@mui/material";

export const Input: Components<Theme>["MuiInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      styleOverrides: theme.typography.body1.fontSize,
      "& .MuiOutlinedInput-input": {
        padding: "10px 16px",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.dark,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.black,
        borderWidth: 2,
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-disabled": {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: "0.44",
      },
    }),
  },
};
