import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q9() {
  const input = "level";
  const reversed = input.split("").reverse().join("");
  const isPalindrome = input === reversed;

  return (
    <div>
      <p>Reversed String: {reversed}</p>
      <p>
        {input} is {isPalindrome ? "" : "not "}a palindrome.
      </p>
    </div>
  );
}
export default Q9;
