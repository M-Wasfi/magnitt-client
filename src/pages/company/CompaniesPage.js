import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCompanies } from "../../actions/companyActions";

import Spinner from "../../components/spinner";

const CompaniesPage = ({ companies, loading, getAllCompanies }) => {
  useEffect(() => {
    getAllCompanies();
  }, []);

  console.log(loading);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company._id}>
            <Link
              to={{
                pathname: "/company",
                state: {
                  company: company,
                },
              }}
            >
              {company.companyName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companyReducer.companies,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, { getAllCompanies })(CompaniesPage);
