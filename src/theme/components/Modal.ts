import { Components, Theme } from "@mui/material/styles";
import { colors } from "../colors";

export const Modal: Components<Theme>["MuiModal"] = {
    defaultProps: {},
    styleOverrides: {
        root: ({ theme }) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(2),
            boxSizing: "border-box",
            ".mj-modal-overlay": {
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
                backgroundColor: colors.white,
            },
            ".mj-modal-content": {
                padding: "12px 24px",
                backgroundColor: colors.white,
                border: "none",
            },
            ".mj-modal-header-close-button": {
                backgroundColor: "transparent",
                width: "auto !important",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-between",
            }
        })
    }
}
