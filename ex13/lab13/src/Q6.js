import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q6() {
  const day = new Date().toLocaleDateString(undefined, { weekday: "long" });
  return <p>Today is: {day}</p>;
}
export default Q6;
