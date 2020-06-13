import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export const CompanyCard = ({ company }) => {
  return (
    <div className="card" style={{ width: "12rem", margin: 10 }}>
      <div className="card-body">
        <h5 className="card-title">
          <Link
            to={{
              pathname: "/company",
              state: {
                company: company._id,
              },
            }}
          >
            {company.companyName}
          </Link>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{company.type}</h6>
        <p className="card-text">{company.industry}</p>
      </div>
    </div>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object,
};
