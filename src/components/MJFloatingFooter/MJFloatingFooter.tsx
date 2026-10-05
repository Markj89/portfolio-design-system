import React, { useCallback, useEffect, useRef, useState} from "react";
import { Fab } from "@mui/material";
import { MJFloatingFooterProps } from "./MJFloatingFooter.types";
import Container from "./Container";
import clsx from "clsx";
import MJSegmentControl from "../MJSegmentControl/MJSegmentControl";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from '@mui/icons-material/Chat';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CodeIcon from '@mui/icons-material/Code';
import { TOOLTIP_PLACEMENT } from "./../MJTooltip/MJTooltip.types";
import "./MJFloatingFooter.scss";

export const SECTION_LIST = [
    {
        value: "home",
        childAriaLabel: "Home",
        icon: <HomeIcon />,
        toolTip: {
            title: "Home",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.top,
            arrow: true,
        }
    },
    {
        value: "projects",
        childAriaLabel: "My Project Section",
        icon: <CodeIcon />,
        toolTip: {
            title: "My Projects",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.top,
            arrow: true,
        }
    },
    {
        value: "about",
        childAriaLabel: "about",
        icon: <InsertEmoticonIcon />,
        toolTip: {
            title: "About me",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.top,
            arrow: true,
        }
    },
    {
        value: "chat",
        childAriaLabel: "Chat with me!",
        icon: <ChatIcon />,
        toolTip: {
            title: "Chat with me!",
            variant: "secondary",
            position: TOOLTIP_PLACEMENT.top,
            arrow: true,
        }
    }
];

const MJFloatingFooter = (props: MJFloatingFooterProps) => {
    const { 
        children, 
        color, 
        variant, 
        disabled, 
        component,
        displacementScale = 70,
        blurAmount = 0.0625,
        saturation = 140,
        aberrationIntensity = 2,
        elasticity = 0.15,
        borderRadius = 999,
        globalMousePos: externalGlobalMousePos,
        mouseOffset: externalMouseOffset,
        mouseContainer = null,
        className = "",
        padding = "5px 32px",
        overLight = false,
        style = {},
        mode = "standard",
        onClick,
    } = props;

    const glassRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [glassSize, setGlassSize] = useState({ width: 270, height: 50 })
    const [internalGlobalMousePos, setInternalGlobalMousePos] = useState({ x: 0, y: 0 })
    const [internalMouseOffset, setInternalMouseOffset] = useState({ x: 0, y: 0 })

    // Use external mouse position if provided, otherwise use internal
    const globalMousePos = externalGlobalMousePos || internalGlobalMousePos
    const mouseOffset = externalMouseOffset || internalMouseOffset

    // Internal mouse tracking
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
        const container = mouseContainer?.current || glassRef.current
        if (!container) {
            return
        }

        const rect = container.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        setInternalMouseOffset({
            x: ((e.clientX - centerX) / rect.width) * 100,
            y: ((e.clientY - centerY) / rect.height) * 100,
        })

        setInternalGlobalMousePos({
            x: e.clientX,
            y: e.clientY,
        })
        },
        [mouseContainer],
    );

    // Set up mouse tracking if no external mouse position is provided
    useEffect(() => {
        const container = mouseContainer?.current || glassRef.current
        if (!container) return;
        if (externalGlobalMousePos && externalMouseOffset) return;

        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        }
    }, [handleMouseMove, mouseContainer, externalGlobalMousePos, externalMouseOffset]);

    // Calculate directional scaling based on mouse position
    const calculateDirectionalScale = useCallback(() => {
        if (!globalMousePos.x || !globalMousePos.y || !glassRef.current) return "scale(1)"

        const rect = glassRef.current.getBoundingClientRect();
        const pillCenterX = rect.left + rect.width / 2
        const pillCenterY = rect.top + rect.height / 2
        const pillWidth = glassSize.width
        const pillHeight = glassSize.height
        const deltaX = globalMousePos.x - pillCenterX
        const deltaY = globalMousePos.y - pillCenterY

        // Calculate distance from mouse to pill edges (not center)
        const edgeDistanceX = Math.max(0, Math.abs(deltaX) - pillWidth / 2)
        const edgeDistanceY = Math.max(0, Math.abs(deltaY) - pillHeight / 2)
        const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY)

        // Activation zone: 200px from edges
        const activationZone = 200

        // If outside activation zone, no effect
        if (edgeDistance > activationZone) return "scale(1)";

        // Calculate fade-in factor (1 at edge, 0 at activation zone boundary)
        const fadeInFactor = 1 - edgeDistance / activationZone

        // Normalize the deltas for direction
        const centerDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        if (centerDistance === 0) return "scale(1)";

        const normalizedX = deltaX / centerDistance
        const normalizedY = deltaY / centerDistance

        // Calculate stretch factors with fade-in
        const stretchIntensity = Math.min(centerDistance / 300, 1) * elasticity * fadeInFactor

        // X-axis scaling: stretch horizontally when moving left/right, compress when moving up/down
        const scaleX = 1 + Math.abs(normalizedX) * stretchIntensity * 0.3 - Math.abs(normalizedY) * stretchIntensity * 0.15

        // Y-axis scaling: stretch vertically when moving up/down, compress when moving left/right
        const scaleY = 1 + Math.abs(normalizedY) * stretchIntensity * 0.3 - Math.abs(normalizedX) * stretchIntensity * 0.15

        return `scaleX(${Math.max(0.8, scaleX)}) scaleY(${Math.max(0.8, scaleY)})`
    }, [globalMousePos, elasticity, glassSize]);

    // Helper function to calculate fade-in factor based on distance from element edges
    const calculateFadeInFactor = useCallback(() => {
        if (!globalMousePos.x || !globalMousePos.y || !glassRef.current) return 0;

        const rect = glassRef.current.getBoundingClientRect()
        const pillCenterX = rect.left + rect.width / 2
        const pillCenterY = rect.top + rect.height / 2
        const pillWidth = glassSize.width
        const pillHeight = glassSize.height

        const edgeDistanceX = Math.max(0, Math.abs(globalMousePos.x - pillCenterX) - pillWidth / 2)
        const edgeDistanceY = Math.max(0, Math.abs(globalMousePos.y - pillCenterY) - pillHeight / 2)
        const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY)

        const activationZone = 200
        return edgeDistance > activationZone ? 0 : 1 - edgeDistance / activationZone
    }, [globalMousePos, glassSize]);

    // Helper function to calculate elastic translation
    const calculateElasticTranslation = useCallback(() => {
        if (!glassRef.current) return { x: 0, y: 0 };

        const fadeInFactor = calculateFadeInFactor()
        const rect = glassRef.current.getBoundingClientRect()
        const pillCenterX = rect.left + rect.width / 2
        const pillCenterY = rect.top + rect.height / 2

        return {
        x: (globalMousePos.x - pillCenterX) * elasticity * 0.1 * fadeInFactor,
        y: (globalMousePos.y - pillCenterY) * elasticity * 0.1 * fadeInFactor,
        }
    }, [globalMousePos, elasticity, calculateFadeInFactor]);

    // Update glass size whenever component mounts or window resizes
    useEffect(() => {
        const updateGlassSize = () => {
            if (glassRef.current) {
                const rect = glassRef.current.getBoundingClientRect()
                setGlassSize({ width: rect.width, height: rect.height })
            }
        }

        updateGlassSize()
        window.addEventListener("resize", updateGlassSize)
        return () => window.removeEventListener("resize", updateGlassSize)
    }, []);

    const transformStyle = `translate(calc(-50% + ${calculateElasticTranslation().x}px), calc(-50% + ${calculateElasticTranslation().y}px)) ${isActive && Boolean(onClick) ? "scale(0.96)" : calculateDirectionalScale()}`

    const baseStyle = {
        ...style,
        //transform: transformStyle,
        transition: "all ease-out 0.2s",
    };

    const positionStyles = {
        position: baseStyle.position || "relative",
        top: baseStyle.top || "50%",
        left: baseStyle.left || "50%",
    };

    const footerComponent = (): React.ReactNode => (
        <footer className={clsx("liquid-glass-footer")}>
            <div className={clsx("footer-content")}>

                <div
                    className={clsx(`transition-all duration-150 ease-in-out pointer-events-none ${overLight ? "opacity-20" : "opacity-0"}`)}
                    style={{
                        ...positionStyles,
                        height: glassSize.height,
                        width: glassSize.width,
                        borderRadius: `${borderRadius}px`,
                        transform: baseStyle.transform,
                        transition: baseStyle.transition,
                    }}
                />
                <div
                    className={clsx(`transition-all duration-150 ease-in-out pointer-events-none mix-blend-overlay ${overLight ? "opacity-100" : "opacity-0"}`)}
                    style={{
                        ...positionStyles,
                        height: glassSize.height,
                        width: glassSize.width,
                        borderRadius: `${borderRadius}px`,
                        transform: baseStyle.transform,
                        transition: baseStyle.transition,
                    }}
                />
                <Container 
                    ref={glassRef}
                    className={className}
                    style={baseStyle}
                    borderRadius={borderRadius}
                    displacementScale={overLight ? displacementScale * 0.5 : displacementScale}
                    blurAmount={blurAmount}
                    saturation={saturation}
                    aberrationIntensity={aberrationIntensity}
                    glassSize={glassSize}
                    padding={padding}
                    mouseOffset={mouseOffset}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseDown={() => setIsActive(true)}
                    onMouseUp={() => setIsActive(false)}
                    active={isActive}
                    overLight={overLight}
                    onClick={onClick}
                    mode={mode}
                >
                    <MJSegmentControl segments={SECTION_LIST} parentAriaLabel={"Floating Footer bar"} />
                </Container>
            </div>
        </footer>
    );

    return (
        <Fab 
            variant={variant} 
            color={color} 
            disabled={disabled} 
            component={footerComponent} 
        />
    );
};

export default MJFloatingFooter;