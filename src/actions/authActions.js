import auth from "../api/authServices";

import { toast } from "react-toastify";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
} from "./actionTypes";

const loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    loading();

    const user = await auth.login(email, password);

    toast.success("User logged in");

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    loading();

    const user = await auth.register(userData);

    toast.success("User registered");

    dispatch({
      type: REGISTER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    loading();

    await auth.logout();

    toast.success("User logged out");

    dispatch({ type: LOGOUT });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    loading();

    const user = await auth.getUser();

    dispatch({
      type: USER_LOADED,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
