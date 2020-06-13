import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../actions/authActions";

import { CardContainer } from "../CardContainer";
import { Input } from "./common/Input";
import { Button } from "../common/Button";

const LoginForm = ({ login, isAuthenticated, errors }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <CardContainer>
      <h2>Welcome back</h2>

      <form
        style={{
          marginTop: 1,
        }}
        onSubmit={handleSubmit}
      >
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Email address"
          value={credentials.email}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          handleChange={handleChange}
          errors={errors}
        />

        <Button shape="btn btn-primary btn-block" label="Login" type="submit" />

        <div>
          <Link to="/register">Create an account?</Link>
        </div>
      </form>
    </CardContainer>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { login })(LoginForm);
