// identify and classify the connection status,
// between the current logged user company and other company on the platform
export const getStatusNew = (myCId, otherCId, connections) => {
  const sentConnection = connections.find(
    (con) => con.sender._id === myCId && con.receiver._id === otherCId
  );

  const receivedConnection = connections.find(
    (con) => con.receiver._id === myCId && con.sender._id === otherCId
  );

  if (receivedConnection) {
    return { status: receivedConnection.status, type: "receiver" };
  }

  if (sentConnection) {
    return { status: sentConnection.status, type: "sender" };
  }

  return { status: "no", type: "no" };
};
