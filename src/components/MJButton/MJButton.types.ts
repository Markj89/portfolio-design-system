import { ButtonProps } from "@mui/material"

export interface MJButtonProps extends ButtonProps {
    children: JSX.Element;
    variant: 'contained' | 'outlined' | 'text';
    active?: boolean;
    [key: string]: any;
    onClick?: () => void;
    color?: "primary" | "secondary" | "error" | "warning" | "success";
    disabled: boolean;
}