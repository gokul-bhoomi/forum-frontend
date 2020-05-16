import { GET_DETAILS, CLEAR_STATE } from '../types';

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

    default:
      return state;
  }
};
