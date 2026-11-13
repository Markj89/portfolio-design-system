import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MJNavigation from "../MJNavigation";
import { renderWithTheme } from "../../../testUtils/renderWithTheme";

const links = [{ label: "Home", href: "/", current: true }, { label: "Projects", href: "/projects" }];

describe("MJNavigation", () => {
  it("renders a labelled navigation landmark and semantic desktop links", () => {
    renderWithTheme(<MJNavigation menuLinks={links} left={<span>Brand</span>} />);
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
  });

  it("opens and closes the mobile hamburger menu", async () => {
    const user = userEvent.setup();
    renderWithTheme(<MJNavigation menuLinks={links} />);
    const menuButton = screen.getByRole("button", { name: "Open navigation menu" });
    await user.click(menuButton);
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Close navigation menu" }));
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
