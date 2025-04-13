import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h4>User Posts</h4>
      {posts.map((post, index) => (
        <p key={index}>{post}</p>
      ))}
    </div>
  );
};

export default UserPosts;
