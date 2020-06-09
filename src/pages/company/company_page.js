import React, { Component } from "react";

export default class CompanyPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.location.state.company.companyName}</h1>
      </div>
    );
  }
}
