import {
  GET_ALL_COMPANIES,
  GET_MY_COMPANY,
  CREATE_COMPANY,
  SEND_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST,
  REJECT_CONNECTION_REQUEST,
  ADD_USER_TO_COMPANY,
  LOGOUT,
  GET_COMPANY,
  LOADING_COMPANIES,
  COMPANIES_REQUEST_FAILED,
  UPDATE_COMPANY,
  GET_CONNECTIONS_REQUEST,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  companies: [],
  connections: [],
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

    case GET_CONNECTIONS_REQUEST:
      return {
        ...state,
        loading: false,
        connections: payload,
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

    case SEND_CONNECTION_REQUEST:
      return {
        ...state,
        loading: false,
        myCompany: {
          ...state.myCompany,
          sentConnections: [
            ...state.myCompany.sentConnections,
            payload.company,
          ],
        },
        connections: [...state.connections, payload.connection],
      };

    case ACCEPT_CONNECTION_REQUEST:
      return {
        ...state,
        loading: false,
        myCompany: {
          ...state.myCompany,
          companyConnections: [
            ...state.myCompany.companyConnections,
            payload.company,
          ],
          pendingConnections: [
            ...state.myCompany.pendingConnections.filter(
              (com) => com._id === payload.company._id
            ),
          ],
        },
        connections: [...state.connections, payload.connection],
      };

    case REJECT_CONNECTION_REQUEST:
      return {
        ...state,
        loading: false,
        myCompany: {
          ...state.myCompany,
          pendingConnections: [
            ...state.myCompany.pendingConnections.filter(
              (com) => com._id === payload.company._id
            ),
          ],
        },
        connections: [...state.connections, payload.connection],
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
