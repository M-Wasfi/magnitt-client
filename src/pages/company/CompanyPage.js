import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getCompany,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";
import Spinner from "../../components/spinner";
import { getStatus } from "../../helpers/getStatus";
import { CompanyProfile } from "../../components/company/CompanyProfile";

const CompanyPage = ({
  location,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  user,
  isAuthenticated,
  myCompany,
  company,
  getCompany,
  loading,
}) => {
  const [isConnection, setIsConnection] = useState({
    pending: false,
    connection: false,
    sent: false,
    company: true,
  });

  const otherCompanyId = location.state.company._id;

  useEffect(() => {
    getCompany(otherCompanyId);

    const connectionStatus = getStatus(myCompany, otherCompanyId);

    setIsConnection(connectionStatus);
  }, [getCompany, otherCompanyId, myCompany]);

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
      con={isConnection}
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

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  company: state.companyReducer.company,
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
