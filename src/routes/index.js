import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./PrivateRoute";
import AppContainer from "../components/AppContainer";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth_pages/LoginPage";
import SignupPage from "../pages/auth_pages/SignupPage";
import CompaniesPage from "../pages/company/CompaniesPage";
import UsersPage from "../pages/user/UsersPage";
import UserPage from "../pages/user/UserPage";
import CompanyPage from "../pages/company/CompanyPage";
import MyCompanyPage from "../pages/company/MyCompanyPage";
import CreateCompanyPage from "../pages/company/CreateCompanyPage";
import ProfilePage from "../pages/user/ProfilePage";
import EditProfilePage from "../pages/user/EditProfilePage";
import EditCompanyPage from "../pages/company/EditCompanyPage";

export default function Routes() {
  return (
    <section>
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={SignupPage} />

        <AppContainer>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/company" component={CompanyPage} />
          <PrivateRoute exact path="/my-company" component={MyCompanyPage} />
          <PrivateRoute
            exact
            path="/edit-company"
            component={EditCompanyPage}
          />
          <PrivateRoute
            exact
            path="/add-company"
            component={CreateCompanyPage}
          />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/user" component={UserPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute
            exact
            path="/edit-profile"
            component={EditProfilePage}
          />
        </AppContainer>

        {/* redirect user to Home page if route does not exist  */}
        <Route path="*" component={HomePage} />
      </Switch>
    </section>
  );
}
