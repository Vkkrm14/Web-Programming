import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function Q7() {
  const number = 24;
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return (
    <p>
      {number} is {isPrime(number) ? "a prime number" : "not a prime number"}.
    </p>
  );
}
export default Q7;
