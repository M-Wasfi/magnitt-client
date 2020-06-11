import React from "react";

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

export default CompaniesGrid;
