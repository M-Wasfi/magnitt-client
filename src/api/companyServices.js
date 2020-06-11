import http from "./httpService";
import { getCurrentUser } from "./authServices";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/companies";
const user = getCurrentUser();

export async function getCompanies() {
  const response = await http.get(endpoint);

  const companies = response.data.data;

  return companies;
}

export async function getCompany(companyId) {
  const response = await http.get(endpoint + `/${companyId}`);
  const company = response.data.data;

  return company;
}

export async function getMyCompany() {
  const response = await http.get(endpoint + "/my-company");
  const company = response.data.data;

  return company;
}

export async function createCompany(company) {
  const body = { ...company, owner: user.id };

  const response = await http.post(endpoint, body);

  const newCompany = response.data.data;

  return newCompany;
}

export function updateCompany(company) {
  const body = { ...company };

  return http.put(endpoint + `/${company._id}`, body);
}

export function deleteCompany(companyId) {
  return http.delete(endpoint + `/${companyId}`);
}

export async function sendConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/send", {
    company: companyId,
  });

  return response.data.message;
}

export async function acceptConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/accept", {
    company: companyId,
  });

  return response.data.message;
}

export async function rejectConnectionRequest(companyId) {
  const response = await http.post(endpoint + "/connections/reject", {
    company: companyId,
  });

  return response.data.message;
}

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
