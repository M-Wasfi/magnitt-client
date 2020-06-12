export const getConnectionsList = (companyConnections, companyId, type) => {
  let connections = [];
  switch (type) {
    case "CONNECTED":
      connections = companyConnections.find(
        (con) =>
          (con.sender === companyId || con.receiver === companyId) &&
          con.status === "CONNECTED"
      );
      break;

    case "PENDING":
      connections = companyConnections.find(
        (con) =>
          (con.sender === companyId || con.receiver === companyId) &&
          con.status === "PENDING"
      );
      break;

    case "SENT":
      connections = companyConnections.find(
        (con) =>
          (con.sender === companyId || con.receiver === companyId) &&
          con.status === "SENT"
      );
      break;

    default:
      break;
  }

  return connections ? connections : [];
};
