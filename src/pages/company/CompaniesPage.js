import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCompanies } from "../../actions/companyActions";

import Spinner from "../../components/spinner";
import CompaniesList from "../../components/company/CompaniesList";
import CompaniesGrid from "../../components/company/CompaniesGrid";
import { CardContainer } from "../../components/CardContainer";

const CompaniesPage = ({ companies, loading, getAllCompanies }) => {
  useEffect(() => {
    getAllCompanies();
  }, []);

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

const mapStateToProps = (state) => ({
  companies: state.companyReducer.companies,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getAllCompanies })(CompaniesPage);
