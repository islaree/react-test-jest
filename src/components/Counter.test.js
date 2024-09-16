import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test("クリック時にカウントアップされているかを確認", () => {
  render(<Counter />);

  const button = screen.getByText("count up");
  const countText = screen.getByText(/count:/);

  expect(countText).toHaveTextContent("count: 0");

  fireEvent.click(button);

  expect(countText).toHaveTextContent("count: 1");
});
