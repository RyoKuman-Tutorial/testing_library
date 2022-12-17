import { createEvent, fireEvent, getByRole, render, screen } from "@testing-library/react";
import FireEvent from "./FIreEvent";

test("FireEvent test", () => {
  render(<FireEvent />);

  const div1 = screen.getByRole("div1");
  const div1H1 = getByRole(div1, "heading", { level: 1 });
  const div1Button: HTMLInputElement = getByRole(div1, "button");

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
  }); // event 선언 및 생성

  fireEvent(div1Button, clickEvent); // fire event
  expect(div1H1.innerHTML).toBe("Clicked");

  fireEvent.click(div1Button); // fire event
  expect(div1H1.innerHTML).toBe("not Clicked");

  const createdEvent = createEvent.click(div1Button); // 이벤트 선언 및 생성

  fireEvent(div1Button, createdEvent); // fire event
  expect(div1H1.innerHTML).toBe("Clicked");
  fireEvent(div1Button, createdEvent); // fire event
  expect(div1H1.innerHTML).toBe("not Clicked");
});
