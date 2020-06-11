import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getAllCompanies } from "../../actions/companyActions";

import Spinner from "../../components/spinner";
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

const mapStateToProps = (state) => ({
  companies: state.companyReducer.companies,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getAllCompanies })(CompaniesPage);
