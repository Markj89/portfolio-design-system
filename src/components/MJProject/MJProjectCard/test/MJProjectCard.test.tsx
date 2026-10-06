import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import theme from "../../../../theme";
import { MJProjectCard } from "../MJProjectCard";
import "@testing-library/jest-dom";

const defaultProps = {
  title: "CTA Tracker App",
  description: "Real-time train tracking and arrival predictions.",
  imageUrl: "https://cdn.example.com/cta-tracker.png",
  imageAlt: "CTA Tracker map preview",
  projectUrl: "https://example.com/cta-tracker",
  repositoryUrl: "https://github.com/example/cta-tracker",
};

function renderCard(props: Partial<typeof defaultProps> = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <MJProjectCard {...defaultProps} {...props} />
    </ThemeProvider>,
  );
}

describe("MJProjectCard", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders project details and the remote image", () => {
    renderCard();

    expect(screen.getByRole("heading", { name: "CTA Tracker App" })).toBeVisible();
    expect(screen.getByText(defaultProps.description)).toBeVisible();
    expect(screen.getByRole("img", { name: defaultProps.imageAlt })).toHaveAttribute(
      "src",
      defaultProps.imageUrl,
    );
  });

  it("renders repository and project links", () => {
    renderCard();

    expect(screen.getByRole("link", { name: "CTA Tracker App source code" })).toHaveAttribute(
      "href",
      defaultProps.repositoryUrl,
    );
    expect(screen.getByRole("button", { name: /View Project/ })).toBeVisible();
  });

  it("opens the project URL when the project action is pressed", async () => {
    const openWindow = vi.spyOn(window, "open").mockReturnValue(null);
    const user = userEvent.setup();
    renderCard();

    await user.click(screen.getByRole("button", { name: /View Project/ }));

    expect(openWindow).toHaveBeenCalledWith(
      defaultProps.projectUrl,
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("omits links when their URLs are not provided", () => {
    renderCard({ projectUrl: "", repositoryUrl: "" });

    expect(screen.queryByRole("link", { name: /source code/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /View Project/ })).not.toBeInTheDocument();
  });
});