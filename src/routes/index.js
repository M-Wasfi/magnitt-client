import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
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
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignupPage} />

        <AppContainer>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/companies" exact component={CompaniesPage} />
          <Route path="/company" exact component={CompanyPage} />
          <PrivateRoute path="/my-company" exact component={MyCompanyPage} />
          <PrivateRoute
            path="/edit-company"
            exact
            component={EditCompanyPage}
          />
          <PrivateRoute
            path="/add-company"
            exact
            component={CreateCompanyPage}
          />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/user" exact component={UserPage} />
          <PrivateRoute path="/profile" exact component={ProfilePage} />
          <PrivateRoute
            path="/edit-profile"
            exact
            component={EditProfilePage}
          />
          {/* redirect user to Home page if route does not exist  */}
          <Redirect to="/" />
        </AppContainer>
      </Switch>
    </section>
  );
}
