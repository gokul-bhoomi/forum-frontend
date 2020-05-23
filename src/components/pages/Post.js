import React, { useContext, useEffect, Fragment, useState } from 'react';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';
import discussContext from '../../context/discuss/discussContext';

import Spinner from '../layouts/Spinner';

import axios from 'axios';

const Post = () => {
  const { loadUser, isAuthenticated } = useContext(authContext);
  const { setLoading, loading } = useContext(discussContext);

  const { setAlert } = useContext(alertContext);

  useEffect(() => {
    if (localStorage.getItem('token')) loadUser(); //eslint-disable-next-line;
  }, []);
  const initialState = {
    topic: '',
    body: '',
  };

  const [post, setpost] = useState(initialState);
  const postForum = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      setLoading(true);
      await axios.post('/api/forums', post, config);
      setTimeout(() => {
        setLoading(false);
      }, 300);
      setTimeout(() => {
        alert('Sucessfully Posted !!');
      }, 500);
    } catch (err) {
      setLoading(false);
      setAlert('Sorry Try again', 'danger');
      console.error(err);
    }
  };
  const onChange = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <form className='container'>
              <h2>
                <label htmlFor='title'>Title :</label>
              </h2>
              <input
                type='text'
                className='name'
                id='title'
                name='topic'
                onChange={onChange}
              />{' '}
              <h2>
                <label htmlFor='textarea'>Discussion :</label>{' '}
              </h2>{' '}
              <br />
              <textarea
                id='textarea'
                placeholder='Resize by dragging the bottom-right corner :-)'
                name='body'
                onChange={onChange}
              />{' '}
              <input
                type='submit'
                value='Post'
                className='btn btn-danger'
                onClick={postForum}
              />
            </form>
          </Fragment>
        )
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Please Login to proceed</h1>
        </div>
      )}
    </Fragment>
  );
};

export default Post;
