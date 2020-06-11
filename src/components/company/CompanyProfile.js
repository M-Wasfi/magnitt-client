import React from "react";

import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

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
    <div className="container">
      <div className="row">
        <CardContainer>
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
        </CardContainer>
      </div>

      <CardContainer>
        <h1>Employees</h1>
        <UsersList users={company.employees} own={true} />
      </CardContainer>
    </div>
  );
};

const styles = {
  submit: {
    margin: 3,
  },
};
