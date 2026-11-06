import { Theme } from "@mui/material/styles";

export const MJProjectCardTheme = {
  root: (theme: Theme) => ({
    overflow: "hidden",
    border: "1px solid",
    borderColor: "divider",
    borderRadius: theme.radii.md,
    bgcolor: "background.paper",
    [theme.breakpoints.down("sm")]: {
      borderRadius: theme.radii.sm,
    },
  }),
  image: (theme: Theme) => ({
    display: "block",
    width: "100%",
    aspectRatio: "16 / 10",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      aspectRatio: "4 / 3",
    },
  }),
  content: (theme: Theme) => ({
    px: 2,
    pt: 1.75,
    pb: 0,
    "& .MuiTypography-root + .MuiTypography-root": {
      mt: 0.5,
      color: "text.secondary",
    },
    [theme.breakpoints.down("sm")]: {
      px: 1.5,
      pt: 1.5,
    },
  }),
  actions: (theme: Theme) => ({
    px: 2,
    pt: 1.5,
    pb: 1.75,
    display: "flex",
    justifyContent: "space-between",
    "& .MJProjectCard__arrow": {
      ml: 0.75,
    },
    [theme.breakpoints.down("sm")]: {
      px: 1.5,
      pt: 1.25,
      pb: 1.5,
    },
  }),
  repositoryLink: (theme: Theme) => ({
    border: "1px solid",
    borderColor: "divider",
    color: "text.primary",
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
    },
  }),
};
