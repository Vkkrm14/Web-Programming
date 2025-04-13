import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserInfo;
