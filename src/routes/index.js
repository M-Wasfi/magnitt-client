import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth_pages/LoginPage";
import SignupPage from "../pages/auth_pages/SignupPage";
import CompaniesPage from "../pages/company/CompaniesPage";
import UsersPage from "../pages/user/UsersPage";
import UserPage from "../pages/user/UserPage";
import CompanyPage from "../pages/company/CompanyPage";
import MyCompanyPage from "../pages/company/MyCompanyPage";
import CreateCompanyPage from "../pages/company/CreateCompanyPage";

import AppContainer from "../components/AppContainer";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "../pages/Landing";

export default function Routes() {
  return (
    <section>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={SignupPage} />

        <AppContainer>
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/companies" component={CompaniesPage} />
          <PrivateRoute exact path="/company" component={CompanyPage} />
          <PrivateRoute exact path="/my-company" component={MyCompanyPage} />
          <PrivateRoute
            exact
            path="/add-company"
            component={CreateCompanyPage}
          />
          <PrivateRoute exact path="/users" component={UsersPage} />
          <PrivateRoute exact path="/user" component={UserPage} />
        </AppContainer>

        {/* redirect user to Login page if route does not exist and user is not authenticated */}
        <Route component={LoginPage} />
      </Switch>
    </section>
  );
}
