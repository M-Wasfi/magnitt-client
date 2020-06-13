import api from "../api/connectionServices";

import { toast } from "react-toastify";

import {
  SEND_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST,
  REJECT_CONNECTION_REQUEST,
  GET_CONNECTIONS_REQUEST,
  LOADING_REQUESTS,
  CONNECTIONS_REQUEST_FAILED,
} from "./actionTypes";

export function loading() {
  return {
    type: LOADING_REQUESTS,
  };
}

export function failed() {
  return {
    type: CONNECTIONS_REQUEST_FAILED,
  };
}

export const getCompanyConnections = () => async (dispatch) => {
  try {
    dispatch(loading());

    const connections = await api.getCompanyConnections();

    dispatch({
      type: GET_CONNECTIONS_REQUEST,
      payload: connections,
    });
  } catch (err) {
    dispatch(failed());

    toast.error(err);
  }
};

export const sendConnectionRequest = (companyId) => async (dispatch) => {
  try {
    dispatch(loading());
    console.log(companyId);
    const connection = await api.sendConnectionRequest(companyId);

    toast.success("Connection request sent");

    dispatch({
      type: SEND_CONNECTION_REQUEST,
      payload: connection,
    });
  } catch (err) {
    dispatch(failed());
    console.log(err);
    const error = err.response.data.message;
    console.log(error);

    toast.error(error);
  }
};

export const acceptConnectionRequest = (companyId) => async (dispatch) => {
  try {
    dispatch(loading());

    const connection = await api.acceptConnectionRequest(companyId);

    toast.success("Connection request accepted");

    dispatch({
      type: ACCEPT_CONNECTION_REQUEST,
      payload: connection,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;

    toast.error(error);
  }
};

export const rejectConnectionRequest = (companyId) => async (dispatch) => {
  try {
    dispatch(loading());

    const connection = await api.rejectConnectionRequest(companyId);

    toast.success("Connection request rejected");

    dispatch({
      type: REJECT_CONNECTION_REQUEST,
      payload: connection,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;

    toast.error(error);
  }
};
