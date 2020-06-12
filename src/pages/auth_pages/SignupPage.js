import React from "react";

import SignupForm from "../../components/forms/SignUpForm";

const SignUpPage = (props) => {
  return (
    <div className="main" style={styles.container}>
      <SignupForm {...props} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
};

export default SignUpPage;
