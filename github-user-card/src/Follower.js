import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Follower = (props) => {
  const { followerDetails } = props;

  return (
    <div>
      <header>
        <h1>Github Users Followers</h1>
        <Link to="/">Home</Link>
      </header>
      <div className="followerCard">
        {followerDetails.map((id) => {
          return (
            <div key={id.id}>
              <img src={id.avatar_url} alt="Users Profile" />
              <h2 key={id.id}>Username: {id.login}</h2>
              <div>
                <p>
                  GitHub: <a href={id.html_url}>Profile</a>
                </p>
                <p>Bio: {id.bio}</p>
                <p>Followers: {id.followers}</p>
                <p>Following: {id.following}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Follower;
