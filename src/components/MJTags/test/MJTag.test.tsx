import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";
import MJTag from "../MJTag";

const theme = createTheme();

describe("Tag Component", () => {
  it("should render tag component correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <MJTag appearance={"light"} data-testid={"tag-test-id"} closeButton={false} color="primary">Hello</MJTag>
      </ThemeProvider>,
    );
    const element = screen?.getByTestId("tag-test-id");
    expect(element).toBeInTheDocument();
  });
});
