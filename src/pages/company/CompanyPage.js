import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompany,
} from "../../actions/companyActions";
import Spinner from "../../components/spinner";

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
  });

  useEffect(() => {
    const companyId = location.state.company._id;

    getCompany(companyId);

    if (!myCompany) {
      setIsConnection({
        pending: false,
        connection: true,
      });
      return;
    }

    const con = myCompany.companyConnections.includes(companyId);
    const sent = myCompany.sentConnections.includes(companyId);
    const pen = myCompany.pendingConnections.includes(companyId);

    if (con) {
      setIsConnection({
        pending: false,
        connection: true,
      });
    } else if (sent) {
      setIsConnection({
        pending: true,
        connection: false,
      });
    } else if (pen) {
      setIsConnection({
        pending: true,
        connection: false,
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>{company.companyName}</h1>

      {!isConnection.connection ? (
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
      <h1>Employees</h1>
      <ul>
        {company.employees.map((employee) => (
          <li>{employee.userName}</li>
        ))}
      </ul>
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
