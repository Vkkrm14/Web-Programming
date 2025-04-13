import React from "react";
import ReactDOM from "react-dom/client";
function Name(props) {
  return (
    <h2>
      Hello {props.firstname} {props.lastname}!
    </h2>
  );
}
function Pname() {
  return (
    <>
      <Name firstname="Vikkram" lastname="SL" />
    </>
  );
}
function Q12() {
  return <Pname />;
}
export default Q12;
