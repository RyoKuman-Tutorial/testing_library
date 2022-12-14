import { useState } from "react";

function Tutorial() {
  const [value, setValue] = useState("no value");
  const [input, setInput] = useState("");

  const onChagne = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const onClick = () => {
    if (input !== "") setValue(input);
    else setValue("no value");
    setInput("");
  };

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" value={input} onChange={onChagne} placeholder="text" />
      <input type="button" value="button" onClick={onClick} />
    </div>
  );
}

export default Tutorial;
