import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { getMyCompany } from "./actions/companyActions";
import methods from "./api/httpService";

import "./App.css";

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    methods.setJwt(token);
    store.dispatch(loadUser());
    store.dispatch(getMyCompany());
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
