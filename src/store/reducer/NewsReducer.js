import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIsT_ERROR,
} from "../action/NewsAction";

const initialState = {
  loading: false,
  list: [],
  error: null,
};

export function listNewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        // list: [...state.list.concat(action.payload)],
        list: action.payload,
      };
    case FETCH_LIsT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
