export const getStatus = (company, companyId) => {
  var connectionStatus = {
    pending: false,
    connection: false,
    sent: false,
    company: true,
  };

  if (company === null) {
    connectionStatus = {
      pending: false,
      connection: false,
      sent: false,
      company: false,
    };

    return connectionStatus;
  } else {
    const con = company.companyConnections.some(
      (com) => com._id === companyId || com === companyId
    );
    const sent = company.sentConnections.some(
      (com) => com._id === companyId || com === companyId
    );
    const pen = company.pendingConnections.some(
      (com) => com._id === companyId || com === companyId
    );

    if (con) {
      connectionStatus = {
        ...connectionStatus,
        connection: true,
      };
    } else if (sent) {
      connectionStatus = {
        ...connectionStatus,
        sent: true,
      };
    } else if (pen) {
      connectionStatus = {
        ...connectionStatus,
        pending: true,
      };
    }

    return connectionStatus;
  }
};
