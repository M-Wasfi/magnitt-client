import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AppContainer = (props) => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <nav
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
                  <Link className="nav-link" to="/home">
                    <span data-feather="file-text"></span>
                    My Company
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    <span data-feather="file-text"></span>
                    Add Employee
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
