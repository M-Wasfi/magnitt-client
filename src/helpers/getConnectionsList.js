// identify and classify the connections' status,
// between the current logged user company and other companies on the platform

export const getConnectionsList = (companyConnections, companyId, type) => {
  let connections = [];
  switch (type) {
    case "CONNECTED":
      connections = companyConnections.filter(
        (con) =>
          (con.sender._id === companyId || con.receiver._id === companyId) &&
          con.status === "CONNECTED"
      );
      break;

    case "PENDING":
      connections = companyConnections.filter(
        (con) => con.receiver._id === companyId && con.status === "PENDING"
      );
      break;

    case "SENT":
      connections = companyConnections.filter(
        (con) =>
          (con.sender._id === companyId || con.receiver._id === companyId) &&
          con.status === "SENT"
      );
      break;

    default:
      break;
  }

  console.log(type);
  console.log(connections ? connections : []);

  return connections ? connections : [];
};
