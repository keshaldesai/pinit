import { LIKE_PIN, UNLIKE_PIN } from "../actions/types";

const INITIAL_STATE = { error: "" };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIKE_PIN:
      if (action.error || !action.payload.data) {
        return {
          ...state,
          error: "Error processing request, please refresh page."
        };
      }
      return {
        INITIAL_STATE
      };
    case UNLIKE_PIN:
      if (action.error || !action.payload.data) {
        return {
          ...state,
          error: "Error processing request, please refresh page."
        };
      }
      return {
        INITIAL_STATE
      };
    default:
      return state;
  }
}
