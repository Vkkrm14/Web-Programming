import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q2() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
export default Q2;
