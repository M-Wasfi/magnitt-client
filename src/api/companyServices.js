import http from "./httpService";
import { getCurrentUser } from "./authServices";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/companies";
const user = getCurrentUser();

// @desc    Get all companies
export async function getCompanies() {
  const response = await http.get(endpoint);

  const companies = response.data.data;

  return companies;
}

// @desc    Get company by id
export async function getCompany(companyId) {
  const response = await http.get(endpoint + `/${companyId}`);
  const company = response.data.data;

  return company;
}

// @desc    Get logged in user's company
export async function getMyCompany() {
  const response = await http.get(endpoint + "/my-company");
  const company = response.data.data;

  return company;
}

// @desc    Create new company
export async function createCompany(company) {
  const body = { ...company, owner: user.id };

  const response = await http.post(endpoint, body);

  const newCompany = response.data.data;

  return newCompany;
}

// @desc    Update company by id
export async function updateCompany(company) {
  const body = { ...company };

  const response = await http.put(endpoint + `/${company._id}`, body);

  const updatedCompany = response.data.data;

  return updatedCompany;
}

// @desc    Delete company by id
export function deleteCompany(companyId) {
  return http.delete(endpoint + `/${companyId}`);
}

// @desc    Get all company's connections
export async function getCompanyConnections() {
  const response = await http.get(endpoint + "/my-connections");

  const connections = response.data.data;

  return connections;
}

// @desc    Send connection request to company by id
export async function sendConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/send", {
    company: companyId,
  });

  return response.data.data;
}

// @desc    Accept connection request of company by id
export async function acceptConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/accept", {
    company: companyId,
  });

  return response.data.data;
}

// @desc    Reject connection request of company by id
export async function rejectConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/reject", {
    company: companyId,
  });

  return response.data.data;
}

// @desc    Add user to company by id
export async function addUserToCompany(employeeId) {
  const response = await http.post(endpoint + "/employee", {
    employee: employeeId,
  });

  return response.data.success;
}

export default {
  getCompanies,
  getCompany,
  getMyCompany,
  getCurrentUser,
  createCompany,
  updateCompany,
  deleteCompany,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  addUserToCompany,
};
