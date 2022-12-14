import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test("testing", () => {
  render(<Tutorial />);
  const title = screen.getByText("no value");
  const input = screen.getByPlaceholderText("text");
  const button = screen.getByDisplayValue("button");

  fireEvent.change(input, { target: { value: "hello" } });
  fireEvent.click(button);
  expect(title.innerHTML).toBe("hello");
});
