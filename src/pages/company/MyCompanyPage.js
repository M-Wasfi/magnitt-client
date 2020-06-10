import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getMyCompany } from "../../actions/companyActions";

import Spinner from "../../components/spinner";

const MyCompanyPage = ({ getMyCompany, loading, company }) => {
  useEffect(() => {
    getMyCompany();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>MyCompany</h1>

      <h1>Name: {company.companyName}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  company: state.companyReducer.myCompany,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getMyCompany })(MyCompanyPage);
