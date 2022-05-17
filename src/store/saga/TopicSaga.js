import { call, put, takeLatest } from "redux-saga/effects";

import listNewsTopicApi from "../../service/listApi";
import {
  fetchListTopicSuccess,
  fetchListTopicError,
  FETCH_LIST_TOPIC_REQUEST,
} from "../action/TopicAction";
export function* getListNewTopic(action) {
  try {
    const { result } = yield call(
      listNewsTopicApi.getListByTopic,
      action.payload
    );

    yield put(fetchListTopicSuccess(result));
  } catch (error) {
    yield put(fetchListTopicError(error));
  }
}
export function* watchGetTopic() {
  yield takeLatest(FETCH_LIST_TOPIC_REQUEST, getListNewTopic);
}
const saga = [watchGetTopic()];

export default saga;
