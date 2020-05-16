import { ADD_LIKES, REMOVE_LIKES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case REMOVE_LIKES:
      return {
        ...state,
        liked: state.liked.filter((like) => action.payload !== like),
      };

    case ADD_LIKES:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };

    default:
      return state;
  }
};
