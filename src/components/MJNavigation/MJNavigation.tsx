import React, { type ReactNode } from "react";
import { AppBar, type AppBarProps, Box, Link, Toolbar, type ToolbarProps } from "@mui/material";
import MJHamburgerMenu from "./MJHamburgerMenu";

/** A link displayed by the desktop menu bar and mobile hamburger menu. */
export interface MJNavigationMenuLink {
  label: string;
  href: string;
  current?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export interface MJNavigationProps extends Omit<AppBarProps, "children"> {
  /** Links rendered in the desktop menu bar and mobile hamburger menu. */
  menuLinks?: MJNavigationMenuLink[];
  /** Content aligned to the start of the toolbar. Defaults to `logo`. */
  left?: ReactNode;
  /** Content aligned in the center of the toolbar, after the menu links. */
  center?: ReactNode;
  /** Content aligned to the end of the toolbar. */
  right?: ReactNode;
  /** A logo image source. Use `left` when a richer logo element is needed. */
  logo?: string;
  /** Alternative text for the logo. Required when `logo` is supplied. */
  image_alt?: string;
  /** Accessible label for the navigation landmark. */
  "aria-label"?: string;
  /** Props applied to the underlying MUI toolbar. */
  ToolbarProps?: ToolbarProps;
}

const MenuBar = ({ links }: { links: MJNavigationMenuLink[] }) => (
  <Box component="ul" aria-label="Primary navigation links" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2, listStyle: "none", m: 0, p: 0 }}>
    {links.map(({ label, href, current, target, rel }) => (
      <Box component="li" key={`${label}-${href}`}>
        <Link href={href} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)} aria-current={current ? "page" : undefined} color="inherit" underline="hover" sx={{ fontWeight: current ? 700 : 500 }}>
          {label}
        </Link>
      </Box>
    ))}
  </Box>
);

/** Responsive application navigation with a desktop menu bar and mobile drawer. */
export const MJNavigation = ({ menuLinks = [], left, center, right, logo, image_alt, position = "static", className, "aria-label": ariaLabel = "Main navigation", ToolbarProps, ...appBarProps }: MJNavigationProps) => {
  const logoElement = logo ? <img src={logo} alt={image_alt ?? ""} /> : null;
  const leftContent = left ?? logoElement;

  return (
    <AppBar position={position} className={className} {...appBarProps}>
      <Toolbar {...ToolbarProps} sx={{ minHeight: 64, ...ToolbarProps?.sx }}>
        <Box component="nav" aria-label={ariaLabel} sx={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", width: "100%", gap: 2 }}>
          <Box sx={{ minWidth: 0, justifySelf: "start" }}>{leftContent}</Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, minWidth: 0 }}>
            <MenuBar links={menuLinks} />
            <Box sx={{ display: { xs: "none", md: "block" } }}>{center}</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1, minWidth: 0 }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>{right}</Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}><MJHamburgerMenu links={menuLinks} /></Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

MJNavigation.displayName = "MJNavigation";
export default MJNavigation;
