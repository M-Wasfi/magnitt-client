import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";

import { EmptyList } from "../EmptyList";

const CompaniesList = ({
  companies,
  pending,
  acceptConnectionRequest,
  rejectConnectionRequest,
}) => {
  const handleAccept = (company) => {
    acceptConnectionRequest(company);
  };

  const handleReject = (company) => {
    rejectConnectionRequest(company);
  };
  //TODO table refactor
  return companies.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Industry</th>
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
                    company: company,
                  },
                }}
              >
                {company.companyName}
              </Link>
            </td>

            <td>{company.industry}</td>

            <td>
              {pending ? (
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAccept(company)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleReject(company)}
                  >
                    Reject
                  </button>
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
  pending: PropTypes.bool,
};

export default connect(null, {
  acceptConnectionRequest,
  rejectConnectionRequest,
})(CompaniesList);
