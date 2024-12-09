import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
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
});
