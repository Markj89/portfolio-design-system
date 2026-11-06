import { Theme } from "@mui/material/styles";

export const TagsInput = {
  container: (theme: Theme) => ({
    padding: ".5em",
    borderRadius: theme.radii.sm,
    width: "min(80vw, 600px)",
    marginTop: "1em",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: ".5em",
  }),
  input: (theme: Theme) => ({
    flexGrow: 1,
    padding: "10px 10px",
    border: "1px solid",
    borderColor: theme?.palette?.secondary.dark,
    borderRadius: theme.radii.sm,
    outline: "none",
  }),
};
