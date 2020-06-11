import React from "react";
import { connect } from "react-redux";
import { CardContainer } from "../components/CardContainer";
import { Carousel } from "../components/Carousel";

const HomePage = ({ user }) => {
  return (
    <>
      <div className="container">
        <Carousel />
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
