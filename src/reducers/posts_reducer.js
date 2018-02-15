import * as actionTypes from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return console.log(action.payload.data);
    default:
      return state;
  }
};
