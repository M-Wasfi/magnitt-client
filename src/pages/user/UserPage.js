import React from "react";
import { connect } from "react-redux";
import { addUserToCompany } from "../../actions/companyActions";

const UserPage = ({ location, addUserToCompany }) => {
  const handleAdd = () => {
    addUserToCompany(location.state.user._id);
  };

  return (
    <div className="container">
      <h1>{location.state.user.userName}</h1>
      {location.state.user.company !== null ? (
        <div />
      ) : (
        <button onClick={handleAdd} className="btn btn-primary">
          Add to company
        </button>
      )}
    </div>
  );
};

export default connect(null, { addUserToCompany })(UserPage);
