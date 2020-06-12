import React from "react";

import Navbar from "./Navbar";

const AppContainer = (props) => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <main role="main" className="main">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default AppContainer;
