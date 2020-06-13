import http from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/connections";

// @desc    Get all company's connections
export async function getCompanyConnections() {
  const response = await http.get(endpoint + "/my-connections");

  const connections = response.data.data;

  return connections;
}

// @desc    Send connection request to company by id
export async function sendConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/send", {
    company: companyId,
  });

  return response.data.data;
}

// @desc    Accept connection request of company by id
export async function acceptConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/accept", {
    company: companyId,
  });

  return response.data.data;
}

// @desc    Reject connection request of company by id
export async function rejectConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/reject", {
    company: companyId,
  });

  return response.data.data;
}

export default {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  getCompanyConnections,
};
