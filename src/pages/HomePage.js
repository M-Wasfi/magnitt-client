import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMyCompany, getCompanyConnections } from "../actions/companyActions";

import { CardContainer } from "../components/CardContainer";

const HomePage = ({
  user,
  isAuthenticated,
  getMyCompany,
  getCompanyConnections,
}) => {
  useEffect(() => {
    getMyCompany();
    getCompanyConnections();
  }, []);

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
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getMyCompany: PropTypes.func.isRequired,
  getCompanyConnections: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, {
  getMyCompany,
  getCompanyConnections,
})(HomePage);
