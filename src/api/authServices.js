import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl, tokenKey } from "../config.json";

const endpoint = apiUrl + "/users";

http.setJwt(getJwt());

// @desc    Loign by email and password
export async function login(email, password) {
  const response = await http.post(endpoint + "/login", {
    email: email,
    password: password,
  });

  const data = response.data.data;

  http.setJwt(data.token);

  return data;
}

// @desc   Register new user
export async function register(user) {
  console.log(user);
  const response = await http.post(endpoint + "/register", user);

  const data = response.data.data;

  http.setJwt(data.token);

  return data;
}

// @desc   Update user by id
export async function updateProfile(user) {
  const response = await http.put(endpoint + "/updateProfile", user);

  const updatedUser = response.data.data;

  return updatedUser;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

// @desc   Get user by id
export async function getUser() {
  const userId = getCurrentUser().id;
  const response = await http.get(endpoint + `/${userId}`);
  const user = response.data.data;

  return user;
}

// @desc   Get user info from JWT
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  register,
  getUser,
  updateProfile,
};
