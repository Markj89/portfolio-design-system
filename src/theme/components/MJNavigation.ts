import type { Components, Theme } from "@mui/material/styles";

/** Shared foundation for the application navigation surfaces. */
export const MJNavigationTheme: Components<Theme>["MuiAppBar"] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundImage: "none",
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  },
};
