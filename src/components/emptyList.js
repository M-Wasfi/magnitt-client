import React from "react";
import image from "../images/empty.png";

export const EmptyList = () => {
  return (
    <div style={styles.container}>
      <img src={image} style={styles.image} />
      <h4>No Data..</h4>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
};
