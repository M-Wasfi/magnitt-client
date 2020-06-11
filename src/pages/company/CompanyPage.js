import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getCompany,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "../../actions/companyActions";
import Spinner from "../../components/spinner";
import UsersList from "../../components/user/UsersList";
import { CardContainer } from "../../components/CardContainer";

const CompanyPage = ({
  location,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,

  myCompany,
  company,
  getCompany,
  loading,
}) => {
  const [isConnection, setIsConnection] = useState({
    pending: false,
    connection: false,
    sent: false,
    company: false,
  });

  useEffect(() => {
    const companyId = location.state.company._id;

    getCompany(companyId);

    if (myCompany === null) {
      setIsConnection({
        pending: false,
        connection: false,
        sent: false,
        company: false,
      });
      return;
    }

    const con = myCompany.companyConnections.find(
      (company) => company._id === companyId
    );
    const sent = myCompany.sentConnections.find(
      (company) => company._id === companyId
    );
    const pen = myCompany.pendingConnections.find(
      (company) => company._id === companyId
    );

    if (con) {
      setIsConnection({
        ...isConnection,
        connection: true,
      });
    } else if (sent) {
      setIsConnection({
        ...isConnection,
        sent: true,
      });
    } else if (pen) {
      setIsConnection({
        ...isConnection,
        pending: true,
      });
    }
  }, []);

  const handleSend = () => {
    sendConnectionRequest(location.state.company._id);
  };

  const handleAccept = () => {
    acceptConnectionRequest(location.state.company._id);
  };

  const handleReject = () => {
    rejectConnectionRequest(location.state.company._id);
  };

  if (loading || company === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="row">
        <CardContainer>
          <h1>{company.companyName} </h1>
          <h4>
            {isConnection.company
              ? ""
              : isConnection.connection
              ? "Connected"
              : ""}
          </h4>

          {!isConnection.sent &&
          !isConnection.pending & !isConnection.connection &&
          isConnection.company ? (
            <button
              onClick={handleSend}
              className="btn btn-primary"
              style={styles.submit}
            >
              Connect
            </button>
          ) : (
            <div />
          )}
          {isConnection.pending ? (
            <div>
              <button
                onClick={handleAccept}
                className="btn btn-success"
                style={styles.submit}
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="btn btn-danger"
                style={styles.submit}
              >
                Reject
              </button>
            </div>
          ) : (
            <div />
          )}
        </CardContainer>
      </div>

      <CardContainer>
        <h1>Employees</h1>
        <UsersList users={company.employees} own={true} />
      </CardContainer>
    </div>
  );
};

const styles = {
  submit: {
    margin: 3,
  },
};

const mapStateToProps = (state) => ({
  myCompany: state.companyReducer.myCompany,
  company: state.companyReducer.company,
  loading: state.companyReducer.loading,
});

export default connect(mapStateToProps, {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompany,
})(CompanyPage);
