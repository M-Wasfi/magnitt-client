import http from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = apiUrl + "/users";

// @desc    Get all users
export async function getUsers() {
  const response = await http.get(endpoint);
  const users = response.data.data;

  return users;
}

// @desc    Get user by id
export async function getUser(userId) {
  const response = await http.get(endpoint + `/${userId}`);
  const user = response.data.data;

  return user;
}

// @desc    Update user by id
export function updateUser(user) {
  const body = { ...user };

  return http.put(endpoint + `/${user._id}`, body);
}

// @desc    delete user by id
export function deleteUser(userId) {
  return http.delete(endpoint + `/${userId}`);
}

// @desc    Get user by email
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
