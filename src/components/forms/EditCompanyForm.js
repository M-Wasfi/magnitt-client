import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateCompany } from "../../actions/companyActions";

import { CompanyForm } from "./CompanyForm";

const EditCompanyForm = ({ myCompany, updateCompany, errors, loading }) => {
  const [company, setCompany] = useState({
    companyName: "",
    industry: "",
    type: "",
    size: "",
  });

  const [updated, setUpdated] = useState(false);

  // Fill in company data
  useEffect(() => {
    setCompany({
      companyName: myCompany.companyName,
      industry: myCompany.industry,
      type: myCompany.type,
      size: myCompany.size,
    });
  }, [setCompany, myCompany]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateCompany({ ...company, _id: myCompany._id }).then(setUpdated(true));
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  if (updated && !loading && !errors) {
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

EditCompanyForm.propTypes = {
  updateCompany: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  myCompany: PropTypes.object,
};

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  errors: state.companyReducer.errors,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { updateCompany })(EditCompanyForm);
