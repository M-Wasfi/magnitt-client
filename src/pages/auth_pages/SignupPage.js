import React from "react";
import SignupForm from "../../components/auth_forms/SignUpForm";

const SignUpPage = (props) => {
  return (
    <div className="container">
      <SignupForm {...props} />
    </div>
  );
};

// const styles = {};

export default SignUpPage;
