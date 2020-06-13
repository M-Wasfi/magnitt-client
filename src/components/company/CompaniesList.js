import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/connectionActions";

import { EmptyList } from "../EmptyList";
import { Button } from "../common/Button";

const CompaniesList = ({
  companies,
  companyId,
  acceptConnectionRequest,
  rejectConnectionRequest,
}) => {
  const handleAccept = (company) => {
    acceptConnectionRequest(company);
  };

  const handleReject = (company) => {
    rejectConnectionRequest(company);
  };

  return companies.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Connection Date</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company._id}>
            <td>
              <Link
                to={{
                  pathname: "/company",
                  state: {
                    company:
                      companyId === company.sender._id
                        ? company.receiver._id
                        : company.sender._id,
                  },
                }}
              >
                {companyId === company.sender._id
                  ? company.receiver.companyName
                  : company.sender.companyName}
              </Link>
            </td>

            <td> {company.creationDate}</td>

            <td>
              {company.status === "PENDING" ? (
                <div>
                  <Button
                    shape="btn btn-success"
                    onClick={() =>
                      handleAccept(
                        companyId === company.sender._id
                          ? company.receiver._id
                          : company.sender._id
                      )
                    }
                    label="Accept"
                  />
                  <Button
                    shape="btn btn-danger"
                    onClick={() =>
                      handleReject(
                        companyId === company.sender._id
                          ? company.receiver._id
                          : company.sender._id
                      )
                    }
                    label="Reject"
                  />
                </div>
              ) : (
                <div />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <EmptyList />
  );
};

CompaniesList.propTypes = {
  acceptConnectionRequest: PropTypes.func,
  rejectConnectionRequest: PropTypes.func,
  companies: PropTypes.array,
  companyId: PropTypes.string,
};

export default connect(null, {
  acceptConnectionRequest,
  rejectConnectionRequest,
})(CompaniesList);
