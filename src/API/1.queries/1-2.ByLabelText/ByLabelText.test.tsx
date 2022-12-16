import { render, screen, getByLabelText } from "@testing-library/react";
import ByLabelText from "./ByLabelText";

test("testing is running", () => {
  render(<ByLabelText />);

  const div1 = screen.getByRole("div1"); // <div role="div1">
  const div1Cheese: HTMLInputElement = getByLabelText(div1, "Do you like cheese?");
  // label 값이 Do you like cheese? 인 <input type="checkbox" id="cheese" placeholder="cheese" /> 특정
  const div1Bread: HTMLInputElement = getByLabelText(div1, "Do you like bread?");
  // label 값이 Do you like bread? 인 <input type="checkbox" id="bread" placeholder="bread" /> 특정

  expect(div1Cheese.placeholder).toBe("cheese");
  expect(div1Bread.placeholder).toBe("bread");

  const div2 = screen.getByRole("div2"); // <div role="div2">
  const div2Input: HTMLInputElement = getByLabelText(div2, "textInput", { selector: "input" }); // label 값이 textInput 인 input 검색, <input type="text" placeholder="textInput" />
  const div2TextArea: HTMLInputElement = getByLabelText(div2, "textInput", { selector: "textarea" }); // label 값이 textInput 인 textarea 검색, <textarea />

  expect(div2Input.placeholder).toBe("this is input");
  expect(div2TextArea.placeholder).toBe("this is textarea");
});
