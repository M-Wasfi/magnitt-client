import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMyCompany } from "../../actions/companyActions";

import Spinner from "../../components/Spinner";
import UsersList from "../../components/user/UsersList";
import CompaniesList from "../../components/company/CompaniesList";
import { CardContainer } from "../../components/CardContainer";

import { CompanyInfo } from "../../components/company/common/CompanyInfo";

import { getConnectionsList } from "../../helpers/getConnectionsList";

const MyCompanyPage = ({ getMyCompany, loading, company, connections }) => {
  const [companyConnections, setCompanyConnections] = useState([]);
  const [pendingConnections, setPendingConnections] = useState([]);
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    setCompanyConnections(
      getConnectionsList(connections, company._id, "CONNECTED")
    );

    setPendingConnections(
      getConnectionsList(connections, company._id, "PENDING")
    );

    getMyCompany().then(() => setCompaniesLoading(false));
  }, []);

  if (loading || company === null || companiesLoading) {
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
        <CompaniesList companies={companyConnections} />
      </CardContainer>
      //TODO
      <CardContainer>
        <h2>Pending connection requests</h2>
        <CompaniesList companies={pendingConnections} pending={true} />
      </CardContainer>
    </div>
  );
};

MyCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  connections: PropTypes.array.isRequired,
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
  connections: state.companyReducer.connections,
});

export default connect(mapStateToProps, { getMyCompany })(MyCompanyPage);
