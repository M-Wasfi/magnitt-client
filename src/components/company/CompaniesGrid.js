import React from "react";
import PropTypes from "prop-types";

import { CompanyCard } from "./CompanyCard";

const CompaniesGrid = ({ companies }) => {
  return (
    <div className="container-fluid row">
      {companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </div>
  );
};

CompaniesGrid.propTypes = {
  companies: PropTypes.array,
};

export default CompaniesGrid;
