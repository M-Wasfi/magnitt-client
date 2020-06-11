import React from "react";
import { connect } from "react-redux";
import {
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";
import { CompanyCard } from "./CompanyCard";

const CompaniesGrid = ({
  companies,
  acceptConnectionRequest,
  rejectConnectionRequest,
}) => {
  // const handleAccept = (company) => {
  //   acceptConnectionRequest(company);
  // };

  // const handleReject = (company) => {
  //   rejectConnectionRequest(company);
  // };

  return (
    <div class="container-fluid row">
      {companies.map((company) => (
        // <div class="col" key={company._id}>
        <CompanyCard company={company} />
        // </div>
        //   {/* {pending ? (
        //     <div>
        //       <button
        //         className="btn btn-success"
        //         onClick={() => handleAccept(company)}
        //       >
        //         Accept
        //       </button>
        //       <button
        //         className="btn btn-danger"
        //         onClick={() => handleReject(company)}
        //       >
        //         Reject
        //       </button>
        //     </div>
        //   ) : ( */}
      ))}
    </div>
  );
};

export default connect(null, {
  acceptConnectionRequest,
  rejectConnectionRequest,
})(CompaniesGrid);
