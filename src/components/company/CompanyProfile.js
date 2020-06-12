import React from "react";
import PropTypes from "prop-types";

import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

import { CompanyInfo } from "./common/CompanyInfo";
import { Button } from "../common/Button";
import CompaniesList from "./CompaniesList";

export const CompanyProfile = ({
  company,
  conStatus,
  userId,
  myCompany,
  otherCompanyId,
  handleSend,
  handleAccept,
  handleReject,
  isAuthenticated,
}) => {
  const { status, type } = conStatus;
  const owner = userId === myCompany.owner;
  const ownCompany = otherCompanyId === myCompany._id;

  return (
    //TODO Review
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <div>
            <h1>{company.companyName} </h1>
            {isAuthenticated && !owner ? (
              <h4>
                {status === "CONNECTED"
                  ? "Connected"
                  : status === "PENDING" && type === "sender"
                  ? "Connection request sent"
                  : "Connection request pending"}
              </h4>
            ) : null}
          </div>

          {isAuthenticated ? (
            status === "no" && !ownCompany && owner ? (
              <Button
                style="btn btn-primary"
                onClick={() => handleSend(company)}
                label="Connect"
              />
            ) : null
          ) : null}

          {isAuthenticated ? (
            status === "PENDING" && type === "receiver" && owner ? (
              <div>
                <Button
                  style="btn btn-success"
                  onClick={() => handleAccept(company)}
                  label="Accept"
                />
                <Button
                  style="btn btn-danger"
                  onClick={() => handleReject(company)}
                  label="Reject"
                />
              </div>
            ) : null
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

      <CardContainer>
        <h2>Company connections</h2>
        <CompaniesList companies={company.companyConnections} />
      </CardContainer>
    </div>
  );
};

CompanyProfile.propTypes = {
  company: PropTypes.object,
  conStatus: PropTypes.object,
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

{
  /* {isAuthenticated ? (
            <h4>
              {con.company && con.connection ? "Connected" : ""}
              {con.company && con.sent && own
                ? "Connection request sent"
                : ""}
              {con.company && con.pending && own
                ? "Connection request pending"
                : ""}
            </h4>
          ) : null} */
}

{
  /* {isAuthenticated ? (
            !con.sent &&
            !con.pending &&
            !con.connection &&
            con.company &&
            otherCompanyId !== myCompany._id &&
            owner ? (
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
          ) : null} */
}

{
  /* {isAuthenticated ? (
            con.company &&
            con.pending &&
            !con.sent &&
            !con.connection &&
            own ? (
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
          ) : null} */
}
