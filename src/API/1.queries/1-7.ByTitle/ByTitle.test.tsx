import { render, screen } from "@testing-library/react";
import ByTitle from "./ByTitle";

test("ByTitle test", () => {
  render(<ByTitle />);
  const h1 = screen.getByTitle("h1");
  // title 이 h1 인 노드 검색, <h1 title="h1">h1</h1>
  const p = screen.getByTitle("p");
  // title 이 p 인 노드 검색, <p title="p">p</p>
  const span = screen.getByTitle("span");
  // title 이 span 인 노드 검색, <span title="span">span</span>;

  expect(h1.innerHTML).toBe("h1");
  expect(p.innerHTML).toBe("p");
  expect(span.innerHTML).toBe("span");
});
