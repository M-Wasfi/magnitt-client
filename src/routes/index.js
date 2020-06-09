import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import HomePage from "../pages/home_page";
import LoginPage from "../pages/auth_pages/login_page";
import SignupPage from "../pages/auth_pages/signup_page";
import CompaniesPage from "../pages/company/companies_page";
import UsersPage from "../pages/user/users_page";

import AppContainer from "../components/app_container";
import UserPage from "../pages/user/user_page";
import CompanyPage from "../pages/company/company_page";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={SignupPage} />

      <AppContainer>
        <Route path="/home" exact component={HomePage} />
        <Route path="/companies" exact component={CompaniesPage} />
        <Route path="/company" exact component={CompanyPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/user" exact component={UserPage} />
      </AppContainer>

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={LoginPage} />
    </Switch>
  );
}
