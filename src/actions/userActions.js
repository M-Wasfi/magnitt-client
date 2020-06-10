import api from "../api/userServices";

import { toast } from "react-toastify";

import {
  GET_ALL_USERS,
  GET_USER,
  SEARCH_USERS,
  CANCEL_SEARCH,
  LOADING,
} from "./actionTypes";

const loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const getAllUsers = () => async (dispatch) => {
  try {
    loading();

    const users = await api.getUsers();

    dispatch({
      type: GET_ALL_USERS,
      payload: users,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    loading();

    const user = await api.getUser();

    dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const searchUsers = (query) => async (dispatch) => {
  try {
    loading();

    const users = await api.searchUsers(query);

    dispatch({
      type: SEARCH_USERS,
      payload: users,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const cancelSearch = () => async (dispatch) => {
  dispatch({
    type: CANCEL_SEARCH,
  });
};
