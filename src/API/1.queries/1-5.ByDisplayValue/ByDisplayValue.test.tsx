import { render, screen } from "@testing-library/react";
import ByDisplayValue from "./ByDisplayValue";

test("ByDisplayValue Test", async () => {
  render(<ByDisplayValue />);
  const input1: HTMLInputElement = screen.getByPlaceholderText("1");
  // placeholder가 1인 노드를 검색, <input type="text" placeholder="1" />
  const input2: HTMLInputElement = screen.getByPlaceholderText("2");
  // placeholder가 2인 노드를 검색, <input type="text" placeholder="2" />
  const input3: HTMLInputElement = screen.getByPlaceholderText("3");
  // placeholder가 3인 노드를 검색, <input type="text" placeholder="3" />

  input1.value = "input1";
  input2.value = "input2";
  input3.value = "input3";

  const disval1 = screen.getByDisplayValue("input1");
  // display 된 value 값이 input1 인 노드 검색, <input type="text" placeholder="1" />
  const disval2 = screen.getByDisplayValue("input2");
  // display 된 value 값이 input2 인 노드 검색, <input type="text" placeholder="2" />
  const disval3 = screen.getByDisplayValue("input3");
  // display 된 value 값이 input3 인 노드 검색, <input type="text" placeholder="3" />

  expect(disval1).toBe(input1);
  expect(disval2).toBe(input2);
  expect(disval3).toBe(input3);
});
