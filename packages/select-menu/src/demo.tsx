import React from "react";
import ReactDOM from "react-dom";

import SelectMenu from "./lib/SelectMenu";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const App = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <h1>Select Menu Demo</h1>
      <SelectMenu options={options} onSelect={handleSelect} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
