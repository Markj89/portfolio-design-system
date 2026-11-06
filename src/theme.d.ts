import '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Theme {
        radii: {
            sm: number;
            md: number;
            lg: number;
        };
    }

    interface ThemeOptions {
        radii?: {
            sm?: number;
            md?: number;
            lg?: number;
        };
    }
    
    /**
     * Extend Palette to accept custom color tokens  
     */
    interface Palette {
        brand: {
            primary: string;
            secondary: string;
        };
    }

    interface PaletteOptions {
        brand?: {
            primary?: string;
            secondary?: string;
        };
    }
}
