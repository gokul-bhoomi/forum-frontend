import {
  GET_DETAILS,
  CLEAR_STATE,
  SET_CURRENT,
  INCREMENT_LIKES,
  SET_LOADING,
  SET_TEXT,
  GET_MYPOSTS,
  UPDATE_POST,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case CLEAR_STATE:
      return {
        details: [],
        mypost: [],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        current: action.payload,
      };
    case INCREMENT_LIKES:
      return {
        ...state,
        current: action.payload,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case GET_MYPOSTS: {
      return { ...state, myposts: action.payload };
    }

    default:
      return state;
  }
};
