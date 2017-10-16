import { GET_ALL, GET_ALL_USER, GET_MINE } from "../actions/types";

const INITIAL_STATE = {
  all: {},
  oneUser: {},
  myPins: {},
  gettingAllPins: true,
  gettingUserPins: true,
  gettingMyPins: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL:
      if (action.error || !action.payload.data) {
        return { ...state, gettingAllPins: false };
      }
      return {
        ...state,
        all: action.payload.data,
        gettingAllPins: false
      };
    case GET_ALL_USER:
      if (action.error || !action.payload.data) {
        return { ...state, gettingUserPins: false };
      }
      return {
        ...state,
        oneUser: action.payload.data,
        gettingUserPins: false
      };
    case GET_MINE:
      if (action.error || !action.payload.data) {
        return { ...state, gettingMyPins: false };
      }
      return {
        ...state,
        myPins: action.payload.data,
        gettingMyPins: false
      };
    default:
      return state;
  }
}
