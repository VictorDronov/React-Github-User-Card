import React from "react";
import "./App.css";

const User = (props) => {
  const { userDetails, followers } = props;

  return (
    <div className="userCard">
      <img src={userDetails.avatar_url} />
      <h2>Username: {userDetails.login}</h2>
      <div>
        <p>
          GitHub: <a href={userDetails.html_url}>Profile</a>
        </p>
        <p>Bio: {userDetails.bio}</p>
        <p>Followers: {userDetails.followers}</p>
        <div>{followers.login}</div>
        <p>Following: {userDetails.following}</p>
      </div>
    </div>
  );
};

export default User;
