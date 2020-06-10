import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";

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

  return companies.map((company) => (
    <li key={company._id}>
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
    </li>
  ));
};

export default connect(null, {
  acceptConnectionRequest,
  rejectConnectionRequest,
})(CompaniesList);
