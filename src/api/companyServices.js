import http from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/companies";

export async function getCompanies() {
  const response = await http.get(endpoint);
  const companies = response.data.data;

  return companies;
}

export function getCompany(companyId) {
  return http.get(endpoint + `/${companyId}`);
}

export function createCompany(company) {
  const body = { ...company };

  return http.post(endpoint, body);
}

export function updateCompany(company) {
  const body = { ...company };

  return http.put(endpoint + `/${company._id}`, body);
}

export function deleteCompany(companyId) {
  return http.delete(endpoint + `/${companyId}`);
}
