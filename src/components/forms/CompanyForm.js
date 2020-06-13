import React from "react";
import PropTypes from "prop-types";

import { CardContainer } from "../CardContainer";
import { Input } from "./common/Input";
import { Button } from "../common/Button";

export const CompanyForm = ({
  handleSubmit,
  handleChange,
  company,
  errors,
}) => {
  const { companyName, type, size, industry } = company;

  return (
    <CardContainer>
      <form style={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Company's Name"
          type="text"
          name="companyName"
          placeholder="Company's Name"
          value={companyName}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Type"
          type="text"
          name="type"
          placeholder="Type"
          value={type}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Size"
          type="text"
          name="size"
          placeholder="Size"
          value={size}
          handleChange={handleChange}
          errors={errors}
        />

        <Input
          label="Industry"
          type="text"
          name="industry"
          placeholder="Industry"
          value={industry}
          handleChange={handleChange}
          errors={errors}
        />

        <Button shape="btn btn-primary" label="Submit" type="submit" />
      </form>
    </CardContainer>
  );
};

CompanyForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  company: PropTypes.object,
};

const styles = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
};
