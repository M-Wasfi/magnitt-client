import React, { Component } from "react";

import { Link } from "react-router-dom";

import { getCompanies } from "../../api/companyServices";

export default class CompaniesPage extends Component {
  state = {
    companies: [],
  };

  async componentDidMount() {
    const companies = await getCompanies();
    console.log(companies);
    this.setState({ companies });
  }

  render() {
    return (
      <div className="container">
        <h1>Companies</h1>
        <ul>
          {this.state.companies.map((company) => (
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
  }
}
