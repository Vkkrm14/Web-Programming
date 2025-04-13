import React, { useState } from "react";
function Q11() {
  const year = 2024;
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return (
    <p>
      {year} is {isLeapYear ? "" : "not "}a leap year.
    </p>
  );
}
export default Q11;
