import { render, screen, getByLabelText } from "@testing-library/react";
import ByAltText from "./ByAltText";

test("ByAltText test", () => {
  render(<ByAltText />);
  const img = screen.getByAltText("img");
  expect(img.id).toBe("img");
});
