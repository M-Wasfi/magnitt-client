import {
  GET_ALL_COMPANIES,
  GET_COMPANY,
  GET_MY_COMPANY,
  CREATE_COMPANY,
  UPDATE_COMPANY,
  ADD_USER_TO_COMPANY,
  LOADING_COMPANIES,
  COMPANIES_REQUEST_FAILED,
  LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  companies: [],
  company: null,
  myCompany: null,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_COMPANIES:
      return {
        ...state,
        loading: false,
        companies: payload,
      };

    case GET_COMPANY:
      return {
        ...state,
        loading: false,
        company: payload,
      };

    case GET_MY_COMPANY:
      return {
        ...state,
        loading: false,
        myCompany: payload,
      };

    case CREATE_COMPANY:
      return {
        ...state,
        loading: false,
        myCompany: payload,
      };

    case UPDATE_COMPANY:
      return {
        ...state,
        loading: false,
        myCompany: payload,
        errors: null,
      };

    case ADD_USER_TO_COMPANY:
      return {
        ...state,
        loading: false,
        myCompany: {
          ...state.myCompany,
          employees: [...state.myCompany.employees, payload],
        },
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        myCompany: null,
        connections: [],
      };

    case LOADING_COMPANIES:
      return {
        ...state,
        loading: true,
      };

    case COMPANIES_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
}
