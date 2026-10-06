import { Theme } from "@mui/material/styles";

export const MJProjectPageTheme = {
  page: {
    width: "100%",
    maxWidth: 1120,
    mx: "auto",
    px: { xs: 2, sm: 3 },
    py: { xs: 4, md: 8 },
  },
  header: (theme: Theme) => ({
    display: "grid",
    gap: 1.5,
    mb: { xs: 3, md: 5 },
    maxWidth: 800,
    [theme.breakpoints.up("md")]: {
      gap: 2,
    },
  }),
  heroImage: (theme: Theme) => ({
    display: "block",
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    borderRadius: 2,
    bgcolor: "action.hover",
    mb: { xs: 3, md: 5 },
    [theme.breakpoints.down("sm")]: {
      aspectRatio: "4 / 3",
      borderRadius: 1.5,
    },
  }),
  metadata: (theme: Theme) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1,
    color: theme.palette.text.secondary,
  }),
  section: (theme: Theme) => ({
    display: "grid",
    gap: 1,
    py: { xs: 2, md: 3 },
    borderBottom: `1px solid ${theme.palette.divider}`,
    maxWidth: 760,
  }),
  technologies: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    mb: { xs: 2, md: 3 },
  },
  actions: (theme: Theme) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1.5,
    mt: { xs: 3, md: 5 },
    "& .MJProjectPage__arrow": {
      ml: 0.75,
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "stretch",
      flexDirection: "column-reverse",
      "& .MuiButton-root": {
        width: "100%",
      },
    },
  }),
};