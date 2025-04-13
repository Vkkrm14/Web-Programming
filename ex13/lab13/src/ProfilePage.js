import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    image: "/images/dog.jpg",
    name: "Vikkram SL",
    email: "vikkramsl@gmail.com",
    bio: "Software Engineer at VIT Corp.",
    posts: ["Post 1", "Post 2", "Post 3"],
  };

  return (
    <div>
      <ProfileImage image={user.image} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
