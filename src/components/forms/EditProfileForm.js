import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateProfile } from "../../actions/authActions";

import { CardContainer } from "../CardContainer";
import { Input } from "./common/Input";
import { Button } from "../common/Button";

const EditProfileForm = ({ updateProfile, errors, loading, location }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
  });

  const [updated, setUpdated] = useState(false);

  const userData = location.state.user;

  // Fill in user data
  useEffect(() => {
    setUser({
      userName: userData.userName,
      email: userData.email,
    });
  }, [setUser, userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateProfile(user).then(() => setUpdated(true));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (updated && !loading && !errors) {
    return <Redirect to="/profile" />;
  }

  return (
    <CardContainer>
      <form style={{ marginTop: 1 }} onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          name="userName"
          placeholder="Name"
          value={user.userName}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Email address"
          value={user.email}
          handleChange={handleChange}
          errors={errors}
        />

        <Button shape="btn btn-primary" label="Edit" type="submit" />
      </form>
    </CardContainer>
  );
};

EditProfileForm.propTypes = {
  updateProfile: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => ({
  errors: state.authReducer.errors,
  loading: state.authReducer.loading,
});

export default connect(mapStateToProps, { updateProfile })(EditProfileForm);
