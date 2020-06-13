import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { searchUsers, cancelSearch } from "../../actions/userActions";

import { Input } from "./common/Input";
import { Button } from "../common/Button";

const SearchForm = ({ searchUsers, cancelSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchUsers(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCancel = () => {
    cancelSearch();
    setSearch("");
  };

  return (
    <div>
      <form
        style={{
          marginTop: 1,
        }}
        onSubmit={handleSubmit}
      >
        <Input
          label="Search"
          type="text"
          name="search"
          placeholder="Search by email"
          value={search}
          handleChange={handleChange}
        />

        <Button shape="btn btn-primary" label="Search" type="submit" />
        <Button shape="btn btn-danger" label="Clear" onClick={handleCancel} />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchUsers: PropTypes.func,
  cancelSearch: PropTypes.func,
};

export default connect(null, { searchUsers, cancelSearch })(SearchForm);
