import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MJModal } from "../MJModal";
import { renderWithTheme } from "./../../../testUtils/renderWithTheme";
import { vi } from "vitest";

describe("MJModal Component", () => {
  it("renders its children when open", () => {
    renderWithTheme(
      <MJModal open={true} onClose={vi.fn()}>
        <div>Modal content</div>
      </MJModal>,
    );

    expect(screen.getByText("Modal content")).toBeVisible();
  });

  it("calls onClose when escape is pressed", async () => {
    const onClose = vi.fn();

    renderWithTheme(
      <MJModal open={true} onClose={onClose}>
        <div>Modal content</div>
      </MJModal>,
    );

    fireEvent.keyDown(screen.getByRole("presentation"), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      which: 27,
    });

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith(expect.any(Object), "escapeKeyDown");
    });
  });

  it("calls onClose when the backdrop is clicked", async () => {
    const onClose = vi.fn();

    renderWithTheme(
      <MJModal open={true} onClose={onClose}>
        <div>Modal content</div>
      </MJModal>,
    );

    const backdrop = document.body.querySelector(".MuiBackdrop-root");

    expect(backdrop).toBeInTheDocument();

    if (!backdrop) {
      throw new Error("Expected modal backdrop to be rendered");
    }

    fireEvent.mouseDown(backdrop);
    fireEvent.click(backdrop);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith(expect.any(Object), "backdropClick");
    });
  });

  it("does not render children when closed", () => {
    renderWithTheme(
      <MJModal open={false} onClose={vi.fn()}>
        <div>Modal content</div>
      </MJModal>,
    );

    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });
});
