import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../actions/authActions";

import { CardContainer } from "../CardContainer";
import { Input } from "./common/Input";

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
      <form style={styles.form} onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={styles.submit}
        >
          Login
        </button>
        <div>
          <Link to="/register">Create an account?</Link>
        </div>
      </form>
    </CardContainer>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
};

const styles = {
  paper: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  errors: state.authReducer.errors,
});

export default connect(mapStateToProps, { login })(LoginForm);
