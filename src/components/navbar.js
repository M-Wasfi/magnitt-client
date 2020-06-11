import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Navbar = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
      <Link className="navbar-brand" to="/home">
        Project
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
            <button
              className="btn btn-sm btn-danger"
              // style={{ color: "#fff" }}
              onClick={handleLogout}
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logout })(Navbar);

// <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
//         <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="#">
//           Company name
//         </Link>
//         <button
//           className="navbar-toggler position-absolute d-md-none collapsed"
//           type="button"
//           data-toggle="collapse"
//           data-target="#sidebarMenu"
//           aria-controls="sidebarMenu"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <input
//           className="form-control form-control-dark w-100"
//           type="text"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <ul className="navbar-nav px-3">
//           <li className="nav-item text-nowrap">
//             <Link className="nav-link" to="#">
//               Sign out
//             </Link>
//           </li>
//         </ul>
//       </nav>
