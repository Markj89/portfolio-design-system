import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
        MuiButton: {
            defaultProps: {}
        }
    },
    typography: {
        fontWeightRegular: 'Medium',
        fontWeightBold: '700'
    },
    palette: {
        primary: {
            main: "#005A59",
            dark: '#3E3E40',
            light: '#FDFAF2'
        },
        secondary: {
            main: '#FDFAF2',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
    },
    
});

export default theme;