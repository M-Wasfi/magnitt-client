import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  errors,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        required
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {name === "password" ? (
        <small id="passwordHelpBlock" className="form-text text-muted">
          Your password must be 8-20 characters long
        </small>
      ) : null}
      {errors && errors[name] ? (
        <p style={styles.error}>{errors[name]}</p>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const styles = {
  error: { color: "red", fontSize: 12 },
};
