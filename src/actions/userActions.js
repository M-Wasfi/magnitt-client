import api from "../api/userServices";

import { toast } from "react-toastify";

import {
  GET_ALL_USERS,
  GET_USER,
  SEARCH_USERS,
  CANCEL_SEARCH,
  LOADING_USERS,
  USERS_REQUEST_FAILED,
} from "./actionTypes";

export function loading() {
  return {
    type: LOADING_USERS,
  };
}

export function failed() {
  return {
    type: USERS_REQUEST_FAILED,
  };
}

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(loading());

    const users = await api.getUsers();

    dispatch({
      type: GET_ALL_USERS,
      payload: users,
    });
  } catch (err) {
    dispatch(failed());

    // const error = err.response.data.message;
    toast.error(err);
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch(loading());

    const user = await api.getUser(userId);

    dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};

export const searchUsers = (query) => async (dispatch) => {
  try {
    dispatch(loading());

    const users = await api.searchUsers(query);

    dispatch({
      type: SEARCH_USERS,
      payload: users,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};

export const cancelSearch = () => async (dispatch) => {
  dispatch({
    type: CANCEL_SEARCH,
  });
};
