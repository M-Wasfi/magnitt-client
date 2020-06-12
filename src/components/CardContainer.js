import React from "react";

export const CardContainer = (props) => {
  return (
    <div className="container" style={{ paddingTop: 10 }}>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        {props.children}
      </div>
    </div>
  );
};
