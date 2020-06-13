import React from "react";
import PropTypes from "prop-types";

export const UserInfo = ({ user }) => {
  return (
    <>
      <h2>Info</h2>
      <ul>
        <li>Name: {user.userName}</li>
        <li>Email: {user.email}</li>
        <li>Join Date: {user.creationDate}</li>
      </ul>
    </>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object,
};
