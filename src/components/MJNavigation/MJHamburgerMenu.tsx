import React, { useId, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import type { MJNavigationMenuLink } from "./MJNavigation";

export interface MJHamburgerMenuProps {
  links: MJNavigationMenuLink[];
  "aria-label"?: string;
}

/** Mobile-only navigation menu controlled by a WAI-ARIA disclosure button. */
export const MJHamburgerMenu = ({ links, "aria-label": ariaLabel = "Open navigation menu" }: MJHamburgerMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const close = () => setOpen(false);

  return <>
    <IconButton aria-label={open ? "Close navigation menu" : ariaLabel} aria-controls={menuId} aria-expanded={open} aria-haspopup="menu" color="inherit" onClick={() => setOpen((value) => !value)}><MenuIcon /></IconButton>
    <Drawer anchor="right" open={open} onClose={close}>
      <Box id={menuId} component="nav" aria-label="Mobile navigation" sx={{ width: 280, pt: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 1 }}><IconButton aria-label="Close navigation menu" onClick={close}><CloseIcon /></IconButton></Box>
        <List component="ul" disablePadding>
          {links.map(({ label, href, current, target, rel }) => <ListItem component="li" key={`${label}-${href}`} disablePadding>
            <ListItemButton component={Link} href={href} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)} aria-current={current ? "page" : undefined} onClick={close}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>)}
        </List>
      </Box>
    </Drawer>
  </>;
};

MJHamburgerMenu.displayName = "MJHamburgerMenu";
export default MJHamburgerMenu;
