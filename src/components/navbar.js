import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Navbar = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
        {/* <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              All Companies
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Company
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Company Profile
              </a>
              <a className="dropdown-item" href="#">
                Add Company
              </a>
              <a className="dropdown-item" href="#">
                Add Employee
              </a>
            </div>
          </li>
        </ul> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="nav-link" onClick={handleLogout}>
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default connect(null, { logout })(Navbar);

// <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
//         <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
//           Company name
//         </a>
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
//             <a className="nav-link" href="#">
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </nav>
