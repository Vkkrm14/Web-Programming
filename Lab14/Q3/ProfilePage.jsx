import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    imageUrl: "../public/Images/dog.jpg",
    name: "Vikkram",
    email: "vkkrm@gmail.com",
    bio: "Gamer boy",
    posts: ["Always be Happy", "Cotton Candy", "Be yourself"],
  };

  return (
    <div className="profile-page">
      <h3>Question 3</h3>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
