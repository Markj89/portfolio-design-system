import { Components, Theme } from "@mui/material/styles";
import { colors } from "../colors";

export const Chip: Components<Theme>["MuiChip"] = {
    defaultProps: {
        color: 'default',
        appearance: 'light'
    },
    variants: [
        {
            props: {
                color: "primary"
            },
            style: ({ theme }) => ({
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            })
        },
        {
            props: {
                color: "secondary",
            },
            style: ({ theme }) => ({
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.dark,
            })
        },
        {
            props: {
                appearance: "light"
            },
            style: ({ theme }) => ({
                backgroundColor: theme.palette.primary.light, 
                borderColor: theme?.palette?.primary.light,
                color: theme?.palette?.text.primary,
            })
        },
        {
            props: {
                appearance: "dark"
            },
            style: ({ theme }) => ({
                backgroundColor: theme.palette.primary.dark, 
                borderColor: theme?.palette?.primary.dark,
                color: theme?.palette?.text.secondary
            })
        }
    ],
};