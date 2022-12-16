import { useState } from "react";

function FireEvent() {
  const [value, setValue] = useState<"not Clicked" | "Clicked">("not Clicked");
  const onClick = () => setValue(value === "not Clicked" ? "Clicked" : "not Clicked");

  return (
    <div>
      <div role="div1">
        <h1>{value}</h1>
        <button onClick={onClick}>click</button>
      </div>
    </div>
  );
}

export default FireEvent;
