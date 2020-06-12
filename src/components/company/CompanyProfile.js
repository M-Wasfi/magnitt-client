import React from "react";
import PropTypes from "prop-types";

import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

import { CompanyInfo } from "./common/CompanyInfo";

export const CompanyProfile = ({
  company,
  con,
  userId,
  myCompany,
  otherCompanyId,
  handleSend,
  handleAccept,
  handleReject,
  isAuthenticated,
}) => {
  return (
    //TODO Review
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <h1>{company.companyName} </h1>
          {isAuthenticated ? (
            <h4>
              {con.company && con.connection ? "Connected" : ""}
              {con.company && con.sent && userId === myCompany.owner
                ? "Connection request sent"
                : ""}
              {con.company && con.pending && userId === myCompany.owner
                ? "Connection request pending"
                : ""}
            </h4>
          ) : null}

          {isAuthenticated ? (
            !con.sent &&
            !con.pending &&
            !con.connection &&
            con.company &&
            otherCompanyId !== myCompany._id &&
            userId === myCompany.owner ? (
              <button
                onClick={() => handleSend(company)}
                className="btn btn-primary"
                style={styles.submit}
              >
                Connect
              </button>
            ) : (
              <div />
            )
          ) : null}

          {isAuthenticated ? (
            con.company &&
            con.pending &&
            !con.sent &&
            !con.connection &&
            userId === myCompany.owner ? (
              <div>
                <button
                  onClick={() => handleAccept(company)}
                  className="btn btn-success"
                  style={styles.submit}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(company)}
                  className="btn btn-danger"
                  style={styles.submit}
                >
                  Reject
                </button>
              </div>
            ) : (
              <div />
            )
          ) : null}
        </div>
      </CardContainer>

      <CardContainer>
        <CompanyInfo company={company} />
      </CardContainer>

      <CardContainer>
        <h1>Employees</h1>
        <UsersList users={company.employees} own={true} />
      </CardContainer>
    </div>
  );
};

CompanyProfile.propTypes = {
  company: PropTypes.object,
  con: PropTypes.object,
  myCompany: PropTypes.object,
  userId: PropTypes.string,
  otherCompanyId: PropTypes.string,
  handleSend: PropTypes.func,
  handleAccept: PropTypes.func,
  handleReject: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submit: {
    margin: 3,
  },
};
