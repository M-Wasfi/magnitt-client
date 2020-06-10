import React from "react";
import { Link } from "react-router-dom";

export default function UsersList({ users }) {
  return users.map((user) => (
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
  ));
}
