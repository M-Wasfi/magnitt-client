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

  useEffect(() => {
    getUser(userId);
  }, [getUser, userId]);

  const handleAdd = () => {
    addUserToCompany(user._id, myCompany);
  };

  if (loading || user === null) {
    return <Spinner />;
  }
  console.log(currentUser.company);
  return (
    <UserProfile
      user={user}
      handleAdd={handleAdd}
      isAuthenticated={isAuthenticated}
      own={user.userName === currentUser.userName}
      hasCompany={currentUser.company !== null}
    />
  );
};

UserPage.propTypes = {
  location: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  myCompany: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  addUserToCompany: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
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
