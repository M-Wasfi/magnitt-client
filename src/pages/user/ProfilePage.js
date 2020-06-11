import React from "react";
import { connect } from "react-redux";
import { CardContainer } from "../../components/CardContainer";

const ProfilePage = ({ user }) => {
  return (
    <div className="container">
      <CardContainer>
        <h1>Profile</h1>
        <h1>{user.userName}</h1>
      </CardContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(ProfilePage);
