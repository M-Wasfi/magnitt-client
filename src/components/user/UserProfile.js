import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { CompanyInfo } from "../company/common/CompanyInfo";

import { CardContainer } from "../CardContainer";
import { EmptyList } from "../EmptyList";
import { UserInfo } from "./common/UserInfo";

const UserProfile = ({ user, handleAdd, own, isAuthenticated, hasCompany }) => {
  return (
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <h2>{user.userName}</h2>
          {!isAuthenticated || !hasCompany ? null : user.company ||
            own ? null : (
            <button onClick={handleAdd} className="btn btn-primary">
              Add to company
            </button>
          )}
          {!own ? null : (
            <Link
              to={{
                pathname: "/edit-profile",
                state: {
                  user: user,
                },
              }}
              className="btn btn-primary"
            >
              Edit
            </Link>
          )}
        </div>
      </CardContainer>

      <CardContainer>
        <UserInfo user={user} />
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
            <CompanyInfo company={user.company} />
          </>
        )}
      </CardContainer>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  own: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  hasCompany: PropTypes.bool.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default UserProfile;
