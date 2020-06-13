import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMyCompany } from "../actions/companyActions";
import { getCompanyConnections } from "../actions/connectionActions";

import { CardContainer } from "../components/CardContainer";

const HomePage = ({
  user,
  isAuthenticated,
  getMyCompany,
  getCompanyConnections,
}) => {
  // get logged in user company information and company's connections
  useEffect(() => {
    getMyCompany();
    getCompanyConnections();
  }, [getMyCompany, getCompanyConnections]);

  return (
    <CardContainer>
      {isAuthenticated ? (
        <h2>Welcome back, {user.userName}</h2>
      ) : (
        <h2>
          Continue your journey, <Link to="/login">Login</Link>
          <br />
          or start a new one now, <Link to="/register">Register</Link>
        </h2>
      )}
    </CardContainer>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  getMyCompany: PropTypes.func,
  getCompanyConnections: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, {
  getMyCompany,
  getCompanyConnections,
})(HomePage);
