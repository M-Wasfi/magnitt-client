import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../actions/authActions";

const Navbar = ({ logout, user, isAuthenticated }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
      <Link className="navbar-brand" to="/home">
        Magnitt Connect
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/companies">
              All Companies
            </Link>
          </li>
          <li className="nav-item active dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dashboard
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              {user !== null && user.company !== null ? (
                <Link className="dropdown-item" to="/my-company">
                  Company Profile
                </Link>
              ) : (
                <Link className="dropdown-item" to="/add-company">
                  Add Company
                </Link>
              )}
            </div>
          </li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            {isAuthenticated ? (
              <button className="btn btn-sm btn-danger" onClick={handleLogout}>
                Sign out
              </button>
            ) : (
              <Link className="btn btn-sm btn-success" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
