import {
  FETCH_DETAIL_REQUEST,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_ERROR,
} from "../action/DetailAction";
export const initDetail = {
  News_Id: 0,
  News_Tiltle: "",
  News_description: "",
  News_Content: "",
  Topic_Id: "",
  News_Url: "",
  News_Thumbnail: {
    type: "",
    data: [],
  },
  Created_At: "",
};
const initialState = {
  loading: false,
  detail: initDetail,
  error: null,
};

export function detailNewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        // detail: action?.payload?.data,
        detail: action?.payload,
      };
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
