import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const User = (props) => {
  const { userDetails } = props;

  return (
    <div>
      <header>
        <h1>Github User</h1>
        <Link className="link" to="/">
          Home
        </Link>
      </header>
      <div className="userCard">
        <img src={userDetails.avatar_url} alt="Users Profile" />
        <h2>Username: {userDetails.login}</h2>
        <div>
          <p>
            GitHub: <a href={userDetails.html_url}>Profile</a>
          </p>
          <p>Bio: {userDetails.bio}</p>
          <p>Location: {userDetails.location}</p>
          <p>Followers: {userDetails.followers}</p>
          <div>
            <Link className="link" to="/followers">
              See Followers
            </Link>
          </div>
          <p>Following: {userDetails.following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
