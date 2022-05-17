import {
  FETCH_LIST_TOPIC_REQUEST,
  FETCH_LIST_TOPIC_SUCCESS,
  FETCH_LIST_TOPIC_ERROR,
} from "../action/TopicAction";
const initialState = {
  loading: false,
  list: [],
  error: null,
};

export function listTopicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_TOPIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        // list: action.payload,
        list: [...action.payload],
      };
    case FETCH_LIST_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
