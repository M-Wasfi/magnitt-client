import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createCompany } from "../../actions/companyActions";

import { CompanyForm } from "./CompanyForm";

const AddCompanyForm = ({ myCompany, createCompany, errors, user }) => {
  const [company, setCompany] = useState({
    companyName: "",
    industry: "",
    type: "",
    size: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    createCompany(company, user._id);
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  if (myCompany) {
    return <Redirect to="/my-company" />;
  }

  return (
    <CompanyForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      company={company}
      errors={errors}
    />
  );
};

AddCompanyForm.propTypes = {
  createCompany: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  myCompany: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  errors: state.companyReducer.errors,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { createCompany })(AddCompanyForm);
