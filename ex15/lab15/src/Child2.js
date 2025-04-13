import React from "react";
import PropTypes from "prop-types";

function Child2({ msg }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Messaging</h1>
      <p>Message from Parent: {msg}</p>
    </div>
  );
}

Child2.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Child2;
