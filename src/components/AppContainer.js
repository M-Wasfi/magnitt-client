import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const AppContainer = (props) => {
  return (
    <div>
      <Navbar />
      <div className="main">
        {/* <div className="row"> */}
        {/* <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <span data-feather="home"></span>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    <span data-feather="file"></span>
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/companies">
                    <span data-feather="shopping-cart"></span>
                    Companies
                  </Link>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Dashboard</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <span data-feather="file-text"></span>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  {props.user !== null && props.user.company !== null ? (
                    <Link className="nav-link" to="/my-company">
                      <span data-feather="file-text"></span>
                      My Company
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/add-company">
                      <span data-feather="file-text"></span>
                      Create Company
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav> */}

        <main role="main" className="main">
          {props.children}
        </main>
      </div>
    </div>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(AppContainer);
