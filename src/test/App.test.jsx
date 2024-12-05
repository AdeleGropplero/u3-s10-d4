import { describe, it, expect, test } from "vitest";
import App from "../App";
import Welcome from "../components/Welcome";
import { fireEvent, render, screen } from "@testing-library/react";

/* describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
}); */

describe("Componente Welcome", () => {
  test("Render di Welcome", () => {
    render(<Welcome />);
    const h1 = screen.getByText(/welcome/i);
    expect(h1).toBeInTheDocument();
  });
});
