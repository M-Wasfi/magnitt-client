import React from "react";

const SignupForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set token into localstorage
    localStorage.setItem("token", "I am now logged in");
    props.history.push("/home");
  };

  return (
    <div className="container" style={styles.paper}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="Name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={styles.submit}>
          Signup
        </button>
      </form>
    </div>
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

export default SignupForm;
