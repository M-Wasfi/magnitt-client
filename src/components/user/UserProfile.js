import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../CardContainer";
import { EmptyList } from "../emptyList";
import { Link } from "react-router-dom";

export const UserProfile = ({ user, handleAdd }) => {
  return (
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <h2>{user.userName}</h2>
          {user.company !== null ? null : (
            <button onClick={handleAdd} className="btn btn-primary">
              Add to company
            </button>
          )}
        </div>
      </CardContainer>

      <CardContainer>
        <h2>Info</h2>
        <ul>
          <li>Name: {user.userName}</li>
          <li>Email: {user.email}</li>
          <li>Join Date: {user.creationDate}</li>
        </ul>
      </CardContainer>

      <CardContainer>
        {user.company === null ? (
          <>
            <h2>Company</h2>
            <EmptyList />
          </>
        ) : (
          <>
            <h2>
              <Link
                to={{
                  pathname: "/company",
                  state: {
                    company: user.company,
                  },
                }}
              >
                {user.company.companyName}
              </Link>
            </h2>
            <ul>
              <li>Type: {user.company.type}</li>
              <li>Size: {user.company.size}</li>
              <li>Industry: {user.company.Industry}</li>
              <li>Join Date: {user.company.creationDate}</li>
            </ul>
          </>
        )}
      </CardContainer>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
