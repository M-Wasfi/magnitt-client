import React from "react";
import AddCompanyForm from "../../components/forms/AddCompanyForm";
import { CardContainer } from "../../components/CardContainer";

const CreateCompanyPage = () => {
  return (
    <CardContainer>
      <h2>Create Company Profile</h2>
      <AddCompanyForm />
    </CardContainer>
  );
};

export default CreateCompanyPage;
