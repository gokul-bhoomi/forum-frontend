import React, { useReducer } from 'react';
import discussContext from './userContext';
import discussReducer from './userReducer';
import { ADD_LIKES, REMOVE_LIKES } from '../types';

const DiscussState = (props) => {
  const initialState = {
    user: {
      name: '',
      email: '',
      phone: '',
    },
    liked: [],
  };

  const [state, dispatch] = useReducer(discussReducer, initialState);

  const addLikes = (id) => {
    dispatch({ type: ADD_LIKES, payload: id });
  };
  const removeLikes = (id) => {
    dispatch({ type: REMOVE_LIKES, payload: id });
  };

  return (
    <discussContext.Provider
      value={{
        liked: state.liked,
        addLikes,
        removeLikes,
      }}
    >
      {props.children}
    </discussContext.Provider>
  );
};

export default DiscussState;
