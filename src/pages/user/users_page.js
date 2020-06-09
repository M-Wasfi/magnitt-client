import React, { Component } from "react";

import { Link } from "react-router-dom";

import { getUsers } from "../../api/userServices";

export default class CompaniesPage extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getUsers();
    console.log(users);
    this.setState({ users });
  }

  render() {
    return (
      <div className="container">
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user._id}>
              <Link
                to={{
                  pathname: "/user",
                  state: {
                    user: user,
                  },
                }}
              >
                {user.userName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
