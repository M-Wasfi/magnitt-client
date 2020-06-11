import React from "react";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = (props) => {
  return (
    <div className="main" style={styles.container}>
      <LoginForm {...props} />
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

export default LoginPage;
