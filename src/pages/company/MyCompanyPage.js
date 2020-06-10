import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getMyCompany } from "../../actions/companyActions";

import Spinner from "../../components/spinner";
import UsersList from "../../components/user/UsersList";
import CompaniesList from "../../components/company/CompaniesList";

const MyCompanyPage = ({ getMyCompany, loading, company }) => {
  useEffect(() => {
    getMyCompany();
  }, []);

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>My Company</h1>

      <h1>Name: {company.companyName}</h1>
      <ul>
        <UsersList users={company.employees} />
      </ul>

      <h1>Company connections:</h1>
      <ul>
        <CompaniesList companies={company.companyConnections} />
      </ul>

      <h1>Pending connection requests:</h1>
      <ul>
        <CompaniesList companies={company.pendingConnections} pending={true} />
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  company: state.companyReducer.myCompany,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getMyCompany })(MyCompanyPage);
