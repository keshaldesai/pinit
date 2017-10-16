import { SIGN_IN, SIGN_OUT, NO_TOKEN } from "../actions/types";

const INITIAL_STATE = { authenticated: false, user: {}, checking: true };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      if (action.error || !action.payload.data) {
        return { ...INITIAL_STATE, checking: false };
      }
      return {
        ...state,
        authenticated: true,
        user: action.payload.data,
        checking: false
      };
    case SIGN_OUT:
      return { ...INITIAL_STATE, checking: false };
    case NO_TOKEN:
      return { ...INITIAL_STATE, checking: false };
    default:
      return state;
  }
}
