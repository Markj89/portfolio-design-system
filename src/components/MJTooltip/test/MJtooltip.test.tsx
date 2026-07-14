import * as React from "react";
import { render, screen } from "@testing-library/react";
import MJTooltip from "../MJTooltip";
import { TOOLTIP_PLACEMENT } from "../MJTooltip.types";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const TooltipButton = () => (
    <MJTooltip title="This is a test">
        <button>Hover over me</button>
    </MJTooltip>
);

describe("Tooltip Component", () => {
    it("should render Tooltip component correctly", async () => {
        const user = userEvent.setup();
        render(<TooltipButton />);
        const hoverButton = screen.getByRole("button", { name: /Hover over me/i });
        await user.hover(hoverButton);
        const tooltipText = await screen.findByText(/This is a test/i);
        expect(tooltipText).toBeInTheDocument();
        // await user.unhover(hoverButton);
        // await screen.findByText(/This is a test/i);
        // expect(screen.queryByText(/This is a test/i)).not.toBeInTheDocument();
    });
});