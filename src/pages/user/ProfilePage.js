import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../components/Spinner";
import UserProfile from "../../components/user/UserProfile";

const ProfilePage = ({ user, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return <UserProfile user={user} own={true} />;
};

ProfilePage.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  loading: state.authReducer.loading,
});

export default connect(mapStateToProps)(ProfilePage);
