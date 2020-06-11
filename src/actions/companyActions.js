import api from "../api/companyServices";

import { toast } from "react-toastify";

import {
  GET_ALL_COMPANIES,
  GET_MY_COMPANY,
  CREATE_COMPANY,
  SEND_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST,
  REJECT_CONNECTION_REQUEST,
  ADD_USER_TO_COMPANY,
  GET_COMPANY,
  COMPANIES_REQUEST_FAILED,
  LOADING_COMPANIES,
  ADD_COMPANY_TO_USER,
} from "./actionTypes";

export function loading() {
  return {
    type: LOADING_COMPANIES,
  };
}

export function failed() {
  return {
    type: COMPANIES_REQUEST_FAILED,
  };
}

export const getAllCompanies = () => async (dispatch) => {
  try {
    dispatch(loading());

    const companies = await api.getCompanies();

    dispatch({
      type: GET_ALL_COMPANIES,
      payload: companies,
    });
  } catch (err) {
    dispatch(failed());
    const error = err;
    toast.error(error);
  }
};

export const getCompany = (companyId) => async (dispatch) => {
  try {
    dispatch(loading());

    const company = await api.getCompany(companyId);

    dispatch({
      type: GET_COMPANY,
      payload: company,
    });
  } catch (err) {
    dispatch(failed());
    // const error = err.response.data.message;
    toast.error(err);
  }
};

export const getMyCompany = () => async (dispatch) => {
  try {
    dispatch(loading());

    const company = await api.getMyCompany();

    dispatch({
      type: GET_MY_COMPANY,
      payload: company,
    });
  } catch (err) {
    dispatch(failed());

    // const error = err.response.data.message;
    toast.error(err);
  }
};

export const createCompany = (companyData) => async (dispatch) => {
  try {
    dispatch(loading());

    const company = await api.createCompany(companyData);

    toast.success("Company created");

    dispatch({
      type: CREATE_COMPANY,
      payload: company,
    });
  } catch (err) {
    dispatch(failed());

    // const error = err.response.data.message;
    toast.error(err);
  }
};

export const sendConnectionRequest = (companyId) => async (dispatch) => {
  try {
    dispatch(loading());

    await api.sendConnectionRequest(companyId);

    toast.success("Connection request sent");

    dispatch({
      type: SEND_CONNECTION_REQUEST,
      payload: companyId,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};

export const acceptConnectionRequest = (company) => async (dispatch) => {
  try {
    dispatch(loading());

    await api.acceptConnectionRequest(company._id);

    toast.success("Connection request accepted");

    dispatch({
      type: ACCEPT_CONNECTION_REQUEST,
      payload: company,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};

export const rejectConnectionRequest = (company) => async (dispatch) => {
  try {
    dispatch(loading());

    await api.rejectConnectionRequest(company._id);

    toast.success("Connection request rejected");

    dispatch({
      type: REJECT_CONNECTION_REQUEST,
      payload: company,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};

export const addUserToCompany = (employeeId, companyId) => async (dispatch) => {
  try {
    dispatch(loading());

    await api.addUserToCompany(employeeId);

    toast.success("User added to company");

    dispatch({
      type: ADD_USER_TO_COMPANY,
      payload: employeeId,
    });

    dispatch({
      type: ADD_COMPANY_TO_USER,
      payload: companyId,
    });
  } catch (err) {
    dispatch(failed());

    const error = err.response.data.message;
    toast.error(error);
  }
};
