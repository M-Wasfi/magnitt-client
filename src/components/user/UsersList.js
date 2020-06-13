import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { EmptyList } from "../EmptyList";

export default function UsersList({ users, own = false }) {
  return users.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          {!own ? <th scope="col">Company</th> : null}
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>
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
            </td>

            {!own ? (
              user.company !== null ? (
                <td>
                  <Link
                    to={{
                      pathname: "/company",
                      state: {
                        company: user.company._id,
                      },
                    }}
                  >
                    {user.company.companyName}
                  </Link>
                </td>
              ) : (
                <td>N/A</td>
              )
            ) : null}

            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <EmptyList />
  );
}

UsersList.propTypes = {
  own: PropTypes.bool,
  users: PropTypes.array,
};
