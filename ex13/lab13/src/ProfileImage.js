import React from "react";

const ProfileImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Profile" width="150" />
    </div>
  );
};

export default ProfileImage;
