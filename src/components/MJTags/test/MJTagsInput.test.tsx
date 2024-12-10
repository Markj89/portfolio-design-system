import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";
import MJTagsInput from "../MJTagsInput";

const theme = createTheme();

describe("Tag Component", () => {
  it("should render tag component correctly", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MJTagsInput darkMode={false} />
      </ThemeProvider>,
    );
    await waitFor(() => expect(screen.getAllByPlaceholderText("Type something")).toBeTruthy());
  });

  it('should render dark mode tag', async () => {
    render(
      <ThemeProvider theme={theme}>
        <MJTagsInput darkMode={false} />
      </ThemeProvider>,
    );
    const tagInput = screen.getByRole('input');
    fireEvent.change(tagInput, { target: { value: 'Hello' } });
    fireEvent.keyDown(tagInput, { key: 'Enter', code: 'Enter', charCode: 13 });
  });
});
