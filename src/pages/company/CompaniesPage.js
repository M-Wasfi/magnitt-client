import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getAllCompanies } from "../../actions/companyActions";

import Spinner from "../../components/Spinner";
import CompaniesGrid from "../../components/company/CompaniesGrid";
import { CardContainer } from "../../components/CardContainer";

const CompaniesPage = ({ companies, loading, getAllCompanies }) => {
  useEffect(() => {
    getAllCompanies();
  }, [getAllCompanies]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <CardContainer>
      <h1>Companies</h1>
      <CompaniesGrid companies={companies} />
    </CardContainer>
  );
};

CompaniesPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  companies: PropTypes.array.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  companies: state.companyReducer.companies,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getAllCompanies })(CompaniesPage);
