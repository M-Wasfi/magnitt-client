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

export async function searchUsers(query) {
  const response = await http.post(endpoint + "/email", { email: query });
  const users = response.data.data;

  return users;
}

export default {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  searchUsers,
};
