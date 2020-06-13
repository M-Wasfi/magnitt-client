import React, { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { tokenKey } from "./config.json";

import Routes from "./routes";

import { loadUser } from "./actions/authActions";
import { getMyCompany } from "./actions/companyActions";
import { getCompanyConnections } from "./actions/connectionActions";

import methods from "./api/httpService";

import "./App.css";

// If token exists,  get user data and his company data
const App = () => {
  useEffect(() => {
    const token = localStorage.getItem(tokenKey);

    methods.setJwt(token);
    store.dispatch(loadUser());
    store.dispatch(getMyCompany());
    store.dispatch(getCompanyConnections());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
