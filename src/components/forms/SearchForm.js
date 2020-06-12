import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { searchUsers, cancelSearch } from "../../actions/userActions";

import { Input } from "./common/Input";

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
      <form style={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Search"
          type="text"
          name="search"
          placeholder="Search by email"
          value={search}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-primary" style={styles.submit}>
          Search
        </button>

        <button
          onClick={handleCancel}
          className="btn btn-danger"
          style={styles.submit}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  cancelSearch: PropTypes.func.isRequired,
};

const styles = {
  paper: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
};

export default connect(null, { searchUsers, cancelSearch })(SearchForm);
