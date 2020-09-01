import React from "react";
import axios from "axios";
import User from "./User";
import Follower from "./Follower";
import { Switch, Route } from "react-router";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      usersFollowers: [],
      eachFollower: [],
    };
  }

  componentDidMount() {
    // console.log("mount");
    axios
      .get("https://api.github.com/users/victorDronov")
      .then((res) => {
        this.setState({
          user: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Followers
    axios
      .get(" https://api.github.com/users/victorDronov/followers")
      .then((res) => {
        // console.log(res.data)
        this.setState({
          usersFollowers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    // console.log("Update");
  }

  render() {
    // console.log("render");
    return (
      <div className="App">
        <Switch>
          <Route path="/followers">
            <Follower followerDetails={this.state.usersFollowers} />
          </Route>

          <Route path="/">
            <User userDetails={this.state.user} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
