import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const tokenKey = "token";
const endpoint = apiUrl + "/users";

http.setJwt(getJwt());

export async function login(email, password) {
  const response = await http.post(endpoint + "/login", {
    email: email,
    password: password,
  });

  const data = response.data.data;

  http.setJwt(data.token);

  return data.user;
}

export async function register(user) {
  const response = await http.post(endpoint + "/register", user);

  const data = response.data.data;

  http.setJwt(data.token);

  return data.user;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export async function getUser() {
  const userId = getCurrentUser().id;
  const response = await http.get(endpoint + `/${userId}`);
  const user = response.data.data;

  return user;
}

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
};
