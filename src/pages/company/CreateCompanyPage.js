import React from "react";
import AddCompanyForm from "../../components/forms/AddCompanyForm";
import { CardContainer } from "../../components/CardContainer";

const CreateCompanyPage = () => {
  return (
    <div className="container">
      <CardContainer>
        <h1>Create Company Profile</h1>
        <AddCompanyForm />;
      </CardContainer>
    </div>
  );
};

export default CreateCompanyPage;
