import React from "react";

import EditCompanyForm from "../../components/forms/EditCompanyForm";

const EditCompanyPage = (props) => {
  return (
    <div className="container">
      <EditCompanyForm {...props} />
    </div>
  );
};

export default EditCompanyPage;
