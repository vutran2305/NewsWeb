export const FETCH_LIST_TOPIC_REQUEST = "FETCH_LIST_TOPIC_REQUEST";
export const FETCH_LIST_TOPIC_SUCCESS = "FETCH_LIST_TOPIC_SUCCESS";
export const FETCH_LIST_TOPIC_ERROR = "FETCH_LIST_TOPIC_ERROR";

export const fetchListTopicRequest = ({ id, page }) => ({
  type: FETCH_LIST_TOPIC_REQUEST,
  payload: { id, page },
});
export const fetchListTopicSuccess = (data, total) => ({
  type: FETCH_LIST_TOPIC_SUCCESS,
  payload: { data, total },
});
export const fetchListTopicError = (error) => ({
  type: FETCH_LIST_TOPIC_ERROR,
  payload: error,
});
