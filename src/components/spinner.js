import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default () => (
  <div style={styles.spinner}>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

const styles = {
  spinner: { display: "flex", justifyContent: "center", marginTop: 100 },
};
