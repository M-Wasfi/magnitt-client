import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMyCompany } from "../../actions/companyActions";

import Spinner from "../../components/Spinner";
import UsersList from "../../components/user/UsersList";
import CompaniesList from "../../components/company/CompaniesList";
import { CardContainer } from "../../components/CardContainer";

import { CompanyInfo } from "../../components/company/common/CompanyInfo";

const MyCompanyPage = ({ getMyCompany, loading, company }) => {
  useEffect(() => {
    getMyCompany();
  }, [getMyCompany]);

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <CardContainer>
        <div style={styles.row}>
          <h2>{company.companyName}</h2>
          <Link
            to={{
              pathname: "/edit-company",
              state: {
                company: company,
              },
            }}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </div>
      </CardContainer>

      <CardContainer>
        <CompanyInfo company={company} />
      </CardContainer>

      <CardContainer>
        <h2>Employees </h2>
        <UsersList users={company.employees} own={true} />
      </CardContainer>

      <CardContainer>
        <h2>Company connections</h2>
        <CompaniesList companies={company.companyConnections} />
      </CardContainer>

      <CardContainer>
        <h2>Pending connection requests</h2>
        <CompaniesList companies={company.pendingConnections} pending={true} />
      </CardContainer>
    </div>
  );
};

MyCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getMyCompany: PropTypes.func.isRequired,
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

const mapStateToProps = (state) => ({
  company: state.companyReducer.myCompany,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getMyCompany })(MyCompanyPage);
