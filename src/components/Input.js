import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      placeholder="Enter name"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
