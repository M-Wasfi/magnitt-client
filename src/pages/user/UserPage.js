import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addUserToCompany } from "../../actions/companyActions";
import { getUser } from "../../actions/userActions";

import Spinner from "../../components/Spinner";
import UserProfile from "../../components/user/UserProfile";

const UserPage = ({
  location,
  addUserToCompany,
  getUser,
  user,
  myCompany,
  currentUser,
  loading,
  isAuthenticated,
}) => {
  const userId = location.state.user._id;

  // get user information
  useEffect(() => {
    getUser(userId);
  }, [getUser, userId]);

  const handleAdd = () => {
    addUserToCompany(user._id, myCompany);
  };

  if (loading || user === null) {
    return <Spinner />;
  }

  return (
    <UserProfile
      user={user}
      handleAdd={handleAdd}
      isAuthenticated={isAuthenticated}
      own={currentUser ? user.userName === currentUser.userName : false}
      hasCompany={currentUser ? currentUser.company !== null : false}
    />
  );
};

UserPage.propTypes = {
  location: PropTypes.object,
  user: PropTypes.object,
  currentUser: PropTypes.object,
  myCompany: PropTypes.object,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  addUserToCompany: PropTypes.func,
  getUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  currentUser: state.authReducer.user,
  myCompany: state.companyReducer.myCompany,
  loading: state.userReducer.loading,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { addUserToCompany, getUser })(
  UserPage
);
