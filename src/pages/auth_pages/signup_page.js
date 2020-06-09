import React from "react";
import SignupForm from "../../components/signup/signup";

const SignupPage = (props) => {
  return (
    <div className="container">
      <SignupForm {...props} />
    </div>
  );
};

// const styles = {};

export default SignupPage;
