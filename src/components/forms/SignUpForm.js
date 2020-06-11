import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/authActions";
import { toast } from "react-toastify";
import { CardContainer } from "../CardContainer";

const SignupForm = ({ isAuthenticated, register, errors }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const data = {
        userName: user.userName,
        email: user.email,
        password: user.password,
      };
      register(data);
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
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="userName"
            value={user.userName}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.userName ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.userName}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.email ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.email}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
          <small id="passwordHelpBlock" class="form-text text-muted">
            Your password must be 8-20 characters long
          </small>
          {errors && errors.password ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.password}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            required
            type="password"
            className="form-control"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.password ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.password}</p>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary" style={styles.submit}>
          Signup
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </CardContainer>
  );
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
