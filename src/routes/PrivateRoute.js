import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/spinner";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...rest
}) => {
  console.log("**********************");
  console.log("isAuthenticated");
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        // loading ? (
        //   <Spinner />
        // ) :
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
