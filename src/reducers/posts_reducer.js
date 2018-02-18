import * as actionTypes from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload.data;
    case actionTypes.GET_POST:
      const post = action.payload.data;
      return { ...state, post };
    case actionTypes.DELETE_POST:
      const newState = state.posts.filter(el => el.id !== action.payload);
      console.log("new state", newState);
      return newState;
    default:
      return state;
  }
};
