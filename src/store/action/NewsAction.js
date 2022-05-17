export const FETCH_LIST_REQUEST = "FETCH_LIST_REQUEST";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIsT_ERROR = "FETCH_LIsT_ERROR";

export const fetchListRequest = () => ({
  type: FETCH_LIST_REQUEST,
});
export const fetchListSuccess = (data) => ({
  type: FETCH_LIST_SUCCESS,
  payload: data,
});
export const fetchListError = (error) => ({
  type: FETCH_LIsT_ERROR,
  payload: error,
});
