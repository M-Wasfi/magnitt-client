import React from "react";
import LoginForm from "../../components/auth_forms/LoginForm";

const LoginPage = (props) => {
  return (
    <div className="container">
      <LoginForm {...props} />
    </div>
  );
};

// const styles = {};

export default LoginPage;
