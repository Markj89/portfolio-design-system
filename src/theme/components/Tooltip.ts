import { Components, Theme } from "@mui/material/styles";


export const Tooltip: Components<Theme>["MuiTooltip"] = {
    styleOverrides: {
        tooltip: {
            fontSize: "0.775rem",
            borderRadius: "8px",
            padding: "8px 12px",
            variants: [
                {
                    props: {
                        variant: "default",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.primary.light,
                        },
                    }),
                },
                {
                    props: {
                        variant: "primary",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.primary.light,
                        },
                    }),
                },
                {
                    props: {
                        variant: "secondary",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.dark,
                        color: theme.palette.primary.light,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.primary.dark,
                        },
                    }),
                },
                {
                    props: {
                        variant: "success",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.success.main,
                        color: theme.palette.primary.light,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.primary.main,
                        },
                    }),
                },
                {
                    props: {
                        variant: "error",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.error.main,
                        color: theme.palette.secondary.light,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.error.main,
                        },
                    }),
                },
                {
                    props: {
                        variant: "info",
                    },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.info.main,
                        color: theme.palette.primary.dark,
                        ".MuiTooltip-arrow": {
                            color: theme.palette.info.main,
                        },
                    }),
                },
            ],
        },
        arrow: {
            color: "inherit",
        },
    },
};