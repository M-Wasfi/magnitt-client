import React, { Fragment } from "react";
import { connect } from "react-redux";
import { CardContainer } from "../components/CardContainer";
import { Carousel } from "../components/Carousel";

const HomePage = ({ user }) => {
  return (
    <>
      <Carousel />
      <div className="container">
        <CardContainer>
          <h1>Welcome back, {user.userName}</h1>
          <h1></h1>
        </CardContainer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(HomePage);
