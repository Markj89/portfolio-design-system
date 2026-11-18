import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import MJNavigation from "../MJNavigation";

const meta = {
  title: "Organisms/MJNavigation/Overview",
  component: MJNavigation,
  parameters: { layout: "fullscreen" },
  args: {
    logo: "https://placehold.co/120x40?text=MJ",
    image_alt: "MJ Design System",
    menuLinks: [
      { label: "Home", href: "#home", current: true },
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
    ],
    right: <Button color="inherit">Contact</Button>,
  },
} satisfies Meta<typeof MJNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithCustomRegions: Story = {
  args: {
    left: <strong>MJ</strong>,
    center: <span>Selected work</span>,
    right: <Button color="inherit">Get in touch</Button>,
  },
};
