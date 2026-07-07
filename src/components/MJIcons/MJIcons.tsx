import React from "react";
import * as MuiIcons from "@mui/icons-material";
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";

export interface MJIconsProps extends SvgIconProps {
  iconName: keyof typeof MuiIcons;
}

const SvgIcon = styled(MuiSvgIcon, {
  name: "MJIcon",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2.25px",
}));

const MJIcons: React.FC<MJIconsProps> = ({ iconName, ...props }) => {
  const IconComponent = MuiIcons[iconName];

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent {...props} />;
};

export default MJIcons;
