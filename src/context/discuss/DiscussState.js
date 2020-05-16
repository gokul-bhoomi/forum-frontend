import React, { useReducer } from 'react';
import discussContext from './discussContext';
import discussReducer from './discussReducer';
import {
  GET_DETAILS,
  CLEAR_STATE,
  SET_CURRENT,
  INCREMENT_LIKES,
  DECREMENT_LIKES,
} from '../types';

const DiscussState = (props) => {
  const initialState = {
    details: [
      {
        id: 1,
        user: 'Gokul',
        topic: 'Machine Learning',
        body: '<h1> Hello ML is the new Electricity !! </h1>',
        likes: 0,
        comments: 0,
      },
      {
        id: 2,
        user: 'Gokull',
        topic: 'Machine Learning',
        body: '<h1> Hello ML is the new Electricity !! </h1>',
        likes: 1,
        comments: 0,
      },
      {
        id: 3,
        user: 'Gokulll',
        topic: 'Why Machine Learnig is tough? Why ',
        body: '<h1> Hello ML is the new Electricity !! </h1>',
        likes: 2000,
        comments: 300000,
      },
      {
        id: 4,
        user: 'Gokullll',
        topic: ' Windows because concern  its. ',
        body: '<h1> Hello ML is the new Electricity !! </h1>',
        likes: 3,
        comments: 0,
      },
      {
        id: 5,
        user: 'Keerthna',
        topic: 'I BAKE !!',
        body: '<h1> Hello ML is the new Electricity !! </h1>',
        likes: 4,
        comments: 0,
      },
    ],
    current: {
      id: 4,
      user: 'Gokullll',
      topic: ' Windows because concern  its. ',
      body:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      likes: 3,
      comments: 0,
    },
  };

  const [state, dispatch] = useReducer(discussReducer, initialState);

  const getDetails = async (text) => {
    console.log('hi');
    dispatch({
      type: GET_DETAILS,
      payload: [
        {
          id: 1,
          user: 'Gokul',
          topic: 'Machine Learning',
          body: '<h1> Hello ML is the new Electricity !! </h1>',
          likes: 0,
        },
        {
          id: 2,
          user: 'Gokull',
          topic: 'Machine Learning',
          body: '<h1> Hello ML is the new Electricity !! </h1>',
          likes: 1,
        },
        {
          id: 3,
          user: 'Gokulll',
          topic: 'Machine Learning',
          body: '<h1> Hello ML is the new Electricity !! </h1>',
          likes: 2000,
        },
        {
          id: 4,
          user: 'Gokullll',
          topic: 'Machine Learning',
          body: '<h1> Hello ML is the new Electricity !! </h1>',
          likes: 3,
        },
        {
          id: 5,
          user: 'Gokullllllllll',
          topic: 'Machine Learning',
          body: '<h1> Hello ML is the new Electricity !! </h1>',
          likes: 4,
        },
      ],
    });
  };
  const clearState = () => {
    dispatch({ type: CLEAR_STATE });
  };
  const setCurrent = (data) => {
    dispatch({ type: SET_CURRENT, payload: data });
  };

  const incrementLike = () => {
    dispatch({ type: INCREMENT_LIKES });
  };
  const decrementLike = () => {
    dispatch({ type: DECREMENT_LIKES });
  };

  return (
    <discussContext.Provider
      value={{
        details: state.details,
        current: state.current,
        getDetails,
        clearState,
        setCurrent,
        incrementLike,
        decrementLike,
      }}
    >
      {props.children}
    </discussContext.Provider>
  );
};

export default DiscussState;
