import { combineReducers } from "redux";
import { listNewsReducer } from "./NewsReducer";
import { detailNewsReducer } from "./DetailReducer";
import {listTopicReducer} from "./TopicReducer"
const reducer = combineReducers({
  listNewsReducer,
  detailNewsReducer,
  listTopicReducer,
});
export default reducer;
