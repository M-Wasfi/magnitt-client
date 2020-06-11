import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { CardContainer } from "../CardContainer";

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
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.email ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.email}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.password ? (
            <p style={{ color: "red", fontSize: 12 }}>{errors.password}</p>
          ) : null}
        </div>

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
