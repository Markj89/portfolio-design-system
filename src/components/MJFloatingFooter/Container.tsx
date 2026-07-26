import React, { forwardRef, useId, useEffect, memo, useState } from "react";
import { ContainerProps } from "./MJFloatingFooter.types";
import { generateShaderDisplacementMap } from "./MJFloatingFooter.logic";
import clsx from "clsx";
import Filter from "./Filter";

export const Container = forwardRef<HTMLDivElement, React.PropsWithChildren<ContainerProps>
>(
    (
    {
      children,
      className = "",
      style,
      displacementScale = 25,
      blurAmount = 12,
      saturation = 180,
      aberrationIntensity = 2,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      active = false,
      overLight = false,
      borderRadius = 999,
      padding = "12px 32px",
      glassSize = { width: 270, height: 69 },
      onClick,
      mode = "standard",
    },
    ref,
  ) => {
    const filterId = useId();
    const [shaderMapUrl, setShaderMapUrl] = useState<string>("");
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

     // Generate shader displacement map when in shader mode
    useEffect(() => {
      if (mode === "shader") {
        const url = generateShaderDisplacementMap(glassSize.width, glassSize.height)
        setShaderMapUrl(url)
      }
    }, [mode, glassSize.width, glassSize.height])

    const backdropStyle = {
      filter: isFirefox ? null : `url(#${filterId})`,
      backdropFilter: `blur(${(overLight ? 12 : 4) + blurAmount * 32}px) saturate(${saturation}%)`,
    }
    const handleClick = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((e.key === "Enter" || e.key === " ") && onClick) {
        onClick();
      }
    };

    return (
      <div 
        ref={ref} 
        className={clsx(`relative ${className} ${active ? "active" : ""} ${onClick ? "cursor-pointer" : ""}`)} 
        style={style} 
        onClick={onClick}
        onKeyDown={(e) => handleClick(e)}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <Filter mode={mode} id={filterId} displacementScale={displacementScale} aberrationIntensity={aberrationIntensity} width={glassSize.width} height={glassSize.height} shaderMapUrl={shaderMapUrl} />

        <div
          className={clsx("glass")}
          style={{
            borderRadius: `${borderRadius}px`,
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "24px",
            padding,
            overflow: "hidden",
            transition: "all 0.2s ease-in-out",
            boxShadow: overLight ? "0px 16px 70px rgba(0, 0, 0, 0.75)" : "0px 12px 40px rgba(0, 0, 0, 0.25)",
          }}
        >
          <span
            className="glass__warp"
            style={
              {
                ...backdropStyle,
                position: "absolute",
                inset: "0",
              } as React.CSSProperties
            }
          />
          <div
            className="transition-all duration-150 ease-in-out"
            style={{
              position: "relative",
              zIndex: 1,
              font: "500 20px/1 system-ui",
              textShadow: overLight ? "0px 2px 12px rgba(0, 0, 0, 0)" : "0px 2px 12px rgba(0, 0, 0, 0.4)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  },
);

Container.displayName = "Container";
export default memo(Container);