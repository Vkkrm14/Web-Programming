import React, { useState } from "react";
function Q10() {
  const [number, setNumber] = useState(null);
  const generateRandomNumber = () =>
    setNumber(Math.floor(Math.random() * 100) + 1);
  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {number && <p>Random Number: {number}</p>}
    </div>
  );
}
export default Q10;
