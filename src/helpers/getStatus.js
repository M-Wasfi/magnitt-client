export const getStatusNew = (myCId, otherCId, connections) => {
  const sentConnection = connections.find(
    (con) => con.sender === myCId && con.receiver === otherCId
  );

  const receivedConnection = connections.find(
    (con) => con.receiver === myCId && con.sender === otherCId
  );

  if (receivedConnection) {
    return { status: receivedConnection.status, type: "receiver" };
  }

  if (sentConnection) {
    return { status: sentConnection.status, type: "sender" };
  }

  return { status: "no", type: "no" };
};
