import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "galymax",
        location: "Cologne",
        firstName: "Maxim",
        lastName: "Werkhowski",
      },
      loggedIn: false,
      changeUser: false,
    };
    this.logIn = this.logIn.bind(this);
  }
  logIn() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }
  handleChange = (userKey, event) => {
    this.setState((prevState) => {
      let user = Object.assign({}, prevState.user);
      user[userKey] = event.target.value;
      return { user };
    });
    console.log(event.target.value);
    console.log(userKey);
    console.log(this.state);
  };
  editUser = () => {
    this.setState({
      changeUser: !this.state.changeUser,
    });
  };
  render() {
    return (
      <>
        {this.state.changeUser ? (
          <div>
            <h2>Nutzer ändern</h2>
            <form onSubmit={this.editUser}>
              <input
                type="text"
                placeholder="Benutzername"
                value={this.state.user.username}
                onChange={this.handleChange.bind(this, "username")}
              />
              <input
                type="text"
                placeholder="Ort"
                value={this.state.user.location}
                onChange={this.handleChange.bind(this, "location")}
              />
              <input
                type="text"
                placeholder="Vorname"
                value={this.state.user.firstName}
                onChange={this.handleChange.bind(this, "firstName")}
              />
              <input
                type="text"
                placeholder="Nachname"
                value={this.state.user.lastName}
                onChange={this.handleChange.bind(this, "lastName")}
              />
              <button>Speichern</button>
            </form>
          </div>
        ) : (
          <div>
            <div>Username: {this.state.user.username}</div>
            <div>Location: {this.state.user.location}</div>
            <div>
              Full Name: {this.state.user.firstName}
              {this.state.user.lastName}
            </div>
            <div>
              Login status:{" "}
              {this.state.loggedIn ? "logged in" : "not logged in"}
            </div>
            <button onClick={this.logIn}>
              {this.state.loggedIn ? "Log Out" : "Log in"}
            </button>
            {this.state.loggedIn && (
              <button onClick={this.editUser}>Bearbeiten</button>
            )}
          </div>
        )}
      </>
    );
  }
}
