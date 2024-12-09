import '@mui/material/styles';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme extends Theme {} // Add your custom theme properties here
}
/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}