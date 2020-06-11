import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addUserToCompany } from "../../actions/companyActions";
import { getUser } from "../../actions/userActions";

import Spinner from "../../components/spinner";
import { UserProfile } from "../../components/user/UserProfile";

const UserPage = ({
  location,
  addUserToCompany,
  getUser,
  user,
  loading,
  myCompany,
}) => {
  const userId = location.state.user._id;

  useEffect(() => {
    getUser(userId);
  }, [getUser, userId]);

  const handleAdd = () => {
    addUserToCompany(user._id, myCompany._id);
  };

  if (loading || user === null) {
    return <Spinner />;
  }

  console.log("###########");
  console.log(user);
  return <UserProfile user={user} handleAdd={handleAdd} />;
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loading: state.userReducer.loading,
  myCompany: state.companyReducer.myCompany,
});

export default connect(mapStateToProps, { addUserToCompany, getUser })(
  UserPage
);
