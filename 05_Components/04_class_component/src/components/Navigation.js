/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Navigation extends React.Component {
  // JSX in render-Methode
  //
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={i}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navigation;
