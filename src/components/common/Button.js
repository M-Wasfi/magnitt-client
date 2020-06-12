import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button {...props} className={props.style} style={styles.button}>
      {props.label}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const styles = {
  button: {
    margin: 3,
  },
};
