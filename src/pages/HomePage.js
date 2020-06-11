import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CardContainer } from "../components/CardContainer";
import { Carousel } from "../components/Carousel";

const HomePage = ({ user, isAuthenticated }) => {
  return (
    <>
      <div className="container">
        <CardContainer>
          {isAuthenticated ? (
            <h2>Welcome back, {user.userName}</h2>
          ) : (
            <h2>
              Continue your journey, <Link to="/login">Login</Link>
              <br />
              or start a new one now, <Link to="/register">Register</Link>
            </h2>
          )}
        </CardContainer>
        <Carousel />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
