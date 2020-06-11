export const getStatus = (company, companyId) => {
  var connectionStatus = {
    pending: false,
    connection: false,
    sent: false,
    company: true,
  };
  //   console.log(company._id);
  console.log(companyId);
  console.log(company);
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
    console.log(
      company.companyConnections.some((com) => com._id === companyId)
    );
    console.log(con);
    console.log(sent);
    console.log(pen);

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
