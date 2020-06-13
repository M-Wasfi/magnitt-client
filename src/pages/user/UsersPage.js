import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAllUsers } from "../../actions/userActions";

import Spinner from "../../components/Spinner";
import SearchForm from "../../components/forms/SearchForm";
import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

const UsersPage = ({
  loading,
  users,
  searching,
  searchResult,
  getAllUsers,
}) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div className="container">
      <CardContainer>
        <SearchForm />
      </CardContainer>

      <CardContainer>
        <h1>Users</h1>
        {loading ? (
          <Spinner />
        ) : (
          <ul>
            {searching ? (
              <UsersList users={searchResult} />
            ) : (
              <UsersList users={users} />
            )}
          </ul>
        )}
      </CardContainer>
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.array,
  searchResult: PropTypes.array,
  loading: PropTypes.bool,
  searching: PropTypes.bool,
  getAllUsers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
  searchResult: state.userReducer.searchResult,
  searching: state.userReducer.searching,
});

export default connect(mapStateToProps, { getAllUsers })(UsersPage);
