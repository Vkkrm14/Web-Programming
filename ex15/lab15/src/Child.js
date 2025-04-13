import React from "react";
export default function Child({ msg }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Messaging</h1>
      <p>Message from Parent: {msg}</p>
    </div>
  );
}
