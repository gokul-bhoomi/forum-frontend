import React, { useContext, Fragment, useEffect, useState } from 'react';
import discussContext from '../../context/discuss/discussContext';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';
import Comments from '../layouts/Comments';

const Post = (props) => {
  const { current, incrementLike, decrementLike, getForum } = useContext(
    discussContext
  );
  const { loadUser, isAuthenticated, user, updateLikes } = useContext(
    authContext
  );
  const { setAlert } = useContext(alertContext);

  const [state, setstate] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) loadUser();

    getForum(props.match.params.id);

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
    if (!isAuthenticated) {
      setAlert(' Please Login to Like ', 'danger');
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
            On: {current ? current.date.substr(0, 10) : 'not found'}
          </p>
        </b>
        <h1 style={{ textAlign: 'center' }}>
          {' '}
          {current ? current.topic : 'not found'}{' '}
        </h1>
      </div>
      <div className='post1'>
        {' '}
        <h4> {current ? current.body : 'not found'} </h4>
        <div className='like'>
          <i class='fas fa-comment' />
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {' '}
            {current ? current.commentstotal : 'not found'}{' '}
          </i>
          <span onClick={onClick}>
            {' '}
            {state && isAuthenticated ? (
              <i class='fas fa-heart' />
            ) : (
              <i class='far fa-heart' />
            )}{' '}
          </span>
          <i style={{ paddingRight: '5px', paddingLeft: '0px' }}>
            {' '}
            {current ? current.likes : 'not found'}{' '}
          </i>
        </div>
      </div>
      <div className='discuss'>
        <Comments {...props} />{' '}
      </div>
    </Fragment>
  );
};

export default Post;
