import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getCompany } from "../../actions/companyActions";
import {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/connectionActions";

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

  const otherCompanyId = location.state.company;

  // get company info and determine its connection status based on the current user company's info
  useEffect(() => {
    if (myCompany) {
      setStatus(getStatusNew(myCompany._id, otherCompanyId, connections));
    }

    getCompany(otherCompanyId);
  }, [connections, location, getCompany, otherCompanyId, myCompany]);

  const handleSend = () => {
    sendConnectionRequest(otherCompanyId);
  };

  const handleAccept = () => {
    acceptConnectionRequest(otherCompanyId);
  };

  const handleReject = () => {
    rejectConnectionRequest(otherCompanyId);
  };

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <CompanyProfile
      conStatus={status}
      company={company}
      myCompany={myCompany}
      handleAccept={handleAccept}
      handleSend={handleSend}
      handleReject={handleReject}
      userId={user !== null ? user._id : "0"}
      isAuthenticated={isAuthenticated}
    />
  );
};

CompanyPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  location: PropTypes.object,
  myCompany: PropTypes.object,
  company: PropTypes.object,
  connections: PropTypes.array,
  user: PropTypes.object,
  sendConnectionRequest: PropTypes.func,
  acceptConnectionRequest: PropTypes.func,
  rejectConnectionRequest: PropTypes.func,
  getCompany: PropTypes.func,
};

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  company: state.companyReducer.company,
  loading: state.companyReducer.loading,
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
  connections: state.connectionReducer.connections,
});

export default connect(mapStateToProps, {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompany,
})(CompanyPage);
