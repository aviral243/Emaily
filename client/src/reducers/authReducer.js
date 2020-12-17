import * as actionTypes from "../actions/types";

export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
