import React, { useReducer } from 'react';
import discussContext from './discussContext';
import discussReducer from './discussReducer';
import { GET_DETAILS, CLEAR_STATE } from '../types';

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
        topic: ' Windows because concern sex its. ',
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

  return (
    <discussContext.Provider
      value={{
        details: state.details,
        getDetails,
        clearState,
      }}
    >
      {props.children}
    </discussContext.Provider>
  );
};

export default DiscussState;
