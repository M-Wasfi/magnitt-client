import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { CardContainer } from "../components/CardContainer";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <CardContainer>
        <h1>Welcome,</h1>
        <p>Join our community today and start your journey</p>
        <div>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-light">
            Login
          </Link>
        </div>
      </CardContainer>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
