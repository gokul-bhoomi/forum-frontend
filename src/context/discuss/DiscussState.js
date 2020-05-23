import React, { useReducer } from 'react';
import discussContext from './discussContext';
import discussReducer from './discussReducer';
import axios from 'axios';

import {
  GET_DETAILS,
  CLEAR_STATE,
  SET_CURRENT,
  INCREMENT_LIKES,
  DECREMENT_LIKES,
  SET_LOADING,
  SET_TEXT,
  GET_MYPOSTS,
  UPDATE_POST,
} from '../types';

const DiscussState = (props) => {
  const initialState = {
    details: [],
    current: null,
    loading: false,
    text: '',
    myposts: [],
  };

  const [state, dispatch] = useReducer(discussReducer, initialState);

  const getDetails = async (textt) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const req = { text: textt };
    try {
      setLoading(true);

      const res = await axios.post('/api/forums/post', req, config);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  const clearState = () => {
    dispatch({ type: CLEAR_STATE });
  };
  const setCurrent = (data) => {
    dispatch({ type: SET_CURRENT, payload: data });
  };

  const incrementLike = async (id, flag) => {
    try {
      const req = { flag };
      const res = await axios.put('/api/forums/' + id, req);
      dispatch({ type: INCREMENT_LIKES, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };
  const decrementLike = () => {
    dispatch({ type: DECREMENT_LIKES });
  };
  const setLoading = (e) => {
    dispatch({ type: SET_LOADING, payload: e });
  };

  const setText = (t) => {
    dispatch({ type: SET_TEXT, payload: t });
  };

  const getForum = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const req = { post: id };

    const res = await axios.post('/api/forums/post', req, config);
    setCurrent(res.data);
  };
  const addComment = async (comment, id, d) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const req = { body: comment, date: d };

    const res = await axios.put('/api/forums/comments/' + id, req, config);
    setCurrent(res.data);
  };
  const getmyposts = async () => {
    try {
      setLoading(true);

      const res = await axios.get('/api/forums/myposts');
      dispatch({ type: GET_MYPOSTS, payload: res.data });
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const deletePost = async (id) => {
    setLoading(true);
    const res = await axios.delete('/api/forums/' + id);
    getmyposts();
  };
  const updatePost = async (text, id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const req = { text };
      setLoading(true);

      const res = await axios.put('/api/forums/post/' + id, req, config);
      setCurrent(res.data);
      setCurrent(res.data);

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <discussContext.Provider
      value={{
        details: state.details,
        current: state.current,
        loading: state.loading,
        text: state.text,
        myposts: state.myposts,
        getmyposts,
        getDetails,
        clearState,
        setCurrent,
        incrementLike,
        decrementLike,
        setLoading,
        setText,
        getForum,
        addComment,
        deletePost,
        updatePost,
      }}
    >
      {props.children}
    </discussContext.Provider>
  );
};

export default DiscussState;
