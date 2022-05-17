export const FETCH_DETAIL_REQUEST = "FETCH_DETAIL_REQUEST";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_ERROR = "FETCH_DETAIL_ERROR";

export const fetchDetailRequest = (id) => ({
  type: FETCH_DETAIL_REQUEST,
  payload: id,
});
export const fetchDetailSuccess = (data) => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: data,
});
export const fetchDetailError = (error) => ({
  type: FETCH_DETAIL_ERROR,
  payload: error,
});
