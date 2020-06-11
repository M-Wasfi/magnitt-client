import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createCompany } from "../../actions/companyActions";
import { CardContainer } from "../CardContainer";

const AddCompanyForm = ({ myCompany, createCompany }) => {
  const [company, setCompany] = useState({
    companyName: "",
    industry: "",
    type: "",
    size: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    createCompany(company);
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  if (myCompany) {
    return <Redirect to="/my-company" />;
  }

  return (
    <CardContainer>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Company's Name</label>
          <input
            type="text"
            className="form-control"
            name="companyName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Type</label>
          <input
            type="text"
            className="form-control"
            name="type"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Size</label>
          <input
            type="text"
            className="form-control"
            name="size"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Industry</label>
          <input
            type="text"
            className="form-control"
            name="industry"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={styles.submit}>
          Submit
        </button>
      </form>
    </CardContainer>
  );
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

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
});

export default connect(mapStateToProps, { createCompany })(AddCompanyForm);
