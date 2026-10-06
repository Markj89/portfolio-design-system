import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import theme from "../../../../theme";
import { MJProjectPage } from "../MJProjectPage";
import type { MJProjectDetails } from "../../MJProject.types";
import "@testing-library/jest-dom";

const project: MJProjectDetails = {
  title: "CTA Tracker App",
  description: "Real-time train tracking and arrival predictions.",
  imageUrl: "https://cdn.example.com/cta-tracker.png",
  imageAlt: "CTA Tracker map preview",
  role: "Product design and development",
  year: "2026",
  technologies: ["Next.js", "TypeScript"],
  sections: [
    {
      heading: "Overview",
      body: "A focused transit tracking experience.",
    },
    {
      heading: "Challenge",
      body: "Make route status and arrival information easy to scan.",
    },
  ],
  projectUrl: "https://example.com/cta-tracker",
  repositoryUrl: "https://github.com/example/cta-tracker",
};

function renderProject(details: MJProjectDetails = project) {
  return render(
    <ThemeProvider theme={theme}>
      <MJProjectPage project={details} />
    </ThemeProvider>,
  );
}

describe("MJProjectPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the project heading, summary, and hero image", () => {
    renderProject();

    expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
    expect(screen.getByText(project.description)).toBeVisible();
    expect(screen.getByRole("img", { name: project.imageAlt })).toHaveAttribute(
      "src",
      project.imageUrl,
    );
  });

  it("renders project metadata, technologies, and detail sections", () => {
    renderProject();

    expect(screen.getByText("Product design and development")).toBeVisible();
    expect(screen.getByText("2026")).toBeVisible();
    expect(screen.getByText("Next.js")).toBeVisible();
    expect(screen.getByText("TypeScript")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Overview" })).toBeVisible();
    expect(screen.getByText("A focused transit tracking experience.")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Challenge" })).toBeVisible();
  });

  it("renders repository and project actions", () => {
    renderProject();

    expect(screen.getByRole("link", { name: "CTA Tracker App source code" })).toHaveAttribute(
      "href",
      project.repositoryUrl,
    );
    expect(screen.getByRole("button", { name: /Visit Project/ })).toBeVisible();
  });

  it("opens the project URL when the project action is pressed", async () => {
    const openWindow = vi.spyOn(window, "open").mockReturnValue(null);
    const user = userEvent.setup();
    renderProject();

    await user.click(screen.getByRole("button", { name: /Visit Project/ }));

    expect(openWindow).toHaveBeenCalledWith(project.projectUrl, "_blank", "noopener,noreferrer");
  });

  it("omits optional metadata, sections, and actions when not provided", () => {
    const minimalProject: MJProjectDetails = {
      title: "Small Project",
      description: "A short description.",
      imageUrl: "https://cdn.example.com/small-project.png",
    };

    renderProject(minimalProject);

    expect(screen.getByRole("heading", { level: 1, name: "Small Project" })).toBeVisible();
    expect(screen.queryByText("Technologies")).not.toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: "Project links" })).not.toBeInTheDocument();
  });
});