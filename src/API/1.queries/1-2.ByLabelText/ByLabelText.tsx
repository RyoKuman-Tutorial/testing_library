function ByLabelText() {
  return (
    <div>
      <div role="div1">
        <label htmlFor="cheese">Do you like cheese?</label>
        <input type="text" id="cheese" placeholder="cheese" />
        <label htmlFor="bread">Do you like bread?</label>
        <input type="text" id="bread" placeholder="bread" />
      </div>
      <div role="div2">
        <label>
          textInput
          <input type="text" placeholder="this is input" />
        </label>
        <label>
          textInput
          <textarea placeholder="this is textarea" />
        </label>
      </div>
    </div>
  );
}

export default ByLabelText;
