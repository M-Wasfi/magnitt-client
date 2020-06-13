import React from "react";
import PropTypes from "prop-types";

import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

import { CompanyInfo } from "./common/CompanyInfo";
import { Button } from "../common/Button";

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

  // Determine whether the company is the current user company
  //  and wether he is the owner of the company
  const owner = myCompany ? userId === myCompany.owner : false;
  const ownCompany = myCompany ? company._id === myCompany._id : false;

  return (
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <div>
            <h1>{company.companyName} </h1>
            {isAuthenticated && owner && !ownCompany ? (
              <h4>
                {/* Determine the connection status */}
                {status === "no"
                  ? null
                  : status === "CONNECTED"
                  ? "Connected"
                  : status === "PENDING" && type === "sender"
                  ? "Connection request sent"
                  : "Connection request pending"}
              </h4>
            ) : null}
          </div>

          {/* Determine whether to show connect button */}
          {isAuthenticated ? (
            status === "no" && !ownCompany && owner ? (
              <Button
                shape="btn btn-primary"
                onClick={handleSend}
                label="Connect"
              />
            ) : null
          ) : null}

          {/* Determine whether to show accept & reject buttons */}
          {isAuthenticated ? (
            status === "PENDING" && type === "receiver" && owner ? (
              <div>
                <Button
                  shape="btn btn-success"
                  onClick={handleAccept}
                  label="Accept"
                />
                <Button
                  shape="btn btn-danger"
                  onClick={handleReject}
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
    </div>
  );
};

CompanyProfile.propTypes = {
  company: PropTypes.object,
  conStatus: PropTypes.object,
  myCompany: PropTypes.object,
  userId: PropTypes.string,
  // otherCompanyId: PropTypes.string,
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
