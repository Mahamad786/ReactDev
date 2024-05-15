import { render, screen } from "@testing-library/react";
import UIShell from "./UIShell";

describe("UIShell", () => {
  test("renders heading", async () => {
    render(<UIShell />);
    expect(screen.getByRole("heading", { name: "This is a UIShell Component" })).toBeInTheDocument();
  });
});