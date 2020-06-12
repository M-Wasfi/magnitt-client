import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/authActions";
import { getMyCompany, getCompanyConnections } from "./actions/companyActions";

import methods from "./api/httpService";

import "./App.css";

// If token exists,  get user data and his company data
const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

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
