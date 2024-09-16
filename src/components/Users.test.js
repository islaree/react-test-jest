import { render, screen, waitFor } from "@testing-library/react";
import { Users } from "./Users";

beforeEach(() => {
  global.fetch = jest.fn(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              json: () =>
                Promise.resolve([
                  { id: 1, name: "John Doe" },
                  { id: 2, name: "Jane Doe" },
                ]),
            }),
          100
        )
      )
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("APIから取得したユーザーが正しくレンダリングされる", async () => {
  render(<Users />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
});

test("APIが失敗した時のエラーメッセージが表示される", async () => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error("Failed to fetch users"))
  );

  render(<Users />);

  expect(await screen.findByText("Failed to fetch users")).toBeInTheDocument();
});

test("Usersコンポーネントのスナップショットが一致するか確認する", () => {
  const { asFragment } = render(<Users />);
  expect(asFragment()).toMatchSnapshot();
});
