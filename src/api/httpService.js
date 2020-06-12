import axios from "axios";
import { toast } from "react-toastify";
import { tokenKey } from "../config.json";

//     Intercept promise rejection
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

//     if token exists: set token in local storage and axios default header
function setJwt(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem(tokenKey, token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem(tokenKey);
  }
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
