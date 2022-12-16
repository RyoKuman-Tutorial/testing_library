import { render, screen } from "@testing-library/react";
import ByTestId from "./ByTestId";

test("ByTestId Test", async () => {
  render(<ByTestId />);
  const h1 = screen.getByTestId("h1");
  // test-id 가 h1 인 노드 검색, <h1 data-testid="h1">h1</h1>
  const input: HTMLInputElement = screen.getByTestId("input");
  // test-id 가 input 인 노드 검색, <input type="text" data-testid="input" placeholder="input" />
  const button: HTMLInputElement = screen.getByTestId("button");
  // test-id 가 input 인 노드 검색, <button value="button" data-testid="button" />

  expect(h1.innerHTML).toBe("h1");
  expect(input.placeholder).toBe("input");
  expect(button.value).toBe("button");
});
