import React from "react";
import axios from "axios";
import User from "./User";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      usersFollowers: [],
    };
  }

  componentDidMount() {
    console.log("mount");
    axios
      .get("https://api.github.com/users/victorDronov")
      .then((res) => {
        this.setState({
          user: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Followers
    axios
      .get(" https://api.github.com/users/victorDronov/followers")
      .then((res) => {
        let arrayOfFollowers = res.data;
        arrayOfFollowers.forEach((persons) => {
          this.setState({
            usersFollowers: persons,
          });
          console.log(persons);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate() {
    console.log("Update");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <header>
        <h1>Github User</h1>
        </header>
        <User
          userDetails={this.state.user}
          followers={this.state.usersFollowers}
        />
      </div>
    );
  }
}

export default App;
