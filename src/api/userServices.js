import http from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/users";

export async function getUsers() {
  const response = await http.get(endpoint);
  const users = response.data.data;

  return users;
}

export function getUser(userId) {
  return http.get(endpoint + `/${userId}`);
}

export function updateUser(user) {
  const body = { ...user };

  return http.put(endpoint + `/${user._id}`, body);
}

export function deleteUser(userId) {
  return http.delete(endpoint + `/${userId}`);
}
