import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getCompany,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";

import { getStatusNew } from "../../helpers/getStatus";

import Spinner from "../../components/Spinner";
import { CompanyProfile } from "../../components/company/CompanyProfile";

const CompanyPage = ({
  location,
  isAuthenticated,
  loading,
  user,
  myCompany,
  company,
  connections,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompany,
}) => {
  const [status, setStatus] = useState({});

  const otherCompanyId = location.state.company._id;

  useEffect(() => {
    getCompany(otherCompanyId);

    setStatus(getStatusNew(myCompany._id, otherCompanyId, connections));
  }, [getStatusNew, otherCompanyId, myCompany, connections]);

  const handleSend = (company) => {
    sendConnectionRequest(company);
  };

  const handleAccept = (company) => {
    acceptConnectionRequest(company);
  };

  const handleReject = (company) => {
    rejectConnectionRequest(company);
  };

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <CompanyProfile
      conStatus={status}
      company={company}
      otherCompanyId={otherCompanyId}
      myCompany={myCompany}
      handleAccept={handleAccept}
      handleSend={handleSend}
      handleReject={handleReject}
      userId={user !== null ? user._id : 0}
      isAuthenticated={isAuthenticated}
    />
  );
};

CompanyPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  myCompany: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
  connections: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  sendConnectionRequest: PropTypes.func.isRequired,
  acceptConnectionRequest: PropTypes.func.isRequired,
  rejectConnectionRequest: PropTypes.func.isRequired,
  getCompany: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  company: state.companyReducer.company,
  connections: state.companyReducer.connections,
  loading: state.companyReducer.loading,
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompany,
})(CompanyPage);
