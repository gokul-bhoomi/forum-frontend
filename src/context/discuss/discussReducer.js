import {
  GET_DETAILS,
  CLEAR_STATE,
  SET_CURRENT,
  INCREMENT_LIKES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
    case CLEAR_STATE:
      return {
        details: [],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case INCREMENT_LIKES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
