import React, { Component } from "react";
import auth from "../../api/authServices";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("***");

    try {
      const { email, password } = this.state;
      await auth.login(email, password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/home";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        console.log(errors);

        this.setState({ errors });
      }
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="card" style={styles.paper}>
        <div className="card-body" style={styles.paper}>
          <form style={styles.form} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={styles.submit}
            >
              Login
            </button>
            <div>
              <a href="/register">Create an account?</a>
              <a href="/register">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

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

export default LoginForm;
