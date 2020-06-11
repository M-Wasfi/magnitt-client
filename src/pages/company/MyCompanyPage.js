import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getMyCompany } from "../../actions/companyActions";

import Spinner from "../../components/spinner";
import UsersList from "../../components/user/UsersList";
import CompaniesList from "../../components/company/CompaniesList";
import { CardContainer } from "../../components/CardContainer";

const MyCompanyPage = ({ getMyCompany, loading, company }) => {
  useEffect(() => {
    getMyCompany();
  }, []);

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <CardContainer>
        <h1>{company.companyName} Dashboard</h1>
      </CardContainer>

      <CardContainer>
        <h1>Employees </h1>
        <ul>
          <UsersList users={company.employees} own={true} />
        </ul>
      </CardContainer>

      <CardContainer>
        <h1>Company connections</h1>
        <ul>
          <CompaniesList companies={company.companyConnections} />
        </ul>
      </CardContainer>

      <CardContainer>
        <h1>Pending connection requests</h1>
        <ul>
          <CompaniesList
            companies={company.pendingConnections}
            pending={true}
          />
        </ul>
      </CardContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  company: state.companyReducer.myCompany,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getMyCompany })(MyCompanyPage);
