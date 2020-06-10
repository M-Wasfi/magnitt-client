import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getAllUsers } from "../../actions/userActions";

import Spinner from "../../components/spinner";
import SearchForm from "../../components/forms/SearchForm";
import UsersList from "../../components/user/UsersList";

const UsersPAge = ({
  loading,
  users,
  searching,
  searchResult,
  getAllUsers,
}) => {
  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <SearchForm />
      <ul>
        {searching ? (
          <UsersList users={searchResult} />
        ) : (
          <UsersList users={users} />
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
  searchResult: state.userReducer.searchResult,
  searching: state.userReducer.searching,
});

export default connect(mapStateToProps, { getAllUsers })(UsersPAge);
