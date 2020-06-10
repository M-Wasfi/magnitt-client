import React, { useState } from "react";
import { connect } from "react-redux";
import { searchUsers, cancelSearch } from "../../actions/userActions";

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
    <div style={{ flexDirection: "row" }}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Search</label>
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search by email"
            value={search}
            onChange={(e) => handleChange(e)}
          />
        </div>

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
