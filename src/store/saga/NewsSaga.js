import { call, put, takeLatest } from "redux-saga/effects";

import listNewsTopicApi from "../../service/listApi";
import {
  fetchListSuccess,
  fetchListError,
  FETCH_LIST_REQUEST,
} from "../action/NewsAction";
export function* getListNews(action) {
  try {
    const {result} = yield call(listNewsTopicApi.getList, action.payload);
 
    yield put(fetchListSuccess(result));
  } catch (error) {
    yield put(fetchListError(error));
  }
}
export function* watchGetListNews() {
  yield takeLatest(FETCH_LIST_REQUEST, getListNews);
}
const saga = [watchGetListNews()];

export default saga;
