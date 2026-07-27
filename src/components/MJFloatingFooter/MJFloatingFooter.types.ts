import React from "react";
import { FabProps } from "@mui/material";

export interface MJFloatingFooterProps extends FabProps {
    children: React.ReactNode;
    displacementScale?: number;
    blurAmount?: number;
    saturation?: number;
    aberrationIntensity?: number;
    elasticity?: number;
    borderRadius?: number;
    globalMousePos?: { x: number; y: number };
    mouseOffset?: { x: number; y: number };
    mouseContainer?: React.RefObject<HTMLElement | null> | null;
    className?: string;
    padding?: string;
    style?: React.CSSProperties;
    overLight?: boolean;
    mode?: "standard" | "polar" | "prominent" | "shader";
    onClick?: () => void;
}

export interface FilterProps {
    id: string; 
    displacementScale: number; 
    aberrationIntensity: number; 
    width: number; 
    height: number; 
    mode: "standard" | "polar" | "prominent" | "shader"; 
    shaderMapUrl?: string;
}

export interface ContainerProps {
    className?: string
    style?: React.CSSProperties
    displacementScale?: number
    blurAmount?: number
    saturation?: number
    aberrationIntensity?: number
    mouseOffset?: { x: number; y: number }
    onMouseLeave?: () => void
    onMouseEnter?: () => void
    onMouseDown?: () => void
    onMouseUp?: () => void
    active?: boolean
    overLight?: boolean
    borderRadius?: number
    padding?: string
    glassSize?: { width: number; height: number }
    onClick?: () => void
    mode?: "standard" | "polar" | "prominent" | "shader"
}