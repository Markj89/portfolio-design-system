import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MJModal } from "../MJModal";
import { MJModalHead } from "../MJModalHead/MJModalHead";
import { MJModalHeader } from "../MJModalHeader/MJModalHeader";
import { renderWithTheme } from "./../../../testUtils/renderWithTheme";
import { vi } from "vitest";

describe("MJModal Component", () => {
  it("renders its children when open", () => {
    renderWithTheme(
      <MJModal open={true} onClose={vi.fn()} aria-labelledby="modal-title">
        <h2 id="modal-title">Modal content</h2>
      </MJModal>,
    );

    expect(screen.getByRole("dialog", { name: "Modal content" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Modal content" })).toBeVisible();
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("renders a semantic header and an operable close button", async () => {
    const user = userEvent.setup();
    const onRequestClose = vi.fn();

    renderWithTheme(
      <MJModal open={true} onClose={vi.fn()} aria-labelledby="modal-title">
        <MJModalHead onRequestClose={onRequestClose}>
          <MJModalHeader color="black" variant="h6" id="modal-title">
            Modal title
          </MJModalHeader>
        </MJModalHead>
      </MJModal>,
    );

    expect(document.body.querySelector("header")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when escape is pressed", async () => {
    const onClose = vi.fn();

    renderWithTheme(
      <MJModal open={true} onClose={onClose} aria-label="Test modal">
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
      <MJModal open={true} onClose={onClose} aria-label="Test modal">
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
      <MJModal open={false} onClose={vi.fn()} aria-label="Test modal">
        <div>Modal content</div>
      </MJModal>,
    );

    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });
});
