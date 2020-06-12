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
  AUTHENTICATING,
  UPDATE_PROFILE,
} from "./actionTypes";

const loading = () => (dispatch) => {
  dispatch({
    type: AUTHENTICATING,
  });
};

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    loading();

    const data = await auth.login(email, password);

    toast.success("User logged in");

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const error = err.response.data.data.errors;

    toast.error(err.response.data.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    loading();

    const data = await auth.register(userData);

    toast.success("User registered");

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const error = err.response.data.data.errors;

    toast.error(err.response.data.message);

    dispatch({
      type: REGISTER_FAIL,
      payload: error,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    loading();

    auth.logout();

    toast.success("User logged out");

    dispatch({ type: LOGOUT });
  } catch (err) {
    toast.error(err);

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

// Update User Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    loading();

    const user = await auth.updateProfile(userData);

    toast.success("User profile updated");

    dispatch({
      type: UPDATE_PROFILE,
      payload: user,
    });
  } catch (err) {
    const error = err.response.data.data.errors;

    toast.error(err.response.data.message);

    dispatch({
      type: REGISTER_FAIL,
      payload: error,
    });
  }
};
