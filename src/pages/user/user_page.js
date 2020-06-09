import React, { Component } from "react";

export default class UserPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.location.state.user.userName}</h1>
      </div>
    );
  }
}
