import React from "react";
import srcImage from "../Images/rabbit.jpg"; // Importing from src

const Q1 = () => {
  return (
    <div>
      <h1>Question 1</h1>
      <h2>A) Image from Public Folder</h2>
      {/* Better way to reference public images */}
      <img src="Images/dog.jpg" alt="Public Image" width="300" />

      <h2>B) Image from Src Folder</h2>
      {/* Src image - Imported directly */}
      <img src={srcImage} alt="Src Image" width="300" />
    </div>
  );
};

export default Q1;
