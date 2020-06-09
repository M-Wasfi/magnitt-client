import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  console.log("***");
  const { data } = await http.post(apiUrl + "/users/login", {
    email: email,
    password: password,
  });
  localStorage.setItem(tokenKey, data.token);
  return data.user;
}

export function register(user) {
  return http.post(apiUrl + "/register", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
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
};
