import { render, screen } from "@testing-library/react";
import ByPlaceholderText from "./ByPlaceholderText";

test("ByRole Test", () => {
  render(<ByPlaceholderText />);
  const input = screen.getByPlaceholderText("input");
  // placeholder가 input인 요소 검색, <input type="text" placeholder="input" id="input" />
  const textarea = screen.getByPlaceholderText("textarea");
  // placeholder가 textarea인 요소 검색, <textarea placeholder="textarea" id="textarea" />

  expect(input.id).toBe("input");
  expect(textarea.id).toBe("textarea");
});
