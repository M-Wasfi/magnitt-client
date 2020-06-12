import React from "react";
import PropTypes from "prop-types";

export const CompanyInfo = ({ company }) => {
  return (
    <>
      <h2>Info</h2>
      <ul>
        <li>Type: {company.type}</li>
        <li>Size: {company.size}</li>
        <li>Industry: {company.industry}</li>
        <li>Join Date: {company.creationDate}</li>
      </ul>
    </>
  );
};

CompanyInfo.propTypes = {
  company: PropTypes.object,
};
