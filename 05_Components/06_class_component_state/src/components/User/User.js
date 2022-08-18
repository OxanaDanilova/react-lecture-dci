import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "galymax",
      location: "Cologne",
      firstName: "Maxim",
      lastName: "Werkhowski",
      loggedIn: false,
    };
    this.logIn = this.logIn.bind(this);
  }
  logIn() {
    this.setState({
      loggedIn: true,
    });
  }
  render() {
    return (
      <div>
        <div>Username: {this.state.username}</div>
        <div>Location: {this.state.location}</div>
        <div>
          Full Name: {this.state.firstName}
          {this.state.lastName}
        </div>
        <div>
          Login status: {this.state.loggedIn ? "logged in" : "not logged in"}
        </div>
        <button onClick={this.logIn}>Log in</button>
      </div>
    );
  }
}
