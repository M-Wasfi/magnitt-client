import api from "../api/companyServices";

import { toast } from "react-toastify";

import {
  GET_ALL_COMPANIES,
  GET_MY_COMPANY,
  CREATE_COMPANY,
  SEND_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST,
  REJECT_CONNECTION_REQUEST,
  LOADING,
  ADD_USER_TO_COMPANY,
  GET_COMPANY,
} from "./actionTypes";

const loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const getAllCompanies = () => async (dispatch) => {
  try {
    loading();

    const companies = await api.getCompanies();

    dispatch({
      type: GET_ALL_COMPANIES,
      payload: companies,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const getCompany = (companyId) => async (dispatch) => {
  try {
    loading();

    const company = await api.getCompany(companyId);

    dispatch({
      type: GET_COMPANY,
      payload: company,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const getMyCompany = () => async (dispatch) => {
  try {
    loading();

    const company = await api.getMyCompany();

    dispatch({
      type: GET_MY_COMPANY,
      payload: company,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const createCompany = (companyData) => async (dispatch) => {
  try {
    loading();

    const company = await api.createCompany(companyData);

    toast.success("Company created");

    dispatch({
      type: CREATE_COMPANY,
      payload: company,
    });
  } catch (err) {
    // const error = err.response.data.message;
    toast.error(err);
  }
};

export const sendConnectionRequest = (companyId) => async (dispatch) => {
  try {
    loading();

    await api.sendConnectionRequest(companyId);

    toast.success("Connection request sent");

    dispatch({
      type: SEND_CONNECTION_REQUEST,
      payload: companyId,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const acceptConnectionRequest = (companyId) => async (dispatch) => {
  try {
    loading();

    await api.acceptConnectionRequest(companyId);

    toast.success("Connection request accepted");

    dispatch({
      type: ACCEPT_CONNECTION_REQUEST,
      payload: companyId,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const rejectConnectionRequest = (companyId) => async (dispatch) => {
  try {
    loading();

    await api.rejectConnectionRequest(companyId);

    toast.success("Connection request rejected");

    dispatch({
      type: REJECT_CONNECTION_REQUEST,
      payload: companyId,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};

export const addUserToCompany = (employeeId) => async (dispatch) => {
  try {
    loading();

    await api.addUserToCompany(employeeId);

    toast.success("User added to company");

    dispatch({
      type: ADD_USER_TO_COMPANY,
      payload: employeeId,
    });
  } catch (err) {
    const error = err.response.data.message;
    toast.error(error);
  }
};
