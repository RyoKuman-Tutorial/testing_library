import { render, screen } from "@testing-library/react";
import ByText from "./ByText";

test("ByText test", () => {
  render(<ByText />);
  const h1 = screen.getByText("h1"); // text 가 h1 인 노드 검색, <h1>h1</h1>
  const p = screen.getByText("p"); // text 가 p 인 노드 검색, <p>p</p>
  const span = screen.getByText("span"); // text 가 span 인 노드 검색, <span>span</span>
  const button: HTMLInputElement = screen.getByText("button"); // text 가 button 인 노드 검색, <input type="button" value="button" />;

  expect(h1.nodeName).toBe("H1");
  expect(p.nodeName).toBe("P");
  expect(span.nodeName).toBe("SPAN");
  expect(button.nodeName).toBe("INPUT");
  expect(button.type).toBe("button");
});
