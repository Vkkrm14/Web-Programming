import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q8() {
  const [temperature, setTemperature] = useState("");
  const [convertedTemp, setConvertedTemp] = useState("");
  const handleChange = (e) => {
    setTemperature(e.target.value);
  };
  const convertToFahrenheit = () => {
    if (!temperature) return;
    setConvertedTemp((temperature * 9) / 5 + 32);
  };
  const convertToCelsius = () => {
    if (!temperature) return;
    setConvertedTemp(((temperature - 32) * 5) / 9);
  };
  return (
    <div>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={temperature}
        onChange={handleChange}
        placeholder="Enter temperature"
      />
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      <button onClick={convertToCelsius}>Convert to Celsius</button>
      <p>Converted Temperature: {convertedTemp}</p>
    </div>
  );
}
export default Q8;
