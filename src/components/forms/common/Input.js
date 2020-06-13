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

      {/* Show errors if available */}
      {errors && errors[name] ? (
        <p style={styles.error}>{errors[name]}</p>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
};

const styles = {
  error: { color: "red", fontSize: 12 },
};
