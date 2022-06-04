import { all } from "redux-saga/effects";
import listNews from "./NewsSaga";
import detailNew from "./DetailSaga";
import listNewTopic from "./TopicSaga";

export default function* rootSaga() {
  yield all([
    ...listNews,
    ...detailNew,
    ...listNewTopic,
  ]);
}
