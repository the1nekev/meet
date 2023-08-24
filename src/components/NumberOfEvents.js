// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  // const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert("Value is not a number");
    } else if (value > 50) {
      setErrorAlert("Maximum Value is 50");
    } else if (value <= 0) {
      setErrorAlert("Minimun value is 1");
    } else {
      setErrorAlert("");
      setCurrentNOE(value);
    }
    // setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        placeholder="Enter a number"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue={32}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
