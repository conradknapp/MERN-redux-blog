import * as actionTypes from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload.data;
    default:
      return state;
  }
};
