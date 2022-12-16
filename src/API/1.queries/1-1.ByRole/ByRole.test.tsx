import { render, screen, getByRole, findByRole } from "@testing-library/react";
import ByRole from "./ByRole";

test("ByRole Test", async () => {
  render(<ByRole />); // ByRole 렌더

  const div1 = screen.getByRole("div1"); // div1
  const div1H1 = getByRole(div1, "heading"); // div1 의 내부에 있는 h 태그 검색
  expect(div1H1.innerHTML).toBe("div1H1");

  const div2 = screen.getByRole("div2"); // div2
  const div2H1 = getByRole(div2, "heading"); // div2 의 내부에 있는 h 태그 검색
  expect(div2H1.innerHTML).toBe("div2H1");
  // divH1, divH2 둘다 h1 이지만, 검색 범위가 다르기에 에러가 나타나지 않음
  // screen 사용할 시에, 에러 발생

  const div3 = screen.getByRole("div3"); // div3
  const button: HTMLInputElement = getByRole(div3, "button"); // button 요소 검색
  const textInput: HTMLInputElement = getByRole(div3, "textbox"); // textbox 요소 검색

  expect(button.value).toBe("button");
  expect(textInput.placeholder).toBe("textInput");
  // 각각 버튼과 textbox 요소를 검색한다. role이 다르므로 에러가 나타나지 않는다.

  const div4 = screen.getByRole("div4"); // div4
  const text = getByRole(div4, "pp", { exact: false });
  expect(text.innerHTML).toBe("p tag");
  // exact 가 false 이므로 ppp 가 아닌 pp 만 검색해도 잘 작동함

  const div5 = screen.getByRole("div5"); // div5
  const div5H1 = getByRole(div5, "heading", { level: 1 }); // h1
  const div5H2 = getByRole(div5, "heading", { level: 2 }); // h2
  const div5H3 = getByRole(div5, "heading", { level: 3 }); // h3
  const div5H4 = getByRole(div5, "heading", { level: 4 }); // h4
  expect(div5H1.innerHTML).toBe("h1");
  expect(div5H2.innerHTML).toBe("h2");
  expect(div5H3.innerHTML).toBe("h3");
  expect(div5H4.innerHTML).toBe("h4");
});
