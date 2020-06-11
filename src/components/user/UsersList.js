import React from "react";
import { Link } from "react-router-dom";

export default function UsersList({ users, own = false }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          {!own ? <th scope="col">Company</th> : null}
          {/* <th scope="col">Company</th> */}
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
                        company: user.company,
                      },
                    }}
                  >
                    {user.company.companyName}
                  </Link>
                </td>
              ) : (
                "N/A"
              )
            ) : null}

            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
