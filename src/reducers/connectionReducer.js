import {
  SEND_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST,
  REJECT_CONNECTION_REQUEST,
  GET_CONNECTIONS_REQUEST,
  LOGOUT,
  LOADING_REQUESTS,
  CONNECTIONS_REQUEST_FAILED,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  connections: [],
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONNECTIONS_REQUEST:
      console.log("***********************");
      console.log(payload);
      console.log(state.connections);
      console.log("***********************");
      return {
        ...state,
        loading: false,
        connections: payload,
      };

    case SEND_CONNECTION_REQUEST:
      console.log("***********************");
      console.log(payload);
      console.log(state.connections);
      console.log("***********************");
      return {
        ...state,
        loading: false,
        connections: [...state.connections, payload],
      };

    case ACCEPT_CONNECTION_REQUEST:
      console.log("***********************");
      console.log(payload);
      console.log(state.connections);
      console.log("***********************");

      return {
        ...state,
        loading: false,
        connections: [
          ...state.connections.filter((con) => con._id !== payload._id),
          payload,
        ],
      };

    case REJECT_CONNECTION_REQUEST:
      console.log("***********************");
      console.log(payload);
      console.log(state.connections);
      console.log("***********************");
      return {
        ...state,
        loading: false,
        connections: [
          ...state.connections.filter((con) => con._id !== payload._id),
        ],
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        connections: [],
      };

    case LOADING_REQUESTS:
      return {
        ...state,
        loading: true,
      };

    case CONNECTIONS_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
}
