import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { register } from "../../actions/authActions";

import { Input } from "./common/Input";
import { CardContainer } from "../CardContainer";
import { Button } from "../common/Button";

const SignupForm = ({ isAuthenticated, register, errors }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.password_confirmation) {
      toast.error("Passwords do not match");
    } else {
      register(user);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <CardContainer>
      <form style={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          name="userName"
          value={user.userName}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Email address"
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Confirm password"
          type="password"
          name="password_confirmation"
          value={user.password_confirmation}
          handleChange={handleChange}
          errors={errors}
        />

        <Button style="btn btn-primary" label="Signup" type="submit" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </CardContainer>
  );
};

SignupForm.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const styles = {
  paper: {
    marginTop: 8,
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

export default connect(mapStateToProps, { register })(SignupForm);
