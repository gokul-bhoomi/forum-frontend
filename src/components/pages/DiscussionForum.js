import React, { useContext, Fragment, useEffect, useState } from 'react';
import discussContext from '../../context/discuss/discussContext';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';
import Comments from '../layouts/Comments';

const Post = (props) => {
  const { current, incrementLike, updatePost, getForum, loading } = useContext(
    discussContext
  );
  const { loadUser, isAuthenticated, user, updateLikes } = useContext(
    authContext
  );
  const { setAlert } = useContext(alertContext);

  const [state, setstate] = useState(false);
  const [isedit, setedit] = useState(false);
  const [post, setpost] = useState('');

  useEffect(() => {
    getForum(props.match.params.id);

    if (localStorage.getItem('token')) loadUser();

    //eslint-disable-next-line;
  }, []);

  useEffect(() => {
    if (user !== null) {
      user.liked.forEach((like) => {
        if (props.match.params.id === like) setstate(true);
      });
    }
  }, [user]);

  const onClick = () => {
    if (loading) return;

    if (!isAuthenticated) {
      setAlert(' Please Login to Like ', 'danger');
      return;
    }
    if (state === true) {
      const dislike = props.match.params.id;
      updateLikes({ dislike });
      incrementLike(props.match.params.id, false);

      setstate(false);
    } else {
      const like = props.match.params.id;
      updateLikes({ like });

      console.log(props.match.params.id);
      incrementLike(props.match.params.id, true);
    }
  };
  const edit = (body) => {
    setpost(body);
    setedit(true);
  };
  const onChange = (e) => {
    setpost(e.target.value);
  };

  return (
    <Fragment>
      <div className='post'>
        <b>
          <p style={{ paddingRight: '8px' }}>
            Posted by : {current ? current.name : 'not found'}{' '}
          </p>
          <p
            style={{ textAlign: 'right', float: 'right', paddingRight: '5px' }}
          >
            On: {current ? current.datee.substr(4, 11) : 'not found'}
          </p>
        </b>
        <h1 style={{ textAlign: 'center' }}>
          {' '}
          {current ? current.topic : 'not found'}{' '}
        </h1>
      </div>
      <div
        className='post1'
        style={{
          overflow: 'auto',
          maxHeight: '400px',
        }}
      >
        {' '}
        {isedit ? (
          <Fragment>
            <textarea value={post} onChange={onChange}></textarea>
            <input
              className='btn'
              type='submit'
              value='Update'
              onClick={() => {
                updatePost(post, props.match.params.id);
                updatePost(post, props.match.params.id);

                setedit(false);
              }}
            ></input>
            <input
              className='btn'
              type='submit'
              value='Cancel'
              onClick={() => setedit(false)}
            ></input>
          </Fragment>
        ) : (
          <h4>
            {current ? (loading ? 'Loading...' : current.body) : 'not found'}
          </h4>
        )}
        <div className='like'>
          <i class='fas fa-comment' />
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {current ? current.commentstotal : 'not found'}{' '}
          </i>

          {loading ? (
            ''
          ) : (
            <span onClick={onClick}>
              {' '}
              {state && isAuthenticated ? (
                <i class='fas fa-heart' />
              ) : (
                <i class='far fa-heart' />
              )}{' '}
            </span>
          )}
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {' '}
            {current ? current.likes : 'not found'}{' '}
          </i>

          {!isedit && current && isAuthenticated && user ? (
            current.user === user._id ? (
              <b
                onClick={() => edit(current.body)}
                style={{ cursor: 'pointer' }}
              >
                Edit
              </b>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='discuss'>
        <Comments {...props} />{' '}
      </div>
    </Fragment>
  );
};

export default Post;
