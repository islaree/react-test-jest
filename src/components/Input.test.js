import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

test("インプットの変更が反映されているかを確認する", () => {
  render(<Input />);

  const input = screen.getByPlaceholderText("Enter name");

  userEvent.type(input, "John Doe");
  expect(input.value).toBe("John Doe");
});
