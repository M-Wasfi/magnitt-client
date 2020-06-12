import React from "react";
import EditProfileForm from "../../components/forms/EditProfileForm";

const EditProfilePage = (props) => {
  return (
    <div className="container">
      <EditProfileForm {...props} />
    </div>
  );
};

export default EditProfilePage;
