import { getByRole, fireEvent, render, screen, waitFor } from "@testing-library/react";
import WaitFor from "./WaitFor";

test("WaitFor test", async () => {
  render(<WaitFor />);
  const div1 = screen.getByRole("div1");
  const div1Button = getByRole(div1, "button");
  const div1H1 = getByRole(div1, "heading", { level: 1 });

  fireEvent.click(div1Button);
  await waitFor(() => expect(div1H1).toHaveTextContent("awake")); // h1 의 innerText에 awake 가 contain 될 때 까지 대기
});
