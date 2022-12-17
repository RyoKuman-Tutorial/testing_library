import { useState } from "react";

function WaitFor() {
  const [value, setValue] = useState("sleep");
  const onClick = () => setTimeout(() => setValue(value === "sleep" ? "awake" : "sleep"), 100);

  return (
    <div>
      <div role="div1">
        <h1>{value}</h1>
        <button onClick={onClick}></button>
      </div>
    </div>
  );
}

export default WaitFor;
