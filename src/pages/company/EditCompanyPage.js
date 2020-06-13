import React from "react";

import EditCompanyForm from "../../components/forms/EditCompanyForm";
import { CardContainer } from "../../components/CardContainer";

const EditCompanyPage = (props) => {
  return (
    <CardContainer>
      <h2>Edit Company Info.</h2>

      <EditCompanyForm {...props} />
    </CardContainer>
  );
};

export default EditCompanyPage;
