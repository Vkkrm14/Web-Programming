import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q1() {
  const element = React.createElement("h1", null, "Hello, React!");

  const element1 = <h1>Hello, React!</h1>;
  return (
    <>
      {element} {element1}
    </>
  );
}
export default Q1;
