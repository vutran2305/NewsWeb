import { call, put, takeLatest } from "redux-saga/effects";

import detailApi from "../../service/detailApi";
import {
  fetchDetailError,
  fetchDetailSuccess,
  FETCH_DETAIL_REQUEST,
} from "../action/DetailAction";
export function* getDetailNews(action) {
  try {
    const results = yield call(detailApi.getDetail, action.payload);
    yield put(fetchDetailSuccess(results?.result));
  } catch (error) {
    yield put(fetchDetailError(error));
  }
}
export function* watchGetDetailsNew() {
  yield takeLatest(FETCH_DETAIL_REQUEST, getDetailNews);
}
const saga = [watchGetDetailsNew()];

export default saga;
